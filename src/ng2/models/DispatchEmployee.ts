/* tslint:disable */
import {
  User,
  Dispatch,
  Employee
} from '../index';

declare var Object: any;
export interface DispatchEmployeeInterface {
  "departmentId"?: string;
  "startDate"?: Date;
  "endDate"?: Date;
  "description"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "dispatchId"?: string;
  "employeeId"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
  dispatch?: Dispatch;
  employee?: Employee;
}

export class DispatchEmployee implements DispatchEmployeeInterface {
  "departmentId": string;
  "startDate": Date;
  "endDate": Date;
  "description": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "dispatchId": string;
  "employeeId": any;
  createdBy: User;
  lastUpdatedBy: User;
  dispatch: Dispatch;
  employee: Employee;
  constructor(data?: DispatchEmployeeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DispatchEmployee`.
   */
  public static getModelName() {
    return "DispatchEmployee";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DispatchEmployee for dynamic purposes.
  **/
  public static factory(data: DispatchEmployeeInterface): DispatchEmployee{
    return new DispatchEmployee(data);
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
      name: 'DispatchEmployee',
      plural: 'DispatchEmployees',
      path: 'DispatchEmployees',
      idName: 'id',
      properties: {
        "departmentId": {
          name: 'departmentId',
          type: 'string'
        },
        "startDate": {
          name: 'startDate',
          type: 'Date'
        },
        "endDate": {
          name: 'endDate',
          type: 'Date'
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
        "dispatchId": {
          name: 'dispatchId',
          type: 'string'
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
        employee: {
          name: 'employee',
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
