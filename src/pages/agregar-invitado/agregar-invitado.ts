import { InvitadoProvider } from './../../providers/invitado/invitado';
import { Camera } from '@ionic-native/camera';
import { Invitado } from './../../app/interfaces/invitado.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the AgregarInvitadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-invitado',
  templateUrl: 'agregar-invitado.html',
})
export class AgregarInvitadoPage {

  public foto: string = "assets/imgs/camara.jpg";

  invitado: Invitado =  { id:'',nombre : '', foto : ''};
  fotoTomada = false;
  eventoId;


  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,
    public cameraPlugin:Camera,public invitadoServicio: InvitadoProvider,private toastCtrl: ToastController) {

      this.eventoId = this.navParams.get('eventoId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarInvitadoPage');
  }

  takePicture(){
    this.cameraPlugin.getPicture({
      quality: 100,
  destinationType: this.cameraPlugin.DestinationType.DATA_URL,
  encodingType: this.cameraPlugin.EncodingType.JPEG,
  mediaType: this.cameraPlugin.MediaType.PICTURE
    }).then((imageData) => {
      // Se asigna la fotografía tomada al objeto que se almacenará.
      this.invitado.foto = imageData;
      // Se asigna la fotografía tomada a la imagen mostrada.
      this.foto = 'data:image/jpeg;base64,' + imageData;
      this.fotoTomada=true;
    }, () => {
      // Se muestra error en caso de algún fallo.
      let alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'Ha ocurrido un error.',
        buttons: ['OK']
      });
      alert.present();
    });
  }


agregarInvitado(): void {
    if (this.fotoTomada && this.invitado.nombre!='') {


      this.invitadoServicio.addInvitado(this.eventoId, this.invitado).then(
        (success) => {
          let toast = this.toastCtrl.create({
            message: 'Invitado agregado con éxito!',
            duration: 3000
          });
          toast.present();

          this.navCtrl.pop();
        }, (error) => {
          let toast = this.toastCtrl.create({
            message: 'Se ha presentado un error!',
            duration: 3000
          });
          toast.present();
        });
    } else {
      let alert = this.alertCtrl.create({
        title: 'Debe llenar todos los campos!',
        subTitle: 'Por favor ingrese el nombre y la foto del invitado',
        buttons: ['OK']
      });
      alert.present();
    }

  }

}
