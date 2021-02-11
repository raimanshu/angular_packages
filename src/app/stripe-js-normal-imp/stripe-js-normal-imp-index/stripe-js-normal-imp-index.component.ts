import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { StripeService } from '../stripe/stripe.service';
import { IPaymentCard, IStripeCustomResponse } from '../model/stripe.model';
import { CreditCardValidator } from '../validators/credit-card.validator';
import { NoWhitespaceValidator } from '../validators/no-whitespace.validator';

@Component({
  selector: 'app-stripe-js-normal-imp-index',
  templateUrl: './stripe-js-normal-imp-index.component.html',
  styleUrls: ['./stripe-js-normal-imp-index.component.css']
})
export class StripeJsNormalImpIndexComponent implements OnInit {

  paymentForm: FormGroup;
  sub = false;
  private data: any;
  id: string;
  showSpinner = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private stripeService: StripeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.stripeService.loadStripe();
    this.initializePayment();
    this.paymentID();
  }

  paymentID() {
    this.data = this.route.params.subscribe(params => {
      if (params) {
        this.id = params['id'];
      }
    });
  }

  initializePayment() {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [CreditCardValidator.validateCard]],
      cardholderName: ['', [Validators.required, Validators.minLength(1), NoWhitespaceValidator]],
      cvc: ['', [Validators.required, CreditCardValidator.validateCVV]],
      cardMonth: ['', [Validators.required]],
      cardYear: ['', [Validators.required]],
    })
  }
  get f() {
    return this.paymentForm.controls;
  }

  submit() {
    this.sub = true;
    if (this.paymentForm.invalid) {
      return
    }
    this.showSpinner = true;
    const payload: IPaymentCard = this.paymentForm.value;
    this.createStripeToken(payload);
  }

  async createStripeToken(cardPayload: IPaymentCard) {
    const stripeToken: IStripeCustomResponse = await this.stripeService.createStripeCardToken(cardPayload)
      .catch((error: IStripeCustomResponse) => {
        console.log('Error: ', error.message);
        this.showSpinner = false;
        alert(error.message);
      });


    if (stripeToken && stripeToken.token) {
      cardPayload.token = stripeToken.token;
      // cardPayload = this.beforeAddUpdateHandler({ ...cardPayload });
      this.createNewCard(cardPayload);
      console.log(stripeToken);
    }
  }

  createNewCard(cardPayload: IPaymentCard) {
    console.log(cardPayload)
    const email = localStorage.getItem('email');
    const obj = new Object({
      stripeEmail: email,
      subscription_plan_id: this.id,
      stripeToken: cardPayload.token
    })
    console.log(obj);

    // this.paymentservice.paymentPlan(obj).pipe(
    //   finalize(() => {
    //     this.showSpinner = false;
    //   }),
    // ).subscribe(res => {
    //   if (res.status && JSON.stringify(res) !== '{}') {
    //     this.tostr.success('Success', res.message);
    //     this.router.navigate([RoutePath.Empty])
    //   } else {
    //     this.tostr.error('Error', 'Payment interrupted');
    //   }
    // }, error => {
    //   this.tostr.error('Error', 'Payment interrupted');
    // })

  }

  cancel() {
    // this.router.navigate([RoutePath.subscription])
  }

}
