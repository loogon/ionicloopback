/* tslint:disable */
import {
  User,
  Dispatch,
  Employee,
  WorkLog
} from '../index';

declare var Object: any;
export interface MaintainInterface {
  "maintainNumber": string;
  "maintainRecordNumber"?: string;
  "maintainDepartment"?: string;
  "startDate"?: Date;
  "startSite"?: string;
  "arriveDate"?: Date;
  "startWorkDate"?: Date;
  "endWorkDate"?: Date;
  "leaveDate"?: Date;
  "status"?: string;
  "pausedDescription"?: string;
  "errorDescription1"?: string;
  "solution1"?: string;
  "errorDescription2"?: string;
  "solution2"?: string;
  "errorDescription3"?: string;
  "solution3"?: string;
  "comments"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "dispatchId"?: string;
  "maintainEmployeeId"?: any;
  "employeeId"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
  dispatch?: Dispatch;
  engineer?: Employee;
  workLogs?: WorkLog[];
}

export class Maintain implements MaintainInterface {
  "maintainNumber": string;
  "maintainRecordNumber": string;
  "maintainDepartment": string;
  "startDate": Date;
  "startSite": string;
  "arriveDate": Date;
  "startWorkDate": Date;
  "endWorkDate": Date;
  "leaveDate": Date;
  "status": string;
  "pausedDescription": string;
  "errorDescription1": string;
  "solution1": string;
  "errorDescription2": string;
  "solution2": string;
  "errorDescription3": string;
  "solution3": string;
  "comments": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "createdBy": any;
  "lastUpdatedBy": any;
  "dispatchId": string;
  "maintainEmployeeId": any;
  "employeeId": any;
  createdBy: User;
  lastUpdatedBy: User;
  dispatch: Dispatch;
  engineer: Employee;
  workLogs: WorkLog[];
  constructor(data?: MaintainInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Maintain`.
   */
  public static getModelName() {
    return "Maintain";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Maintain for dynamic purposes.
  **/
  public static factory(data: MaintainInterface): Maintain{
    return new Maintain(data);
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
      name: 'Maintain',
      plural: 'Maintains',
      path: 'Maintains',
      idName: 'maintainNumber',
      properties: {
        "maintainNumber": {
          name: 'maintainNumber',
          type: 'string'
        },
        "maintainRecordNumber": {
          name: 'maintainRecordNumber',
          type: 'string'
        },
        "maintainDepartment": {
          name: 'maintainDepartment',
          type: 'string'
        },
        "startDate": {
          name: 'startDate',
          type: 'Date'
        },
        "startSite": {
          name: 'startSite',
          type: 'string'
        },
        "arriveDate": {
          name: 'arriveDate',
          type: 'Date'
        },
        "startWorkDate": {
          name: 'startWorkDate',
          type: 'Date'
        },
        "endWorkDate": {
          name: 'endWorkDate',
          type: 'Date'
        },
        "leaveDate": {
          name: 'leaveDate',
          type: 'Date'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "pausedDescription": {
          name: 'pausedDescription',
          type: 'string'
        },
        "errorDescription1": {
          name: 'errorDescription1',
          type: 'string'
        },
        "solution1": {
          name: 'solution1',
          type: 'string'
        },
        "errorDescription2": {
          name: 'errorDescription2',
          type: 'string'
        },
        "solution2": {
          name: 'solution2',
          type: 'string'
        },
        "errorDescription3": {
          name: 'errorDescription3',
          type: 'string'
        },
        "solution3": {
          name: 'solution3',
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
        "createdBy": {
          name: 'createdBy',
          type: 'any'
        },
        "lastUpdatedBy": {
          name: 'lastUpdatedBy',
          type: 'any'
        },
        "dispatchId": {
          name: 'dispatchId',
          type: 'string'
        },
        "maintainEmployeeId": {
          name: 'maintainEmployeeId',
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
        dispatch: {
          name: 'dispatch',
          type: 'Dispatch',
          model: 'Dispatch',
          relationType: 'belongsTo',
                  keyFrom: 'dispatchId',
          keyTo: 'dispatchNumber'
        },
        engineer: {
          name: 'engineer',
          type: 'Employee',
          model: 'Employee',
          relationType: 'belongsTo',
                  keyFrom: 'maintainEmployeeId',
          keyTo: 'id'
        },
        workLogs: {
          name: 'workLogs',
          type: 'WorkLog[]',
          model: 'WorkLog',
          relationType: 'hasMany',
                  keyFrom: 'maintainNumber',
          keyTo: 'maintainId'
        },
      }
    }
  }
}
