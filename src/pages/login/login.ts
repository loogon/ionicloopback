import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService,
    private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  public createAccount() {
    this.navCtrl.push(RegisterPage);
  }

  public login() {
    this.showLoading();
    this.auth.login(this.registerCredentials, false).subscribe(allowed => {
      if (allowed) {
        this.navCtrl.setRoot(HomePage);
      } else {
        this.showError('拒绝访问');
      }
    },
      error => {
        let errInfo = '';
        if (typeof error === 'string' && error !== '') {
          errInfo = error;
        } else {
          errInfo = error.message || '';
        }
        this.showError(`登录失败(${errInfo})`);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: '登录中...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: '错误',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
