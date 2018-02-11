/* tslint:disable */
import {
  User,
  Employee,
  Dispatch,
  Equipment,
  ApplyAccessoryList
} from '../index';

declare var Object: any;
export interface AccessoryApplicationInterface {
  "applicationNumber": string;
  "applicationDate"?: Date;
  "department"?: string;
  "applicantPhone"?: string;
  "applyStatus"?: string;
  "customerContactsName"?: string;
  "customerContactsPhone"?: string;
  "receiveDate"?: Date;
  "feedbackDate"?: Date;
  "damageSendbackStatus"?: string;
  "damageSendbackDate"?: Date;
  "accessoryCount"?: number;
  "requirementType"?: string;
  "urgencyLevel"?: string;
  "deliveryCompany"?: string;
  "deliveryPerson"?: string;
  "supplyCompnay"?: string;
  "deliverySerialNo"?: string;
  "deliveryFee"?: number;
  "deliveryFeeType"?: string;
  "deliveryType"?: string;
  "arrivalPlace"?: string;
  "deliveryDate"?: Date;
  "receiverCompany"?: string;
  "receiver"?: string;
  "receiverAddr"?: string;
  "receiverPhone"?: string;
  "postcode"?: string;
  "vertifyEmployee"?: string;
  "vertifyDate"?: Date;
  "approveEmployee"?: string;
  "approveDate"?: Date;
  "reason"?: string;
  "suggestion"?: string;
  "leaveProblem"?: string;
  "remark"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "employeeId"?: any;
  "dispatchId"?: string;
  "equipmentId"?: any;
  "applyEmployeeId"?: any;
  "feedbackEmployeeId"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
  employeeInCharge?: Employee;
  dispatch?: Dispatch;
  equipment?: Equipment;
  applicant?: Employee;
  feedbackEmployee?: Employee;
  applyAccessoryList?: ApplyAccessoryList[];
}

export class AccessoryApplication implements AccessoryApplicationInterface {
  "applicationNumber": string;
  "applicationDate": Date;
  "department": string;
  "applicantPhone": string;
  "applyStatus": string;
  "customerContactsName": string;
  "customerContactsPhone": string;
  "receiveDate": Date;
  "feedbackDate": Date;
  "damageSendbackStatus": string;
  "damageSendbackDate": Date;
  "accessoryCount": number;
  "requirementType": string;
  "urgencyLevel": string;
  "deliveryCompany": string;
  "deliveryPerson": string;
  "supplyCompnay": string;
  "deliverySerialNo": string;
  "deliveryFee": number;
  "deliveryFeeType": string;
  "deliveryType": string;
  "arrivalPlace": string;
  "deliveryDate": Date;
  "receiverCompany": string;
  "receiver": string;
  "receiverAddr": string;
  "receiverPhone": string;
  "postcode": string;
  "vertifyEmployee": string;
  "vertifyDate": Date;
  "approveEmployee": string;
  "approveDate": Date;
  "reason": string;
  "suggestion": string;
  "leaveProblem": string;
  "remark": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "createdBy": any;
  "lastUpdatedBy": any;
  "employeeId": any;
  "dispatchId": string;
  "equipmentId": any;
  "applyEmployeeId": any;
  "feedbackEmployeeId": any;
  createdBy: User;
  lastUpdatedBy: User;
  employeeInCharge: Employee;
  dispatch: Dispatch;
  equipment: Equipment;
  applicant: Employee;
  feedbackEmployee: Employee;
  applyAccessoryList: ApplyAccessoryList[];
  constructor(data?: AccessoryApplicationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AccessoryApplication`.
   */
  public static getModelName() {
    return "AccessoryApplication";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AccessoryApplication for dynamic purposes.
  **/
  public static factory(data: AccessoryApplicationInterface): AccessoryApplication{
    return new AccessoryApplication(data);
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
      name: 'AccessoryApplication',
      plural: 'AccessoryApplications',
      path: 'AccessoryApplications',
      idName: 'applicationNumber',
      properties: {
        "applicationNumber": {
          name: 'applicationNumber',
          type: 'string'
        },
        "applicationDate": {
          name: 'applicationDate',
          type: 'Date'
        },
        "department": {
          name: 'department',
          type: 'string'
        },
        "applicantPhone": {
          name: 'applicantPhone',
          type: 'string'
        },
        "applyStatus": {
          name: 'applyStatus',
          type: 'string'
        },
        "customerContactsName": {
          name: 'customerContactsName',
          type: 'string'
        },
        "customerContactsPhone": {
          name: 'customerContactsPhone',
          type: 'string'
        },
        "receiveDate": {
          name: 'receiveDate',
          type: 'Date'
        },
        "feedbackDate": {
          name: 'feedbackDate',
          type: 'Date'
        },
        "damageSendbackStatus": {
          name: 'damageSendbackStatus',
          type: 'string'
        },
        "damageSendbackDate": {
          name: 'damageSendbackDate',
          type: 'Date'
        },
        "accessoryCount": {
          name: 'accessoryCount',
          type: 'number'
        },
        "requirementType": {
          name: 'requirementType',
          type: 'string'
        },
        "urgencyLevel": {
          name: 'urgencyLevel',
          type: 'string'
        },
        "deliveryCompany": {
          name: 'deliveryCompany',
          type: 'string'
        },
        "deliveryPerson": {
          name: 'deliveryPerson',
          type: 'string'
        },
        "supplyCompnay": {
          name: 'supplyCompnay',
          type: 'string'
        },
        "deliverySerialNo": {
          name: 'deliverySerialNo',
          type: 'string'
        },
        "deliveryFee": {
          name: 'deliveryFee',
          type: 'number'
        },
        "deliveryFeeType": {
          name: 'deliveryFeeType',
          type: 'string'
        },
        "deliveryType": {
          name: 'deliveryType',
          type: 'string'
        },
        "arrivalPlace": {
          name: 'arrivalPlace',
          type: 'string'
        },
        "deliveryDate": {
          name: 'deliveryDate',
          type: 'Date'
        },
        "receiverCompany": {
          name: 'receiverCompany',
          type: 'string'
        },
        "receiver": {
          name: 'receiver',
          type: 'string'
        },
        "receiverAddr": {
          name: 'receiverAddr',
          type: 'string'
        },
        "receiverPhone": {
          name: 'receiverPhone',
          type: 'string'
        },
        "postcode": {
          name: 'postcode',
          type: 'string'
        },
        "vertifyEmployee": {
          name: 'vertifyEmployee',
          type: 'string'
        },
        "vertifyDate": {
          name: 'vertifyDate',
          type: 'Date'
        },
        "approveEmployee": {
          name: 'approveEmployee',
          type: 'string'
        },
        "approveDate": {
          name: 'approveDate',
          type: 'Date'
        },
        "reason": {
          name: 'reason',
          type: 'string'
        },
        "suggestion": {
          name: 'suggestion',
          type: 'string'
        },
        "leaveProblem": {
          name: 'leaveProblem',
          type: 'string'
        },
        "remark": {
          name: 'remark',
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
        "dispatchId": {
          name: 'dispatchId',
          type: 'string'
        },
        "equipmentId": {
          name: 'equipmentId',
          type: 'any'
        },
        "applyEmployeeId": {
          name: 'applyEmployeeId',
          type: 'any'
        },
        "feedbackEmployeeId": {
          name: 'feedbackEmployeeId',
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
        employeeInCharge: {
          name: 'employeeInCharge',
          type: 'Employee',
          model: 'Employee',
          relationType: 'belongsTo',
                  keyFrom: 'employeeId',
          keyTo: 'id'
        },
        dispatch: {
          name: 'dispatch',
          type: 'Dispatch',
          model: 'Dispatch',
          relationType: 'belongsTo',
                  keyFrom: 'dispatchId',
          keyTo: 'dispatchNumber'
        },
        equipment: {
          name: 'equipment',
          type: 'Equipment',
          model: 'Equipment',
          relationType: 'belongsTo',
                  keyFrom: 'equipmentId',
          keyTo: 'id'
        },
        applicant: {
          name: 'applicant',
          type: 'Employee',
          model: 'Employee',
          relationType: 'belongsTo',
                  keyFrom: 'applyEmployeeId',
          keyTo: 'id'
        },
        feedbackEmployee: {
          name: 'feedbackEmployee',
          type: 'Employee',
          model: 'Employee',
          relationType: 'belongsTo',
                  keyFrom: 'feedbackEmployeeId',
          keyTo: 'id'
        },
        applyAccessoryList: {
          name: 'applyAccessoryList',
          type: 'ApplyAccessoryList[]',
          model: 'ApplyAccessoryList',
          relationType: 'hasMany',
                  keyFrom: 'applicationNumber',
          keyTo: 'applicationId'
        },
      }
    }
  }
}
