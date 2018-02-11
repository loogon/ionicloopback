/* tslint:disable */
import {
  User,
  Employee,
  Equipment,
  LocationReport,
  Dispatch
} from '../index';

declare var Object: any;
export interface SignInInterface {
  "time": Date;
  "type"?: string;
  "signType"?: number;
  "address"?: string;
  "customerName"?: string;
  "dispatchNumber"?: string;
  "comments"?: string;
  "description"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "employeeId"?: any;
  "equipmentId"?: any;
  "dispatchId"?: string;
  createdBy?: User;
  lastUpdatedBy?: User;
  employee?: Employee;
  equipment?: Equipment;
  locationReport?: LocationReport;
  dispatch?: Dispatch;
}

export class SignIn implements SignInInterface {
  "time": Date;
  "type": string;
  "signType": number;
  "address": string;
  "customerName": string;
  "dispatchNumber": string;
  "comments": string;
  "description": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "employeeId": any;
  "equipmentId": any;
  "dispatchId": string;
  createdBy: User;
  lastUpdatedBy: User;
  employee: Employee;
  equipment: Equipment;
  locationReport: LocationReport;
  dispatch: Dispatch;
  constructor(data?: SignInInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SignIn`.
   */
  public static getModelName() {
    return "SignIn";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SignIn for dynamic purposes.
  **/
  public static factory(data: SignInInterface): SignIn{
    return new SignIn(data);
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
      name: 'SignIn',
      plural: 'SignIns',
      path: 'SignIns',
      idName: 'id',
      properties: {
        "time": {
          name: 'time',
          type: 'Date'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "signType": {
          name: 'signType',
          type: 'number',
          default: 0
        },
        "address": {
          name: 'address',
          type: 'string'
        },
        "customerName": {
          name: 'customerName',
          type: 'string'
        },
        "dispatchNumber": {
          name: 'dispatchNumber',
          type: 'string'
        },
        "comments": {
          name: 'comments',
          type: 'string'
        },
        "description": {
          name: 'description',
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
        "employeeId": {
          name: 'employeeId',
          type: 'any'
        },
        "equipmentId": {
          name: 'equipmentId',
          type: 'any'
        },
        "dispatchId": {
          name: 'dispatchId',
          type: 'string'
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
        employee: {
          name: 'employee',
          type: 'Employee',
          model: 'Employee',
          relationType: 'belongsTo',
                  keyFrom: 'employeeId',
          keyTo: 'id'
        },
        equipment: {
          name: 'equipment',
          type: 'Equipment',
          model: 'Equipment',
          relationType: 'belongsTo',
                  keyFrom: 'equipmentId',
          keyTo: 'id'
        },
        locationReport: {
          name: 'locationReport',
          type: 'LocationReport',
          model: 'LocationReport',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'signInId'
        },
        dispatch: {
          name: 'dispatch',
          type: 'Dispatch',
          model: 'Dispatch',
          relationType: 'belongsTo',
                  keyFrom: 'dispatchId',
          keyTo: 'dispatchNumber'
        },
      }
    }
  }
}
