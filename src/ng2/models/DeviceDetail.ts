/* tslint:disable */
import {
  User,
  Device
} from '../index';

declare var Object: any;
export interface DeviceDetailInterface {
  "deviceSeq": number;
  "deviceDetailName": string;
  "deviceDetailDesc"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "deviceId"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
  device?: Device;
}

export class DeviceDetail implements DeviceDetailInterface {
  "deviceSeq": number;
  "deviceDetailName": string;
  "deviceDetailDesc": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "deviceId": any;
  createdBy: User;
  lastUpdatedBy: User;
  device: Device;
  constructor(data?: DeviceDetailInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DeviceDetail`.
   */
  public static getModelName() {
    return "DeviceDetail";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DeviceDetail for dynamic purposes.
  **/
  public static factory(data: DeviceDetailInterface): DeviceDetail{
    return new DeviceDetail(data);
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
      name: 'DeviceDetail',
      plural: 'DeviceDetails',
      path: 'DeviceDetails',
      idName: 'id',
      properties: {
        "deviceSeq": {
          name: 'deviceSeq',
          type: 'number'
        },
        "deviceDetailName": {
          name: 'deviceDetailName',
          type: 'string'
        },
        "deviceDetailDesc": {
          name: 'deviceDetailDesc',
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
        "deviceId": {
          name: 'deviceId',
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
        device: {
          name: 'device',
          type: 'Device',
          model: 'Device',
          relationType: 'belongsTo',
                  keyFrom: 'deviceId',
          keyTo: 'id'
        },
      }
    }
  }
}
