/* tslint:disable */
import {
  User,
  DeviceDetail,
  DeviceMachine
} from '../index';

declare var Object: any;
export interface DeviceMachineDetailInterface {
  "deviceMachineSeq"?: number;
  "CPUID"?: string;
  "cpuVersion"?: string;
  "nodeDesc"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "deviceDetailId"?: any;
  "deviceMachineId"?: string;
  createdBy?: User;
  lastUpdatedBy?: User;
  deviceDetail?: DeviceDetail;
  deviceMachine?: DeviceMachine;
}

export class DeviceMachineDetail implements DeviceMachineDetailInterface {
  "deviceMachineSeq": number;
  "CPUID": string;
  "cpuVersion": string;
  "nodeDesc": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "deviceDetailId": any;
  "deviceMachineId": string;
  createdBy: User;
  lastUpdatedBy: User;
  deviceDetail: DeviceDetail;
  deviceMachine: DeviceMachine;
  constructor(data?: DeviceMachineDetailInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DeviceMachineDetail`.
   */
  public static getModelName() {
    return "DeviceMachineDetail";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DeviceMachineDetail for dynamic purposes.
  **/
  public static factory(data: DeviceMachineDetailInterface): DeviceMachineDetail{
    return new DeviceMachineDetail(data);
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
      name: 'DeviceMachineDetail',
      plural: 'DeviceMachineDetails',
      path: 'DeviceMachineDetails',
      idName: 'id',
      properties: {
        "deviceMachineSeq": {
          name: 'deviceMachineSeq',
          type: 'number'
        },
        "CPUID": {
          name: 'CPUID',
          type: 'string'
        },
        "cpuVersion": {
          name: 'cpuVersion',
          type: 'string'
        },
        "nodeDesc": {
          name: 'nodeDesc',
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
        "deviceDetailId": {
          name: 'deviceDetailId',
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
        deviceDetail: {
          name: 'deviceDetail',
          type: 'DeviceDetail',
          model: 'DeviceDetail',
          relationType: 'belongsTo',
                  keyFrom: 'deviceDetailId',
          keyTo: 'id'
        },
        deviceMachine: {
          name: 'deviceMachine',
          type: 'DeviceMachine',
          model: 'DeviceMachine',
          relationType: 'belongsTo',
                  keyFrom: 'deviceMachineId',
          keyTo: 'deviceMachineCode'
        },
      }
    }
  }
}
