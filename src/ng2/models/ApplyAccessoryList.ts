/* tslint:disable */
import {
  User,
  AccessoryApplication,
  Accessory
} from '../index';

declare var Object: any;
export interface ApplyAccessoryListInterface {
  "damageNumber"?: string;
  "accessoryCount"?: string;
  "damageRecycleStatus"?: string;
  "damageRecycleDate"?: Date;
  "damageSendbackStatus"?: string;
  "damageSendbackDate"?: Date;
  "damageReceiveDepartment"?: string;
  "newNumber"?: string;
  "newInplaceDate"?: Date;
  "newUsedStatus"?: string;
  "newRecycleStatus"?: string;
  "newRecycleDate"?: Date;
  "newSendbackStatus"?: string;
  "newSendbackDate"?: Date;
  "newReceiveDepartment"?: string;
  "deliveryNumber"?: string;
  "deliveryDate"?: Date;
  "sendbackDeliveryNo"?: string;
  "sendbackDeliveryDate"?: Date;
  "needSendback"?: boolean;
  "comments"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "applicationId"?: string;
  "oldAccessoryId"?: any;
  "newAccessoryId"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
  application?: AccessoryApplication;
  oldAccessoryInfo?: Accessory;
  newAccessoryInfo?: Accessory;
}

export class ApplyAccessoryList implements ApplyAccessoryListInterface {
  "damageNumber": string;
  "accessoryCount": string;
  "damageRecycleStatus": string;
  "damageRecycleDate": Date;
  "damageSendbackStatus": string;
  "damageSendbackDate": Date;
  "damageReceiveDepartment": string;
  "newNumber": string;
  "newInplaceDate": Date;
  "newUsedStatus": string;
  "newRecycleStatus": string;
  "newRecycleDate": Date;
  "newSendbackStatus": string;
  "newSendbackDate": Date;
  "newReceiveDepartment": string;
  "deliveryNumber": string;
  "deliveryDate": Date;
  "sendbackDeliveryNo": string;
  "sendbackDeliveryDate": Date;
  "needSendback": boolean;
  "comments": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "applicationId": string;
  "oldAccessoryId": any;
  "newAccessoryId": any;
  createdBy: User;
  lastUpdatedBy: User;
  application: AccessoryApplication;
  oldAccessoryInfo: Accessory;
  newAccessoryInfo: Accessory;
  constructor(data?: ApplyAccessoryListInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ApplyAccessoryList`.
   */
  public static getModelName() {
    return "ApplyAccessoryList";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ApplyAccessoryList for dynamic purposes.
  **/
  public static factory(data: ApplyAccessoryListInterface): ApplyAccessoryList{
    return new ApplyAccessoryList(data);
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
      name: 'ApplyAccessoryList',
      plural: 'ApplyAccessoryLists',
      path: 'ApplyAccessoryLists',
      idName: 'id',
      properties: {
        "damageNumber": {
          name: 'damageNumber',
          type: 'string'
        },
        "accessoryCount": {
          name: 'accessoryCount',
          type: 'string'
        },
        "damageRecycleStatus": {
          name: 'damageRecycleStatus',
          type: 'string'
        },
        "damageRecycleDate": {
          name: 'damageRecycleDate',
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
        "damageReceiveDepartment": {
          name: 'damageReceiveDepartment',
          type: 'string'
        },
        "newNumber": {
          name: 'newNumber',
          type: 'string'
        },
        "newInplaceDate": {
          name: 'newInplaceDate',
          type: 'Date'
        },
        "newUsedStatus": {
          name: 'newUsedStatus',
          type: 'string'
        },
        "newRecycleStatus": {
          name: 'newRecycleStatus',
          type: 'string'
        },
        "newRecycleDate": {
          name: 'newRecycleDate',
          type: 'Date'
        },
        "newSendbackStatus": {
          name: 'newSendbackStatus',
          type: 'string'
        },
        "newSendbackDate": {
          name: 'newSendbackDate',
          type: 'Date'
        },
        "newReceiveDepartment": {
          name: 'newReceiveDepartment',
          type: 'string'
        },
        "deliveryNumber": {
          name: 'deliveryNumber',
          type: 'string'
        },
        "deliveryDate": {
          name: 'deliveryDate',
          type: 'Date'
        },
        "sendbackDeliveryNo": {
          name: 'sendbackDeliveryNo',
          type: 'string'
        },
        "sendbackDeliveryDate": {
          name: 'sendbackDeliveryDate',
          type: 'Date'
        },
        "needSendback": {
          name: 'needSendback',
          type: 'boolean'
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
        "applicationId": {
          name: 'applicationId',
          type: 'string'
        },
        "oldAccessoryId": {
          name: 'oldAccessoryId',
          type: 'any'
        },
        "newAccessoryId": {
          name: 'newAccessoryId',
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
        application: {
          name: 'application',
          type: 'AccessoryApplication',
          model: 'AccessoryApplication',
          relationType: 'belongsTo',
                  keyFrom: 'applicationId',
          keyTo: 'applicationNumber'
        },
        oldAccessoryInfo: {
          name: 'oldAccessoryInfo',
          type: 'Accessory',
          model: 'Accessory',
          relationType: 'belongsTo',
                  keyFrom: 'oldAccessoryId',
          keyTo: 'id'
        },
        newAccessoryInfo: {
          name: 'newAccessoryInfo',
          type: 'Accessory',
          model: 'Accessory',
          relationType: 'belongsTo',
                  keyFrom: 'newAccessoryId',
          keyTo: 'id'
        },
      }
    }
  }
}
