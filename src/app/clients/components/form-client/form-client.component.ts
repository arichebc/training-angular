import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit {
  @Input() init: Client;
  @Output() submited: EventEmitter<Client> = new EventEmitter<Client>();
  public states = Object.values(StateClient);
  public form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.init = new Client();
  }

  ngOnInit(): void {
    console.log(this.init);

    this.form = this.fb.group({
      name: [this.init.name, [Validators.required, Validators.minLength(2)]],
      tva: [this.init.tva],
      state: [this.init.state],
      totalCaHt: [this.init.totalCaHt],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public onSubmit(): void {
    this.submited.emit(this.form.value);
  }
}
