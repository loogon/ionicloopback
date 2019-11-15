/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface DeviceCodeInterface {
  "accessKey"?: string;
  "softwareVersion"?: string;
  "version"?: string;
  "comments"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "equipmentId"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
}

export class DeviceCode implements DeviceCodeInterface {
  "accessKey": string;
  "softwareVersion": string;
  "version": string;
  "comments": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "equipmentId": any;
  createdBy: User;
  lastUpdatedBy: User;
  constructor(data?: DeviceCodeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DeviceCode`.
   */
  public static getModelName() {
    return "DeviceCode";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DeviceCode for dynamic purposes.
  **/
  public static factory(data: DeviceCodeInterface): DeviceCode{
    return new DeviceCode(data);
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
      name: 'DeviceCode',
      plural: 'DeviceCodes',
      path: 'DeviceCodes',
      idName: 'id',
      properties: {
        "accessKey": {
          name: 'accessKey',
          type: 'string'
        },
        "softwareVersion": {
          name: 'softwareVersion',
          type: 'string'
        },
        "version": {
          name: 'version',
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
        "equipmentId": {
          name: 'equipmentId',
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
      }
    }
  }
}
