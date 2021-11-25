import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabLightComponent } from './components/tab-light/tab-light.component';
import { BtnRouteComponent } from './components/btn-route/btn-route.component';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';

@NgModule({
  declarations: [TabLightComponent, BtnRouteComponent, TotalPipe, StateDirective],
  imports: [CommonModule],
  exports: [TabLightComponent, BtnRouteComponent, TemplatesModule, IconsModule, TotalPipe, StateDirective],
})
export class SharedModule {}
