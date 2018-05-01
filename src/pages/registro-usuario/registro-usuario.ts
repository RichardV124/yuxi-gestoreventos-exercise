import { HomePage } from './../home/home';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegistroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-usuario',
  templateUrl: 'registro-usuario.html',
})
export class RegistroUsuarioPage {

  user= { email : '', password : ''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthProvider,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroUsuarioPage');
  }

 
  signin(){
    this.auth.registrarUsuario(this.user.email,this.user.password)
    .then((user) => {
      // El usuario se ha creado correctamente
      this.navCtrl.setRoot(HomePage);
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })

  }

}
