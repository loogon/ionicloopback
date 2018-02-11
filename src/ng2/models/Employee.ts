/* tslint:disable */
import {
  User,
  Department,
  Appointment,
  Maintain,
  AccessoryApplication,
  Dispatch,
  DispatchEmployee
} from '../index';

declare var Object: any;
export interface EmployeeInterface {
  "serialNo"?: string;
  "name": string;
  "sex"?: string;
  "birthdate"?: Date;
  "mobilePhoneNumber"?: string;
  "email"?: string;
  "comments"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
  user?: User[];
  departments?: Department[];
  appointments?: Appointment[];
  maintains?: Maintain[];
  accessoryApplications?: AccessoryApplication[];
  employeeDispatches?: Dispatch[];
  dispatches?: DispatchEmployee[];
}

export class Employee implements EmployeeInterface {
  "serialNo": string;
  "name": string;
  "sex": string;
  "birthdate": Date;
  "mobilePhoneNumber": string;
  "email": string;
  "comments": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  createdBy: User;
  lastUpdatedBy: User;
  user: User[];
  departments: Department[];
  appointments: Appointment[];
  maintains: Maintain[];
  accessoryApplications: AccessoryApplication[];
  employeeDispatches: Dispatch[];
  dispatches: DispatchEmployee[];
  constructor(data?: EmployeeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Employee`.
   */
  public static getModelName() {
    return "Employee";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Employee for dynamic purposes.
  **/
  public static factory(data: EmployeeInterface): Employee{
    return new Employee(data);
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
      name: 'Employee',
      plural: 'Employees',
      path: 'Employees',
      idName: 'id',
      properties: {
        "serialNo": {
          name: 'serialNo',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "sex": {
          name: 'sex',
          type: 'string'
        },
        "birthdate": {
          name: 'birthdate',
          type: 'Date'
        },
        "mobilePhoneNumber": {
          name: 'mobilePhoneNumber',
          type: 'string'
        },
        "email": {
          name: 'email',
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
        user: {
          name: 'user',
          type: 'User[]',
          model: 'User',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        departments: {
          name: 'departments',
          type: 'Department[]',
          model: 'Department',
          relationType: 'hasMany',
          modelThrough: 'Appointment',
          keyThrough: 'departmentId',
          keyFrom: 'id',
          keyTo: 'employeeId'
        },
        appointments: {
          name: 'appointments',
          type: 'Appointment[]',
          model: 'Appointment',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'employeeId'
        },
        maintains: {
          name: 'maintains',
          type: 'Maintain[]',
          model: 'Maintain',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'employeeId'
        },
        accessoryApplications: {
          name: 'accessoryApplications',
          type: 'AccessoryApplication[]',
          model: 'AccessoryApplication',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'employeeId'
        },
        employeeDispatches: {
          name: 'employeeDispatches',
          type: 'Dispatch[]',
          model: 'Dispatch',
          relationType: 'hasMany',
          modelThrough: 'DispatchEmployee',
          keyThrough: 'dispatchId',
          keyFrom: 'id',
          keyTo: 'employeeId'
        },
        dispatches: {
          name: 'dispatches',
          type: 'DispatchEmployee[]',
          model: 'DispatchEmployee',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'employeeId'
        },
      }
    }
  }
}
