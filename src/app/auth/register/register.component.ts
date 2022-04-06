import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import Validation from '../password-validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  isSuccessful = false;
  isSubmitted = false;
  errorMessage = '';

  constructor(
    private FormBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    const { email, password } = this.form.value;
    this.authService.register(email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSubmitted = true;  
        this.router.navigate(['/'])      
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSubmitted = true;
        this.isSuccessful = false;
        setTimeout(() => this.hideAlert(), 2000);
      }
    });
  }

  hideAlert() {
    this.isSubmitted = false;
    this.isSuccessful = false;
    this.errorMessage = ''
  }

}
