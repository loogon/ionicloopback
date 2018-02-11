/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface AccessoryStoreInterface {
  "accessoryName": string;
  "accessoryModel"?: string;
  "price"?: number;
  "category"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
}

export class AccessoryStore implements AccessoryStoreInterface {
  "accessoryName": string;
  "accessoryModel": string;
  "price": number;
  "category": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  createdBy: User;
  lastUpdatedBy: User;
  constructor(data?: AccessoryStoreInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AccessoryStore`.
   */
  public static getModelName() {
    return "AccessoryStore";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AccessoryStore for dynamic purposes.
  **/
  public static factory(data: AccessoryStoreInterface): AccessoryStore{
    return new AccessoryStore(data);
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
      name: 'AccessoryStore',
      plural: 'AccessoryStores',
      path: 'AccessoryStores',
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
        "price": {
          name: 'price',
          type: 'number'
        },
        "category": {
          name: 'category',
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
