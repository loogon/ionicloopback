/* tslint:disable */
import {
  User,
  Equipment,
  Contact,
  Employee,
  GeoPoint
} from '../index';

declare var Object: any;
export interface CustomerInterface {
  "name": string;
  "customerNo"?: string;
  "category"?: string;
  "hospitalType"?: string;
  "hospitalRank"?: string;
  "geolocation"?: GeoPoint;
  "address"?: any;
  "phoneNumber"?: string;
  "email"?: string;
  "comments"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "staffInChargeId"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
  equipments?: Equipment[];
  contacts?: Contact[];
  employee?: Employee;
}

export class Customer implements CustomerInterface {
  "name": string;
  "customerNo": string;
  "category": string;
  "hospitalType": string;
  "hospitalRank": string;
  "geolocation": GeoPoint;
  "address": any;
  "phoneNumber": string;
  "email": string;
  "comments": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "staffInChargeId": any;
  createdBy: User;
  lastUpdatedBy: User;
  equipments: Equipment[];
  contacts: Contact[];
  employee: Employee;
  constructor(data?: CustomerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Customer`.
   */
  public static getModelName() {
    return "Customer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Customer for dynamic purposes.
  **/
  public static factory(data: CustomerInterface): Customer{
    return new Customer(data);
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
      name: 'Customer',
      plural: 'Customers',
      path: 'Customers',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "customerNo": {
          name: 'customerNo',
          type: 'string'
        },
        "category": {
          name: 'category',
          type: 'string'
        },
        "hospitalType": {
          name: 'hospitalType',
          type: 'string'
        },
        "hospitalRank": {
          name: 'hospitalRank',
          type: 'string'
        },
        "geolocation": {
          name: 'geolocation',
          type: 'GeoPoint'
        },
        "address": {
          name: 'address',
          type: 'any'
        },
        "phoneNumber": {
          name: 'phoneNumber',
          type: 'string',
          default: ''
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "comments": {
          name: 'comments',
          type: 'string'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "lastUpdatedAt": {
          name: 'lastUpdatedAt',
          type: 'Date',
          default: new Date(0)
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "createdBy": {
          name: 'createdBy',
          type: 'any'
        },
        "lastUpdatedBy": {
          name: 'lastUpdatedBy',
          type: 'any'
        },
        "staffInChargeId": {
          name: 'staffInChargeId',
          type: 'any'
        },
      },
      relations: {
        createdBy: {
          name: 'createdBy',
          type: 'User',
          model: 'User',
          relationType: 'belongsTo',
                  keyFrom: 'createdBy',
          keyTo: 'id'
        },
        lastUpdatedBy: {
          name: 'lastUpdatedBy',
          type: 'User',
          model: 'User',
          relationType: 'belongsTo',
                  keyFrom: 'lastUpdatedBy',
          keyTo: 'id'
        },
        equipments: {
          name: 'equipments',
          type: 'Equipment[]',
          model: 'Equipment',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'customerId'
        },
        contacts: {
          name: 'contacts',
          type: 'Contact[]',
          model: 'Contact',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'customerId'
        },
        employee: {
          name: 'employee',
          type: 'Employee',
          model: 'Employee',
          relationType: 'belongsTo',
                  keyFrom: 'staffInChargeId',
          keyTo: 'id'
        },
      }
    }
  }
}
