/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface ReportCodeInterface {
  "code": string;
  "level": string;
  "description"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
}

export class ReportCode implements ReportCodeInterface {
  "code": string;
  "level": string;
  "description": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "createdBy": any;
  "lastUpdatedBy": any;
  createdBy: User;
  lastUpdatedBy: User;
  constructor(data?: ReportCodeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ReportCode`.
   */
  public static getModelName() {
    return "ReportCode";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ReportCode for dynamic purposes.
  **/
  public static factory(data: ReportCodeInterface): ReportCode{
    return new ReportCode(data);
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
      name: 'ReportCode',
      plural: 'ReportCodes',
      path: 'ReportCodes',
      idName: 'code',
      properties: {
        "code": {
          name: 'code',
          type: 'string'
        },
        "level": {
          name: 'level',
          type: 'string'
        },
        "description": {
          name: 'description',
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
