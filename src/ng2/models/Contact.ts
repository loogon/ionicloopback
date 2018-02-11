/* tslint:disable */
import {
  User,
  Customer
} from '../index';

declare var Object: any;
export interface ContactInterface {
  "name": string;
  "sex"?: string;
  "title"?: string;
  "department"?: string;
  "address"?: any;
  "officePhoneNumber"?: string;
  "mobilePhoneNumber"?: string;
  "email"?: string;
  "onJob"?: boolean;
  "comments"?: string;
  "id"?: any;
  "customerId"?: any;
  user?: User;
  customer?: Customer;
}

export class Contact implements ContactInterface {
  "name": string;
  "sex": string;
  "title": string;
  "department": string;
  "address": any;
  "officePhoneNumber": string;
  "mobilePhoneNumber": string;
  "email": string;
  "onJob": boolean;
  "comments": string;
  "id": any;
  "customerId": any;
  user: User;
  customer: Customer;
  constructor(data?: ContactInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Contact`.
   */
  public static getModelName() {
    return "Contact";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Contact for dynamic purposes.
  **/
  public static factory(data: ContactInterface): Contact{
    return new Contact(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Contact',
      plural: 'Contacts',
      path: 'Contacts',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string',
          default: '""'
        },
        "sex": {
          name: 'sex',
          type: 'string'
        },
        "title": {
          name: 'title',
          type: 'string'
        },
        "department": {
          name: 'department',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'any'
        },
        "officePhoneNumber": {
          name: 'officePhoneNumber',
          type: 'string',
          default: ''
        },
        "mobilePhoneNumber": {
          name: 'mobilePhoneNumber',
          type: 'string',
          default: ''
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "onJob": {
          name: 'onJob',
          type: 'boolean'
        },
        "comments": {
          name: 'comments',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "customerId": {
          name: 'customerId',
          type: 'any'
        },
      },
      relations: {
        user: {
          name: 'user',
          type: 'User',
          model: 'User',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'staffInChargeId'
        },
        customer: {
          name: 'customer',
          type: 'Customer',
          model: 'Customer',
          relationType: 'belongsTo',
                  keyFrom: 'customerId',
          keyTo: 'id'
        },
      }
    }
  }
}
