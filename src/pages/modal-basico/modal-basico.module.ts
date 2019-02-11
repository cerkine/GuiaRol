import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalBasicoPage } from './modal-basico';

@NgModule({
  declarations: [
    ModalBasicoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalBasicoPage),
  ],
})
export class ModalBasicoPageModule {}
