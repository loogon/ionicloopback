/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface CodeInfoInterface {
  "dogCode": string;
  "activeCode"?: string;
  "activeTime"?: Date;
  "dogSuperCode"?: string;
  "accessTime"?: Date;
  "power"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
}

export class CodeInfo implements CodeInfoInterface {
  "dogCode": string;
  "activeCode": string;
  "activeTime": Date;
  "dogSuperCode": string;
  "accessTime": Date;
  "power": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  createdBy: User;
  lastUpdatedBy: User;
  constructor(data?: CodeInfoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CodeInfo`.
   */
  public static getModelName() {
    return "CodeInfo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CodeInfo for dynamic purposes.
  **/
  public static factory(data: CodeInfoInterface): CodeInfo{
    return new CodeInfo(data);
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
      name: 'CodeInfo',
      plural: 'CodeInfos',
      path: 'CodeInfos',
      idName: 'id',
      properties: {
        "dogCode": {
          name: 'dogCode',
          type: 'string',
          default: 'Y99-999-99'
        },
        "activeCode": {
          name: 'activeCode',
          type: 'string'
        },
        "activeTime": {
          name: 'activeTime',
          type: 'Date'
        },
        "dogSuperCode": {
          name: 'dogSuperCode',
          type: 'string'
        },
        "accessTime": {
          name: 'accessTime',
          type: 'Date'
        },
        "power": {
          name: 'power',
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
