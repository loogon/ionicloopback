/* tslint:disable */
import {
  User,
  Equipment,
  Contact,
  Employee,
  ReportCode,
  Dispatch,
  DisposeRecord
} from '../index';

declare var Object: any;
export interface ReportInterface {
  "name"?: string;
  "customerName"?: string;
  "customerAddress"?: string;
  "productName"?: string;
  "modelName"?: string;
  "recorder"?: string;
  "reporter"?: string;
  "reporterPhone"?: string;
  "reporterType"?: string;
  "serviceCategory"?: string;
  "contacts"?: string;
  "contactsPhone"?: string;
  "extraInformation"?: string;
  "status"?: string;
  "startDate"?: Date;
  "endDate"?: Date;
  "comments"?: Date;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "equipmentId"?: any;
  "customerContactsId"?: any;
  "employeeInChargeId"?: any;
  "code"?: string;
  createdBy?: User;
  lastUpdatedBy?: User;
  equipment?: Equipment;
  user?: User;
  customerContacts?: Contact;
  employeeInCharge?: Employee;
  codeInfo?: ReportCode;
  dispatch?: Dispatch;
  disposeRecords?: DisposeRecord[];
}

export class Report implements ReportInterface {
  "name": string;
  "customerName": string;
  "customerAddress": string;
  "productName": string;
  "modelName": string;
  "recorder": string;
  "reporter": string;
  "reporterPhone": string;
  "reporterType": string;
  "serviceCategory": string;
  "contacts": string;
  "contactsPhone": string;
  "extraInformation": string;
  "status": string;
  "startDate": Date;
  "endDate": Date;
  "comments": Date;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "equipmentId": any;
  "customerContactsId": any;
  "employeeInChargeId": any;
  "code": string;
  createdBy: User;
  lastUpdatedBy: User;
  equipment: Equipment;
  user: User;
  customerContacts: Contact;
  employeeInCharge: Employee;
  codeInfo: ReportCode;
  dispatch: Dispatch;
  disposeRecords: DisposeRecord[];
  constructor(data?: ReportInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Report`.
   */
  public static getModelName() {
    return "Report";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Report for dynamic purposes.
  **/
  public static factory(data: ReportInterface): Report{
    return new Report(data);
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
      name: 'Report',
      plural: 'Reports',
      path: 'Reports',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "customerName": {
          name: 'customerName',
          type: 'string'
        },
        "customerAddress": {
          name: 'customerAddress',
          type: 'string'
        },
        "productName": {
          name: 'productName',
          type: 'string'
        },
        "modelName": {
          name: 'modelName',
          type: 'string'
        },
        "recorder": {
          name: 'recorder',
          type: 'string'
        },
        "reporter": {
          name: 'reporter',
          type: 'string'
        },
        "reporterPhone": {
          name: 'reporterPhone',
          type: 'string'
        },
        "reporterType": {
          name: 'reporterType',
          type: 'string'
        },
        "serviceCategory": {
          name: 'serviceCategory',
          type: 'string'
        },
        "contacts": {
          name: 'contacts',
          type: 'string'
        },
        "contactsPhone": {
          name: 'contactsPhone',
          type: 'string'
        },
        "extraInformation": {
          name: 'extraInformation',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "startDate": {
          name: 'startDate',
          type: 'Date'
        },
        "endDate": {
          name: 'endDate',
          type: 'Date'
        },
        "comments": {
          name: 'comments',
          type: 'Date'
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
        "equipmentId": {
          name: 'equipmentId',
          type: 'any'
        },
        "customerContactsId": {
          name: 'customerContactsId',
          type: 'any'
        },
        "employeeInChargeId": {
          name: 'employeeInChargeId',
          type: 'any'
        },
        "code": {
          name: 'code',
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
        equipment: {
          name: 'equipment',
          type: 'Equipment',
          model: 'Equipment',
          relationType: 'belongsTo',
                  keyFrom: 'equipmentId',
          keyTo: 'id'
        },
        user: {
          name: 'user',
          type: 'User',
          model: 'User',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'staffInChargeId'
        },
        customerContacts: {
          name: 'customerContacts',
          type: 'Contact',
          model: 'Contact',
          relationType: 'belongsTo',
                  keyFrom: 'customerContactsId',
          keyTo: 'id'
        },
        employeeInCharge: {
          name: 'employeeInCharge',
          type: 'Employee',
          model: 'Employee',
          relationType: 'belongsTo',
                  keyFrom: 'employeeInChargeId',
          keyTo: 'id'
        },
        codeInfo: {
          name: 'codeInfo',
          type: 'ReportCode',
          model: 'ReportCode',
          relationType: 'belongsTo',
                  keyFrom: 'code',
          keyTo: 'code'
        },
        dispatch: {
          name: 'dispatch',
          type: 'Dispatch',
          model: 'Dispatch',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'reportId'
        },
        disposeRecords: {
          name: 'disposeRecords',
          type: 'DisposeRecord[]',
          model: 'DisposeRecord',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'reportId'
        },
      }
    }
  }
}
