/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface CdCodeInfoInterface {
  "serialNo": string;
  "codeDate"?: Date;
  "cdCode"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
}

export class CdCodeInfo implements CdCodeInfoInterface {
  "serialNo": string;
  "codeDate": Date;
  "cdCode": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  createdBy: User;
  lastUpdatedBy: User;
  constructor(data?: CdCodeInfoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CdCodeInfo`.
   */
  public static getModelName() {
    return "CdCodeInfo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CdCodeInfo for dynamic purposes.
  **/
  public static factory(data: CdCodeInfoInterface): CdCodeInfo{
    return new CdCodeInfo(data);
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
      name: 'CdCodeInfo',
      plural: 'CdCodeInfos',
      path: 'CdCodeInfos',
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
        "cdCode": {
          name: 'cdCode',
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
