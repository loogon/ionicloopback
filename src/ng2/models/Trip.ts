/* tslint:disable */
import {
  Employee,
  LocationReport,
  Dispatch
} from '../index';

declare var Object: any;
export interface TripInterface {
  "comments"?: string;
  "customerName"?: string;
  "dispatchNumber"?: string;
  "description"?: string;
  "id"?: any;
  "employeeId"?: any;
  "dispatchId"?: string;
  employee?: Employee;
  locationReports?: LocationReport[];
  dispatch?: Dispatch;
}

export class Trip implements TripInterface {
  "comments": string;
  "customerName": string;
  "dispatchNumber": string;
  "description": string;
  "id": any;
  "employeeId": any;
  "dispatchId": string;
  employee: Employee;
  locationReports: LocationReport[];
  dispatch: Dispatch;
  constructor(data?: TripInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Trip`.
   */
  public static getModelName() {
    return "Trip";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Trip for dynamic purposes.
  **/
  public static factory(data: TripInterface): Trip{
    return new Trip(data);
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
      name: 'Trip',
      plural: 'Trips',
      path: 'Trips',
      idName: 'id',
      properties: {
        "comments": {
          name: 'comments',
          type: 'string'
        },
        "customerName": {
          name: 'customerName',
          type: 'string'
        },
        "dispatchNumber": {
          name: 'dispatchNumber',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "employeeId": {
          name: 'employeeId',
          type: 'any'
        },
        "dispatchId": {
          name: 'dispatchId',
          type: 'string'
        },
      },
      relations: {
        employee: {
          name: 'employee',
          type: 'Employee',
          model: 'Employee',
          relationType: 'belongsTo',
                  keyFrom: 'employeeId',
          keyTo: 'id'
        },
        locationReports: {
          name: 'locationReports',
          type: 'LocationReport[]',
          model: 'LocationReport',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'tripId'
        },
        dispatch: {
          name: 'dispatch',
          type: 'Dispatch',
          model: 'Dispatch',
          relationType: 'belongsTo',
                  keyFrom: 'dispatchId',
          keyTo: 'dispatchNumber'
        },
      }
    }
  }
}
