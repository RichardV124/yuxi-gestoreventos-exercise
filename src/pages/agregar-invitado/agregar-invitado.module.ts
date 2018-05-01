import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarInvitadoPage } from './agregar-invitado';

@NgModule({
  declarations: [
    AgregarInvitadoPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarInvitadoPage),
  ],
})
export class AgregarInvitadoPageModule {}
