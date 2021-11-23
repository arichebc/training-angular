import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';

@NgModule({
  declarations: [
    IconCloseComponent,
    IconNavComponent,
    IconDeleteComponent,
    IconEditComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    IconCloseComponent,
    IconNavComponent,
    IconDeleteComponent,
    IconEditComponent,
  ],
})
export class IconsModule {}
