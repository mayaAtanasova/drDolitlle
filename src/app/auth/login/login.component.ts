import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  isLoggedIn = false;
  isSuccessful = false;
  isSubmitted = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private FormBuilder: FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    })

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser()!.roles;
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    const { email, password } = this.form.value;
    this.authService.login(email, password).subscribe({
      next: data => {
        console.log(data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isSuccessful = true;
        this.isSubmitted = true;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser()!.roles;
        if(this.roles.includes('ROLE_ADMIN')){
          this.router.navigate(['/admin']);
        } else if (this.roles.includes('ROLE_MODERATOR')){
          this.router.navigate(['/adverts']);
        } else if (this.roles.includes('ROLE_USER')){
          this.router.navigate(['/']);
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSubmitted = true;
        this.isSuccessful = false;
        setTimeout(() => this.hideAlert(), 2000);
      }
    })
  }

  hideAlert() {
    this.isSubmitted = false;
    this.isSuccessful = false;
    this.errorMessage = ''
  }

}
