/* tslint:disable */
import {
  User,
  Device,
  DeviceMachineLog,
  DeviceMachineSoft,
  DeviceMachineDetail
} from '../index';

declare var Object: any;
export interface DeviceMachineInterface {
  "deviceMachineCode": string;
  "machineDesc"?: string;
  "accessKey"?: string;
  "softWareVersion"?: string;
  "keyVersion"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "deviceId"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
  device?: Device;
  machineLogs?: DeviceMachineLog[];
  machineSofts?: DeviceMachineSoft[];
  machineDetails?: DeviceMachineDetail[];
}

export class DeviceMachine implements DeviceMachineInterface {
  "deviceMachineCode": string;
  "machineDesc": string;
  "accessKey": string;
  "softWareVersion": string;
  "keyVersion": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "createdBy": any;
  "lastUpdatedBy": any;
  "deviceId": any;
  createdBy: User;
  lastUpdatedBy: User;
  device: Device;
  machineLogs: DeviceMachineLog[];
  machineSofts: DeviceMachineSoft[];
  machineDetails: DeviceMachineDetail[];
  constructor(data?: DeviceMachineInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DeviceMachine`.
   */
  public static getModelName() {
    return "DeviceMachine";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DeviceMachine for dynamic purposes.
  **/
  public static factory(data: DeviceMachineInterface): DeviceMachine{
    return new DeviceMachine(data);
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
      name: 'DeviceMachine',
      plural: 'DeviceMachines',
      path: 'DeviceMachines',
      idName: 'deviceMachineCode',
      properties: {
        "deviceMachineCode": {
          name: 'deviceMachineCode',
          type: 'string'
        },
        "machineDesc": {
          name: 'machineDesc',
          type: 'string'
        },
        "accessKey": {
          name: 'accessKey',
          type: 'string'
        },
        "softWareVersion": {
          name: 'softWareVersion',
          type: 'string'
        },
        "keyVersion": {
          name: 'keyVersion',
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
        machineLogs: {
          name: 'machineLogs',
          type: 'DeviceMachineLog[]',
          model: 'DeviceMachineLog',
          relationType: 'hasMany',
                  keyFrom: 'deviceMachineCode',
          keyTo: 'deviceMachineId'
        },
        machineSofts: {
          name: 'machineSofts',
          type: 'DeviceMachineSoft[]',
          model: 'DeviceMachineSoft',
          relationType: 'hasMany',
                  keyFrom: 'deviceMachineCode',
          keyTo: 'deviceMachineId'
        },
        machineDetails: {
          name: 'machineDetails',
          type: 'DeviceMachineDetail[]',
          model: 'DeviceMachineDetail',
          relationType: 'hasMany',
                  keyFrom: 'deviceMachineCode',
          keyTo: 'deviceMachineId'
        },
      }
    }
  }
}
