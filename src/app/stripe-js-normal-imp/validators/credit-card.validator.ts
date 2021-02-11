/* define(['jquery'], function () {

    return function (cardNumber) {
        if(!isNaN('') && parseInt('', 10) > 0){
          return false;
        }
        var re = {
                visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
                mastercard: /^5[1-5]\d{14}$|^2(?:2(?:2[1-9]|[3-9]\d)|[3-6]\d\d|7(?:[01]\d|20))\d{12}$/,
                amex: /^3[47][0-9]{13}$/,
                discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
                JCBCardPattern : /^(?:2131|1800|35\d{3})\d{11}$/,
                DinersClubCardPattern : /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
                enRouteCardPattern : /^(2014|2149)/
            },
            keys = Object.keys(re),
            key, check;

            for (var i = 0, l = keys.length; i < l; i++) {
                key = keys[i];
                check = re[key];
                if (check.test(cardNumber)) {
                    return true;
                }
            }
        return false;
    }

}); */


import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
// import { CRED_CARD_REGEX } from '../../../shared/const/app.constant';


export class CreditCardValidator {



    static validateCard(control: AbstractControl): { [key: string]: any } | null {
        let cValue = control.value;
         let CRED_CARD_REGEX = /^(?:4[0-9]{15}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        cValue = (cValue || '').toString().trim();
        if (!cValue)
            return { required: true };

        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (cValue.match(CRED_CARD_REGEX)) {
            return null;
        } else {
            return { invalidCreditCard: true };
        }
    }

    /* static validateCard(control: AbstractControl): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            let cValue = control.value.toString();
            cValue = (cValue || '').trim();
            if (!cValue)
                return { required: true };

            // Visa, MasterCard, American Express, Diners Club, Discover, JCB
            if (cValue.match(CRED_CARD_REGEX)) {
                return null;
            } else {
                return { invalidCreditCard: true };
            }
        }
    } */

    /* static validateCVV(control: AbstractControl): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            let cValue = control.value.toString();
            cValue = (cValue || '').trim();
            if (cValue.length > 2 && cValue.length < 5) {
                return null;
            }
            else {
                return { invalidCVV: true };
            }
        }
    } */

    static validateCVV(control: AbstractControl): { [key: string]: any } | null {
        let cValue = control.value;
        cValue = (cValue || '').toString().trim();
        if (!cValue)
            return { required: true };

        if (cValue.length >= 3 && cValue.length < 5) {
            return null;
        } else {
            return { invalidCVV: true };
        }
    }




}