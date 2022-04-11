import { FormControl } from "@angular/forms";

export function requiredFileType() {
    return function (control: FormControl) {
        const file = control.value;
        if (file) {
            const extension = file.split('.')[1].trim().toLowerCase();
            if (extension !== 'png' && extension !== 'jpg') {
                control.setErrors({ requiredFileType: true });
                return {
                    requiredFileType: true
                };
            }

            return null;
        }

        return null;
    };
}