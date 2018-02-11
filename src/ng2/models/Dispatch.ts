/* tslint:disable */
import {
  User,
  Report,
  Equipment,
  Employee,
  SignIn,
  Trip,
  Maintain,
  AccessoryApplication,
  Service
} from '../index';

declare var Object: any;
export interface DispatchInterface {
  "dispatchNumber": string;
  "dispatchDate"?: Date;
  "customerName"?: string;
  "contactName"?: string;
  "contactOfficePhone"?: string;
  "contactMobilePhone"?: string;
  "belongToCategory"?: string;
  "serviceCategory"?: string;
  "servicePhase"?: string;
  "serviceProperty"?: string;
  "estimateHour"?: number;
  "status"?: string;
  "urgencyLevel"?: string;
  "startDate"?: Date;
  "endDate"?: Date;
  "assessMonth"?: string;
  "description"?: string;
  "comments"?: string;
  "feedback"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "reportId"?: any;
  "equipmentId"?: any;
  "employeeId"?: any;
  "serviceCode"?: string;
  createdBy?: User;
  lastUpdatedBy?: User;
  report?: Report;
  equipment?: Equipment;
  employee?: Employee;
  signIns?: SignIn[];
  trips?: Trip[];
  maintains?: Maintain[];
  applications?: AccessoryApplication[];
  dispatchEmployees?: Employee[];
  serviceInfo?: Service;
}

export class Dispatch implements DispatchInterface {
  "dispatchNumber": string;
  "dispatchDate": Date;
  "customerName": string;
  "contactName": string;
  "contactOfficePhone": string;
  "contactMobilePhone": string;
  "belongToCategory": string;
  "serviceCategory": string;
  "servicePhase": string;
  "serviceProperty": string;
  "estimateHour": number;
  "status": string;
  "urgencyLevel": string;
  "startDate": Date;
  "endDate": Date;
  "assessMonth": string;
  "description": string;
  "comments": string;
  "feedback": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "createdBy": any;
  "lastUpdatedBy": any;
  "reportId": any;
  "equipmentId": any;
  "employeeId": any;
  "serviceCode": string;
  createdBy: User;
  lastUpdatedBy: User;
  report: Report;
  equipment: Equipment;
  employee: Employee;
  signIns: SignIn[];
  trips: Trip[];
  maintains: Maintain[];
  applications: AccessoryApplication[];
  dispatchEmployees: Employee[];
  serviceInfo: Service;
  constructor(data?: DispatchInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Dispatch`.
   */
  public static getModelName() {
    return "Dispatch";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Dispatch for dynamic purposes.
  **/
  public static factory(data: DispatchInterface): Dispatch{
    return new Dispatch(data);
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
      name: 'Dispatch',
      plural: 'Dispatches',
      path: 'Dispatches',
      idName: 'dispatchNumber',
      properties: {
        "dispatchNumber": {
          name: 'dispatchNumber',
          type: 'string'
        },
        "dispatchDate": {
          name: 'dispatchDate',
          type: 'Date'
        },
        "customerName": {
          name: 'customerName',
          type: 'string'
        },
        "contactName": {
          name: 'contactName',
          type: 'string'
        },
        "contactOfficePhone": {
          name: 'contactOfficePhone',
          type: 'string'
        },
        "contactMobilePhone": {
          name: 'contactMobilePhone',
          type: 'string'
        },
        "belongToCategory": {
          name: 'belongToCategory',
          type: 'string'
        },
        "serviceCategory": {
          name: 'serviceCategory',
          type: 'string'
        },
        "servicePhase": {
          name: 'servicePhase',
          type: 'string'
        },
        "serviceProperty": {
          name: 'serviceProperty',
          type: 'string'
        },
        "estimateHour": {
          name: 'estimateHour',
          type: 'number'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "urgencyLevel": {
          name: 'urgencyLevel',
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
        "assessMonth": {
          name: 'assessMonth',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "comments": {
          name: 'comments',
          type: 'string'
        },
        "feedback": {
          name: 'feedback',
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
        "reportId": {
          name: 'reportId',
          type: 'any'
        },
        "equipmentId": {
          name: 'equipmentId',
          type: 'any'
        },
        "employeeId": {
          name: 'employeeId',
          type: 'any'
        },
        "serviceCode": {
          name: 'serviceCode',
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
        report: {
          name: 'report',
          type: 'Report',
          model: 'Report',
          relationType: 'belongsTo',
                  keyFrom: 'reportId',
          keyTo: 'id'
        },
        equipment: {
          name: 'equipment',
          type: 'Equipment',
          model: 'Equipment',
          relationType: 'belongsTo',
                  keyFrom: 'equipmentId',
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
        signIns: {
          name: 'signIns',
          type: 'SignIn[]',
          model: 'SignIn',
          relationType: 'hasMany',
                  keyFrom: 'dispatchNumber',
          keyTo: 'dispatchId'
        },
        trips: {
          name: 'trips',
          type: 'Trip[]',
          model: 'Trip',
          relationType: 'hasMany',
                  keyFrom: 'dispatchNumber',
          keyTo: 'dispatchId'
        },
        maintains: {
          name: 'maintains',
          type: 'Maintain[]',
          model: 'Maintain',
          relationType: 'hasMany',
                  keyFrom: 'dispatchNumber',
          keyTo: 'dispatchId'
        },
        applications: {
          name: 'applications',
          type: 'AccessoryApplication[]',
          model: 'AccessoryApplication',
          relationType: 'hasMany',
                  keyFrom: 'dispatchNumber',
          keyTo: 'dispatchId'
        },
        dispatchEmployees: {
          name: 'dispatchEmployees',
          type: 'Employee[]',
          model: 'Employee',
          relationType: 'hasMany',
          modelThrough: 'DispatchEmployee',
          keyThrough: 'employeeId',
          keyFrom: 'dispatchNumber',
          keyTo: 'dispatchId'
        },
        serviceInfo: {
          name: 'serviceInfo',
          type: 'Service',
          model: 'Service',
          relationType: 'belongsTo',
                  keyFrom: 'serviceCode',
          keyTo: 'serviceCode'
        },
      }
    }
  }
}
