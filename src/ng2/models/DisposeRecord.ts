/* tslint:disable */
import {
  User,
  Report,
  Employee
} from '../index';

declare var Object: any;
export interface DisposeRecordInterface {
  "description": string;
  "result"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "reportId"?: any;
  "disposeEmployeeId"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
  report?: Report;
  disposeEmployee?: Employee;
}

export class DisposeRecord implements DisposeRecordInterface {
  "description": string;
  "result": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "reportId": any;
  "disposeEmployeeId": any;
  createdBy: User;
  lastUpdatedBy: User;
  report: Report;
  disposeEmployee: Employee;
  constructor(data?: DisposeRecordInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DisposeRecord`.
   */
  public static getModelName() {
    return "DisposeRecord";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DisposeRecord for dynamic purposes.
  **/
  public static factory(data: DisposeRecordInterface): DisposeRecord{
    return new DisposeRecord(data);
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
      name: 'DisposeRecord',
      plural: 'DisposeRecords',
      path: 'DisposeRecords',
      idName: 'id',
      properties: {
        "description": {
          name: 'description',
          type: 'string'
        },
        "result": {
          name: 'result',
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
        "reportId": {
          name: 'reportId',
          type: 'any'
        },
        "disposeEmployeeId": {
          name: 'disposeEmployeeId',
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
        report: {
          name: 'report',
          type: 'Report',
          model: 'Report',
          relationType: 'belongsTo',
                  keyFrom: 'reportId',
          keyTo: 'id'
        },
        disposeEmployee: {
          name: 'disposeEmployee',
          type: 'Employee',
          model: 'Employee',
          relationType: 'belongsTo',
                  keyFrom: 'disposeEmployeeId',
          keyTo: 'id'
        },
      }
    }
  }
}
