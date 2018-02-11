/* tslint:disable */
import {
  User,
  Maintain
} from '../index';

declare var Object: any;
export interface WorkLogInterface {
  "logDate": Date;
  "content"?: string;
  "comments"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "maintainId"?: string;
  createdBy?: User;
  lastUpdatedBy?: User;
  maintain?: Maintain;
}

export class WorkLog implements WorkLogInterface {
  "logDate": Date;
  "content": string;
  "comments": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "maintainId": string;
  createdBy: User;
  lastUpdatedBy: User;
  maintain: Maintain;
  constructor(data?: WorkLogInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `WorkLog`.
   */
  public static getModelName() {
    return "WorkLog";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of WorkLog for dynamic purposes.
  **/
  public static factory(data: WorkLogInterface): WorkLog{
    return new WorkLog(data);
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
      name: 'WorkLog',
      plural: 'WorkLogs',
      path: 'WorkLogs',
      idName: 'id',
      properties: {
        "logDate": {
          name: 'logDate',
          type: 'Date'
        },
        "content": {
          name: 'content',
          type: 'string'
        },
        "comments": {
          name: 'comments',
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
        "maintainId": {
          name: 'maintainId',
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
        maintain: {
          name: 'maintain',
          type: 'Maintain',
          model: 'Maintain',
          relationType: 'belongsTo',
                  keyFrom: 'maintainId',
          keyTo: 'maintainNumber'
        },
      }
    }
  }
}
