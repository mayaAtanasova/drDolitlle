import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class PhoneValidation {

    static checkPhoneNumber(controlName: string): ValidatorFn {

        return (controls: AbstractControl) => {
            const control = controls.get(controlName);
            
            if (!(/^08\d{8}$/.test(control?.value))) {
                controls.get(controlName)?.setErrors({ nrInvalid: true });
                return { nrInvalid: true };
            } else {
                return null;
            }
        };
    }
}