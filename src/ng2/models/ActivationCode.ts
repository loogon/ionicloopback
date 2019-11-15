/* tslint:disable */
import {
  User,
  Equipment
} from '../index';

declare var Object: any;
export interface ActivationCodeInterface {
  "cpuid"?: string;
  "powerOfGenerator"?: string;
  "activationCode"?: string;
  "dogCode"?: string;
  "dogSerialId"?: string;
  "workType"?: number;
  "monthlyQuotaOfExposure"?: number;
  "dailyRequiredExposureCount"?: number;
  "seed"?: string;
  "launchedAt"?: Date;
  "dogWrittenAt"?: Date;
  "expireAt"?: Date;
  "dogVersion"?: string;
  "comment"?: string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "equipmentId"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
  equipment?: Equipment;
}

export class ActivationCode implements ActivationCodeInterface {
  "cpuid": string;
  "powerOfGenerator": string;
  "activationCode": string;
  "dogCode": string;
  "dogSerialId": string;
  "workType": number;
  "monthlyQuotaOfExposure": number;
  "dailyRequiredExposureCount": number;
  "seed": string;
  "launchedAt": Date;
  "dogWrittenAt": Date;
  "expireAt": Date;
  "dogVersion": string;
  "comment": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  "equipmentId": any;
  createdBy: User;
  lastUpdatedBy: User;
  equipment: Equipment;
  constructor(data?: ActivationCodeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ActivationCode`.
   */
  public static getModelName() {
    return "ActivationCode";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ActivationCode for dynamic purposes.
  **/
  public static factory(data: ActivationCodeInterface): ActivationCode{
    return new ActivationCode(data);
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
      name: 'ActivationCode',
      plural: 'ActivationCodes',
      path: 'ActivationCodes',
      idName: 'id',
      properties: {
        "cpuid": {
          name: 'cpuid',
          type: 'string',
          default: ''
        },
        "powerOfGenerator": {
          name: 'powerOfGenerator',
          type: 'string',
          default: ''
        },
        "activationCode": {
          name: 'activationCode',
          type: 'string',
          default: ''
        },
        "dogCode": {
          name: 'dogCode',
          type: 'string',
          default: ''
        },
        "dogSerialId": {
          name: 'dogSerialId',
          type: 'string',
          default: ''
        },
        "workType": {
          name: 'workType',
          type: 'number',
          default: 0
        },
        "monthlyQuotaOfExposure": {
          name: 'monthlyQuotaOfExposure',
          type: 'number',
          default: 0
        },
        "dailyRequiredExposureCount": {
          name: 'dailyRequiredExposureCount',
          type: 'number',
          default: 0
        },
        "seed": {
          name: 'seed',
          type: 'string',
          default: ''
        },
        "launchedAt": {
          name: 'launchedAt',
          type: 'Date'
        },
        "dogWrittenAt": {
          name: 'dogWrittenAt',
          type: 'Date'
        },
        "expireAt": {
          name: 'expireAt',
          type: 'Date'
        },
        "dogVersion": {
          name: 'dogVersion',
          type: 'string'
        },
        "comment": {
          name: 'comment',
          type: 'string',
          default: ''
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
        "equipmentId": {
          name: 'equipmentId',
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
        equipment: {
          name: 'equipment',
          type: 'Equipment',
          model: 'Equipment',
          relationType: 'belongsTo',
                  keyFrom: 'equipmentId',
          keyTo: 'id'
        },
      }
    }
  }
}
