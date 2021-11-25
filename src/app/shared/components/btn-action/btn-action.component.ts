import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-action',
  templateUrl: './btn-action.component.html',
  styleUrls: ['./btn-action.component.scss'],
})
export class BtnActionComponent implements OnInit {
  @Input() label!: string;
  @Output() submited: EventEmitter<any> = new EventEmitter();
  // doit etre un event
  // doit etre un observable (la souscription est faite automatiquement par angular dans le html du component parent)
  // doit etre un observable chaud
  // ne doit pas etre init avec aucun flux de donnee
  constructor() {}

  ngOnInit(): void {}
  public action(): void {
    this.submited.emit();
  }
}
