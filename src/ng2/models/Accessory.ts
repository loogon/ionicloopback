/* tslint:disable */
import {
  Equipment
} from '../index';

declare var Object: any;
export interface AccessoryInterface {
  "accessoryName": string;
  "accessoryModel"?: string;
  "softwareVersion"?: string;
  "accessoryNumber"?: string;
  "circuitBaseNumber"?: string;
  "boardSerialNo"?: string;
  "accessoryCount"?: number;
  "price"?: number;
  "category"?: string;
  "id"?: any;
  "equipmentId"?: any;
  equipment?: Equipment;
}

export class Accessory implements AccessoryInterface {
  "accessoryName": string;
  "accessoryModel": string;
  "softwareVersion": string;
  "accessoryNumber": string;
  "circuitBaseNumber": string;
  "boardSerialNo": string;
  "accessoryCount": number;
  "price": number;
  "category": string;
  "id": any;
  "equipmentId": any;
  equipment: Equipment;
  constructor(data?: AccessoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Accessory`.
   */
  public static getModelName() {
    return "Accessory";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Accessory for dynamic purposes.
  **/
  public static factory(data: AccessoryInterface): Accessory{
    return new Accessory(data);
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
      name: 'Accessory',
      plural: 'Accessories',
      path: 'Accessories',
      idName: 'id',
      properties: {
        "accessoryName": {
          name: 'accessoryName',
          type: 'string'
        },
        "accessoryModel": {
          name: 'accessoryModel',
          type: 'string'
        },
        "softwareVersion": {
          name: 'softwareVersion',
          type: 'string'
        },
        "accessoryNumber": {
          name: 'accessoryNumber',
          type: 'string'
        },
        "circuitBaseNumber": {
          name: 'circuitBaseNumber',
          type: 'string'
        },
        "boardSerialNo": {
          name: 'boardSerialNo',
          type: 'string'
        },
        "accessoryCount": {
          name: 'accessoryCount',
          type: 'number'
        },
        "price": {
          name: 'price',
          type: 'number'
        },
        "category": {
          name: 'category',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "equipmentId": {
          name: 'equipmentId',
          type: 'any'
        },
      },
      relations: {
        equipment: {
          name: 'equipment',
          type: 'Equipment',
          model: 'Equipment',
          relationType: 'belongsTo',
                  keyFrom: 'equipmentId',
          keyTo: 'id'
        },
      }
    }
  }
}
