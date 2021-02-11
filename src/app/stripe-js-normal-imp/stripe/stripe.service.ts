import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPaymentCard, IStripeCustomResponse } from '../model/stripe.model';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  constructor() {

  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      const Stripe = 'Stripe';
      s.onload = () => {
        window['Stripe'].setPublishableKey(environment.stripeKey);
      }
      window.document.body.appendChild(s);
      console.log(s)
    }
  }


  checkIfStripeInitialized() {
    const stripe = 'Stripe';
    if (!(<any>window)[stripe]) {
      alert('Oops! Stripe did not initialize properly.');
      return false;
    }
    return true;
  }

  createStripeCardToken(card: IPaymentCard): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.checkIfStripeInitialized()) {
        return reject({ message: 'Stripe not registered!' });
      }
      const stripeCard = { exp_month: card.cardMonth, exp_year: card.cardYear, number: card.cardNumber, cvc: card.cvc };
      (<any>window).Stripe.card.createToken(stripeCard, (status: number, response: any) => {
        let result: IStripeCustomResponse = {} as IStripeCustomResponse;
        if (status === 200) {
          result.status = true;
          result.message = `Success! Card token ${response.card.id}.`;
          result.token = response.id;
          result.response = response;
          return resolve(result);
        } else {
          result.status = false;
          result.message = response.error.message;
          result.error = response.error;
          return reject(result);
        }
      });
    });
  }
}
