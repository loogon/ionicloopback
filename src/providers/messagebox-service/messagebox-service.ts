import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Loading } from 'ionic-angular';

/*
  Generated class for the MessageboxService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageboxService {
  loading: Loading;
  constructor(private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    console.log('Hello MessageboxService Provider');
  }

  public showLoading(content: string = '') {
    this.loading = this.loadingCtrl.create({
      content: content,
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  public showAlert(title: string = '错误', content: string = '') {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: '错误',
      subTitle: content,
      buttons: ['OK']
    });
    alert.present();
  }
}
