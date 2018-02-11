/* tslint:disable */
import {
  User,
  Employee
} from '../index';

declare var Object: any;
export interface DepartmentInterface {
  "name": string;
  "description"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "higherLevelDepartmentId"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
  higherLevelDepartment?: Department;
  subDepartments?: Department[];
  employee?: Employee[];
}

export class Department implements DepartmentInterface {
  "name": string;
  "description": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "higherLevelDepartmentId": any;
  createdBy: User;
  lastUpdatedBy: User;
  higherLevelDepartment: Department;
  subDepartments: Department[];
  employee: Employee[];
  constructor(data?: DepartmentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Department`.
   */
  public static getModelName() {
    return "Department";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Department for dynamic purposes.
  **/
  public static factory(data: DepartmentInterface): Department{
    return new Department(data);
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
      name: 'Department',
      plural: 'Departments',
      path: 'Departments',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
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
        "higherLevelDepartmentId": {
          name: 'higherLevelDepartmentId',
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
        higherLevelDepartment: {
          name: 'higherLevelDepartment',
          type: 'Department',
          model: 'Department',
          relationType: 'belongsTo',
                  keyFrom: 'higherLevelDepartmentId',
          keyTo: 'id'
        },
        subDepartments: {
          name: 'subDepartments',
          type: 'Department[]',
          model: 'Department',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'higherLevelDepartmentId'
        },
        employee: {
          name: 'employee',
          type: 'Employee[]',
          model: 'Employee',
          relationType: 'hasMany',
          modelThrough: 'Appointment',
          keyThrough: 'employeeId',
          keyFrom: 'id',
          keyTo: 'departmentId'
        },
      }
    }
  }
}
