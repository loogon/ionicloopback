import { Component } from '@angular/core';
import { NavController, NavParams, Loading } from 'ionic-angular';
import { CustomerDetailsPage } from '../customer-details/customer-details';
import { Customer } from '../../ng2/models/index';
import { CustomerApi } from '../../ng2/services/custom/index';
import { MessageboxService } from '../../providers/messagebox-service/messagebox-service';
/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  private offset = 0;
  private customerList: Customer[];
  private loading: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams, private customerApi: CustomerApi,
    private mboxService: MessageboxService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
    this.mboxService.showLoading();
    this.customerApi.find<Customer>({ offset: this.offset, limit: 5 }).subscribe((data: Customer[]) => {
      this.customerList = data;
      data.forEach(customer => {
        console.log(customer);
      });
    }, error => {

    });
  }

  public showCustomerDetails(customer: Customer) {
    this.navCtrl.push(CustomerDetailsPage, { customerId: customer.id });
  }

  getItems(ev: any) {
    let val = ev.target.value;
    var regex = '/.*' + val.replace(/\s+/g, '.*') + '.*/';
    let where = {
      name: { regexp: regex }
    };
    this.customerApi.find<Customer>({ where: where, limit: 5 }).subscribe((data: Customer[]) => {
      this.customerList = data;
    });
  }

  doRefresh(refresher) {
    let newOffset = 0;
    this.customerApi.find<Customer>({ offset: newOffset, limit: 5 }).subscribe((data: Customer[]) => {
      this.customerList = data;
      this.offset = newOffset;
      refresher.complete();
    });
  }

  doInfinite(infiniteScroll): Promise<any> {
    return new Promise(resolve => {
      let newOffset = this.offset + 5;
      this.customerApi.find<Customer>({ offset: newOffset, limit: 5 }).subscribe((data: Customer[]) => {
        this.customerList.push(...data);
        this.offset = newOffset;
        resolve();
      });
    });
  }
}
