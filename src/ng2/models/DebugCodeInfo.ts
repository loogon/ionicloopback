/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface DebugCodeInfoInterface {
  "serialNo": string;
  "codeDate": Date;
  "debugCode": string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
}

export class DebugCodeInfo implements DebugCodeInfoInterface {
  "serialNo": string;
  "codeDate": Date;
  "debugCode": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  createdBy: User;
  lastUpdatedBy: User;
  constructor(data?: DebugCodeInfoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DebugCodeInfo`.
   */
  public static getModelName() {
    return "DebugCodeInfo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DebugCodeInfo for dynamic purposes.
  **/
  public static factory(data: DebugCodeInfoInterface): DebugCodeInfo{
    return new DebugCodeInfo(data);
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
      name: 'DebugCodeInfo',
      plural: 'DebugCodeInfos',
      path: 'DebugCodeInfos',
      idName: 'id',
      properties: {
        "serialNo": {
          name: 'serialNo',
          type: 'string'
        },
        "codeDate": {
          name: 'codeDate',
          type: 'Date'
        },
        "debugCode": {
          name: 'debugCode',
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
