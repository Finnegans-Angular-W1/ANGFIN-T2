import { AbstractControl } from "@angular/forms";

export function adultAgeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const birthdate = new Date(control.value);
    const age = new Date().getFullYear() - birthdate.getFullYear();
/*     console.log('Diferencia', age); */

    if (age < 18){
        return { 'age': true };
    }
    return null;
}
