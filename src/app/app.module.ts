import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventoProvider } from '../providers/evento/evento';
import { AuthProvider } from '../providers/auth/auth';
import { Camera } from '@ionic-native/camera';
import { InvitadoProvider } from '../providers/invitado/invitado';


var firebase = {
  apiKey: "AIzaSyCkszjzs49ruV0UCnzyPhVHIV4efsnZQE0",
  authDomain: "ionic-gestor-de-eventos.firebaseapp.com",
  databaseURL: "https://ionic-gestor-de-eventos.firebaseio.com",
  projectId: "ionic-gestor-de-eventos",
  storageBucket: "ionic-gestor-de-eventos.appspot.com",
  messagingSenderId: "271130111815"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventoProvider,
    Camera,
    AuthProvider,
    InvitadoProvider
  ]
})
export class AppModule {}
