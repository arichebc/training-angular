import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-form-signin',
  templateUrl: './form-signin.component.html',
  styleUrls: ['./form-signin.component.scss'],
})
export class FormSigninComponent implements OnInit {
  public form!: FormGroup;
  public typeInput = 'password';
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public register(): void {
    console.log(this.form.value);

    // const email = this.form.controls['email'].value;
    // const password = this.form.controls['password'].value;
    this.authService.signIn(this.form.value).subscribe((data) => {
      console.log(data);
    });
  }

  public toggleType(): void {
    if (this.typeInput === 'password') {
      this.typeInput = 'text';
    } else {
      this.typeInput = 'password';
    }
  }
}
