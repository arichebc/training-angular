import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { FormClientComponent } from './components/form-client/form-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { ClientsEffects } from './store/effects/clients.effects';
import { ClientsFacade } from './store/facade/clients.facade';
import {
  clientsFeatureKey,
  clientsReducer,
} from './store/reducer/clients.reducer';

@NgModule({
  declarations: [
    PageListClientsComponent,
    PageEditClientComponent,
    PageAddClientComponent,
    FormClientComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(clientsFeatureKey, clientsReducer),
    EffectsModule.forFeature([ClientsEffects]),
  ],
  providers: [ClientsFacade],
})
export class ClientsModule {}
