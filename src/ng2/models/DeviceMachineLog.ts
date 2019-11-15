/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface DeviceMachineLogInterface {
  "logDesc"?: string;
  "logType"?: number;
  "logDate"?: Date;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "deviceMachineId"?: string;
  createdBy?: User;
  lastUpdatedBy?: User;
}

export class DeviceMachineLog implements DeviceMachineLogInterface {
  "logDesc": string;
  "logType": number;
  "logDate": Date;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "deviceMachineId": string;
  createdBy: User;
  lastUpdatedBy: User;
  constructor(data?: DeviceMachineLogInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DeviceMachineLog`.
   */
  public static getModelName() {
    return "DeviceMachineLog";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DeviceMachineLog for dynamic purposes.
  **/
  public static factory(data: DeviceMachineLogInterface): DeviceMachineLog{
    return new DeviceMachineLog(data);
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
      name: 'DeviceMachineLog',
      plural: 'DeviceMachineLogs',
      path: 'DeviceMachineLogs',
      idName: 'id',
      properties: {
        "logDesc": {
          name: 'logDesc',
          type: 'string'
        },
        "logType": {
          name: 'logType',
          type: 'number'
        },
        "logDate": {
          name: 'logDate',
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
        "deviceMachineId": {
          name: 'deviceMachineId',
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
      }
    }
  }
}
