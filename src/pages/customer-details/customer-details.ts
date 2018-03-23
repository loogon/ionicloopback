import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CustomerEditPage } from '../../pages/customer-edit/customer-edit';
import { Customer, Contact, ContactInterface } from '../../ng2/models/index';
import { CustomerApi } from '../../ng2/services/custom/index';
import { MessageboxService } from '../../providers/messagebox-service/messagebox-service';
/**
 * Generated class for the CustomerDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-customer-details',
  templateUrl: 'customer-details.html',
})
export class CustomerDetailsPage implements OnInit {
  customerId: string;
  customer: Customer = new Customer();
  contactsList: Contact[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private customerApi: CustomerApi,
    private mboxService: MessageboxService) {
    this.customerId = navParams.get('customerId');
  }

  ngOnInit() {

  }

  ionViewDidLoad() {
    this.mboxService.showLoading();
    console.log('ionViewDidLoad CustomerDetailsPage');
    this.customerApi.findById<Customer>(this.customerId, { include: 'contacts' }).subscribe((data: Customer) => {
      this.customer = data;
      this.contactsList = data.contacts || [];
      let contact = new Contact(<ContactInterface>{
        name: 'loogon',
        officePhoneNumber: '123456789',
        mobilePhoneNumber: '987654321'
      });

      this.contactsList.push(contact);
    }, error => {
      this.mboxService.showAlert();
    });
  }

  public editCustomer() {
    this.navCtrl.push(CustomerEditPage, { customerId: this.customerId });
  }

}
