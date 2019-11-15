/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface DeviceMachineSoftInterface {
  "machineSoft"?: string;
  "machineVersion"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "deviceMachineId"?: string;
  createdBy?: User;
  lastUpdatedBy?: User;
}

export class DeviceMachineSoft implements DeviceMachineSoftInterface {
  "machineSoft": string;
  "machineVersion": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "deviceMachineId": string;
  createdBy: User;
  lastUpdatedBy: User;
  constructor(data?: DeviceMachineSoftInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DeviceMachineSoft`.
   */
  public static getModelName() {
    return "DeviceMachineSoft";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DeviceMachineSoft for dynamic purposes.
  **/
  public static factory(data: DeviceMachineSoftInterface): DeviceMachineSoft{
    return new DeviceMachineSoft(data);
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
      name: 'DeviceMachineSoft',
      plural: 'DeviceMachineSofts',
      path: 'DeviceMachineSofts',
      idName: 'id',
      properties: {
        "machineSoft": {
          name: 'machineSoft',
          type: 'string'
        },
        "machineVersion": {
          name: 'machineVersion',
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
