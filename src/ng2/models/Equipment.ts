/* tslint:disable */
import {
  User,
  Customer,
  Report,
  ExposureCount,
  Dispatch,
  Accessory
} from '../index';

declare var Object: any;
export interface EquipmentInterface {
  "name"?: string;
  "serialNo"?: string;
  "productName"?: string;
  "modelName"?: string;
  "modality"?: string;
  "generatorNameplate"?: string;
  "contractNo"?: string;
  "salesRegion"?: string;
  "producedAt"?: Date;
  "productComments"?: string;
  "shippedAt"?: Date;
  "installAt"?: Date;
  "installDepartment"?: string;
  "acceptedAt"?: Date;
  "acceptedBy"?: string;
  "warrantyStartAt"?: Date;
  "warrantyStopAt"?: Date;
  "warrantyMonth"?: number;
  "warrantyComments"?: string;
  "extendedWarrantyStartAt"?: Date;
  "extendedWarrantyStopAt"?: Date;
  "extendedWarrantyComments"?: string;
  "lastHeartBeatAt"?: Date;
  "totalExposureCount"?: number;
  "description"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "customerId"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
  customer?: Customer;
  reports?: Report[];
  exposureCounts?: ExposureCount[];
  dispatchLists?: Dispatch[];
  accessoryList?: Accessory[];
}

export class Equipment implements EquipmentInterface {
  "name": string;
  "serialNo": string;
  "productName": string;
  "modelName": string;
  "modality": string;
  "generatorNameplate": string;
  "contractNo": string;
  "salesRegion": string;
  "producedAt": Date;
  "productComments": string;
  "shippedAt": Date;
  "installAt": Date;
  "installDepartment": string;
  "acceptedAt": Date;
  "acceptedBy": string;
  "warrantyStartAt": Date;
  "warrantyStopAt": Date;
  "warrantyMonth": number;
  "warrantyComments": string;
  "extendedWarrantyStartAt": Date;
  "extendedWarrantyStopAt": Date;
  "extendedWarrantyComments": string;
  "lastHeartBeatAt": Date;
  "totalExposureCount": number;
  "description": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "customerId": any;
  createdBy: User;
  lastUpdatedBy: User;
  customer: Customer;
  reports: Report[];
  exposureCounts: ExposureCount[];
  dispatchLists: Dispatch[];
  accessoryList: Accessory[];
  constructor(data?: EquipmentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Equipment`.
   */
  public static getModelName() {
    return "Equipment";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Equipment for dynamic purposes.
  **/
  public static factory(data: EquipmentInterface): Equipment{
    return new Equipment(data);
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
      name: 'Equipment',
      plural: 'Equipment',
      path: 'Equipment',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "serialNo": {
          name: 'serialNo',
          type: 'string'
        },
        "productName": {
          name: 'productName',
          type: 'string'
        },
        "modelName": {
          name: 'modelName',
          type: 'string'
        },
        "modality": {
          name: 'modality',
          type: 'string'
        },
        "generatorNameplate": {
          name: 'generatorNameplate',
          type: 'string'
        },
        "contractNo": {
          name: 'contractNo',
          type: 'string'
        },
        "salesRegion": {
          name: 'salesRegion',
          type: 'string'
        },
        "producedAt": {
          name: 'producedAt',
          type: 'Date'
        },
        "productComments": {
          name: 'productComments',
          type: 'string'
        },
        "shippedAt": {
          name: 'shippedAt',
          type: 'Date'
        },
        "installAt": {
          name: 'installAt',
          type: 'Date'
        },
        "installDepartment": {
          name: 'installDepartment',
          type: 'string'
        },
        "acceptedAt": {
          name: 'acceptedAt',
          type: 'Date'
        },
        "acceptedBy": {
          name: 'acceptedBy',
          type: 'string'
        },
        "warrantyStartAt": {
          name: 'warrantyStartAt',
          type: 'Date'
        },
        "warrantyStopAt": {
          name: 'warrantyStopAt',
          type: 'Date'
        },
        "warrantyMonth": {
          name: 'warrantyMonth',
          type: 'number'
        },
        "warrantyComments": {
          name: 'warrantyComments',
          type: 'string'
        },
        "extendedWarrantyStartAt": {
          name: 'extendedWarrantyStartAt',
          type: 'Date'
        },
        "extendedWarrantyStopAt": {
          name: 'extendedWarrantyStopAt',
          type: 'Date'
        },
        "extendedWarrantyComments": {
          name: 'extendedWarrantyComments',
          type: 'string'
        },
        "lastHeartBeatAt": {
          name: 'lastHeartBeatAt',
          type: 'Date'
        },
        "totalExposureCount": {
          name: 'totalExposureCount',
          type: 'number',
          default: 0
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
        "customerId": {
          name: 'customerId',
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
        customer: {
          name: 'customer',
          type: 'Customer',
          model: 'Customer',
          relationType: 'belongsTo',
                  keyFrom: 'customerId',
          keyTo: 'id'
        },
        reports: {
          name: 'reports',
          type: 'Report[]',
          model: 'Report',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'equipmentId'
        },
        exposureCounts: {
          name: 'exposureCounts',
          type: 'ExposureCount[]',
          model: 'ExposureCount',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'equipmentId'
        },
        dispatchLists: {
          name: 'dispatchLists',
          type: 'Dispatch[]',
          model: 'Dispatch',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'equipmentId'
        },
        accessoryList: {
          name: 'accessoryList',
          type: 'Accessory[]',
          model: 'Accessory',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'equipmentId'
        },
      }
    }
  }
}
