/* tslint:disable */
import {
  Department,
  Employee
} from '../index';

declare var Object: any;
export interface AppointmentInterface {
  "title": string;
  "joinAt"?: Date;
  "description"?: string;
  "id"?: any;
  "departmentId"?: any;
  "employeeId"?: any;
  department?: Department;
  employee?: Employee;
}

export class Appointment implements AppointmentInterface {
  "title": string;
  "joinAt": Date;
  "description": string;
  "id": any;
  "departmentId": any;
  "employeeId": any;
  department: Department;
  employee: Employee;
  constructor(data?: AppointmentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Appointment`.
   */
  public static getModelName() {
    return "Appointment";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Appointment for dynamic purposes.
  **/
  public static factory(data: AppointmentInterface): Appointment{
    return new Appointment(data);
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
      name: 'Appointment',
      plural: 'Appointments',
      path: 'Appointments',
      idName: 'id',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "joinAt": {
          name: 'joinAt',
          type: 'Date'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "departmentId": {
          name: 'departmentId',
          type: 'any'
        },
        "employeeId": {
          name: 'employeeId',
          type: 'any'
        },
      },
      relations: {
        department: {
          name: 'department',
          type: 'Department',
          model: 'Department',
          relationType: 'belongsTo',
                  keyFrom: 'departmentId',
          keyTo: 'id'
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
