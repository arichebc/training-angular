import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabLightComponent } from './components/tab-light/tab-light.component';
import { BtnRouteComponent } from './components/btn-route/btn-route.component';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';
import { BtnActionComponent } from './components/btn-action/btn-action.component';

@NgModule({
  declarations: [
    TabLightComponent,
    BtnRouteComponent,
    TotalPipe,
    StateDirective,
    BtnActionComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    TabLightComponent,
    BtnRouteComponent,
    TemplatesModule,
    IconsModule,
    TotalPipe,
    StateDirective,
    BtnActionComponent,
  ],
})
export class SharedModule {}
