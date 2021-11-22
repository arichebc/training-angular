import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiComponent } from './components/ui/ui.component';

@NgModule({
  declarations: [UiComponent],
  imports: [CommonModule, RouterModule],
  exports: [UiComponent],
})
export class UiModule {}
