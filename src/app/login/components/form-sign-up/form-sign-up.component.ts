import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.scss'],
})
export class FormSignUpComponent implements OnInit {
  public form!: FormGroup;
  @Output() submited: EventEmitter<any> = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmedPassword: ['', Validators.required],
    });
  }

  public register(): void {
    if (
      this.form.controls['password'].value ===
      this.form.controls['confirmedPassword'].value
    ) {
      // console.log(this.form.value);
      this.submited.emit(this.form.value);
    }
  }
}
