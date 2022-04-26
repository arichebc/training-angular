import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignIn } from 'src/app/core/models/sign-in';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss'],
})
export class FormSignInComponent implements OnInit {
  @Input() init: SignIn;
  @Output() submited: EventEmitter<SignIn> = new EventEmitter<SignIn>();
  public form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.init = new SignIn();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [this.init.email],
      password: [this.init.password],
    });
  }

  public onSubmit(): void {
    console.log('hello');
    this.submited.emit(this.form.value);
  }
}
