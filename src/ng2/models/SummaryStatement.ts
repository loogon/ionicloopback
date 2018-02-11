/* tslint:disable */
import {
  User,
  Employee
} from '../index';

declare var Object: any;
export interface SummaryStatementInterface {
  "reportName": string;
  "title"?: string;
  "content"?: string;
  "type"?: number;
  "comments"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "employeeId"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
  creater?: Employee;
}

export class SummaryStatement implements SummaryStatementInterface {
  "reportName": string;
  "title": string;
  "content": string;
  "type": number;
  "comments": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "employeeId": any;
  createdBy: User;
  lastUpdatedBy: User;
  creater: Employee;
  constructor(data?: SummaryStatementInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SummaryStatement`.
   */
  public static getModelName() {
    return "SummaryStatement";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SummaryStatement for dynamic purposes.
  **/
  public static factory(data: SummaryStatementInterface): SummaryStatement{
    return new SummaryStatement(data);
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
      name: 'SummaryStatement',
      plural: 'SummaryStatements',
      path: 'SummaryStatements',
      idName: 'id',
      properties: {
        "reportName": {
          name: 'reportName',
          type: 'string'
        },
        "title": {
          name: 'title',
          type: 'string'
        },
        "content": {
          name: 'content',
          type: 'string'
        },
        "type": {
          name: 'type',
          type: 'number'
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
        "employeeId": {
          name: 'employeeId',
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
        creater: {
          name: 'creater',
          type: 'Employee',
          model: 'Employee',
          relationType: 'belongsTo',
                  keyFrom: 'employeeId',
          keyTo: 'id'
        },
      }
    }
  }
}
