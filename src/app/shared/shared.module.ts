import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabLightComponent } from './components/tab-light/tab-light.component';
import { BtnRouteComponent } from './components/btn-route/btn-route.component';



@NgModule({
  declarations: [
    TabLightComponent,
    BtnRouteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabLightComponent,
    BtnRouteComponent
  ]
})
export class SharedModule { }
