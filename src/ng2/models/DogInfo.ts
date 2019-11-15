/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface DogInfoInterface {
  "dogCode": string;
  "cpuId": string;
  "dogDate": Date;
  "dogSeq"?: string;
  "workType": number;
  "dogSuperCode"?: string;
  "activeCode"?: string;
  "activeTime"?: Date;
  "contractNumber"?: string;
  "DeviceType": string;
  "purchaseName"?: string;
  "userName"?: string;
  "consignmentDate"?: Date;
  "acceptDate"?: Date;
  "payMode"?: string;
  "power"?: string;
  "monthLimit"?: number;
  "dayLimit"?: number;
  "putMarketTime"?: Date;
  "activeId"?: string;
  "newDogDate"?: Date;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "id"?: any;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
}

export class DogInfo implements DogInfoInterface {
  "dogCode": string;
  "cpuId": string;
  "dogDate": Date;
  "dogSeq": string;
  "workType": number;
  "dogSuperCode": string;
  "activeCode": string;
  "activeTime": Date;
  "contractNumber": string;
  "DeviceType": string;
  "purchaseName": string;
  "userName": string;
  "consignmentDate": Date;
  "acceptDate": Date;
  "payMode": string;
  "power": string;
  "monthLimit": number;
  "dayLimit": number;
  "putMarketTime": Date;
  "activeId": string;
  "newDogDate": Date;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "id": any;
  "createdBy": any;
  "lastUpdatedBy": any;
  createdBy: User;
  lastUpdatedBy: User;
  constructor(data?: DogInfoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DogInfo`.
   */
  public static getModelName() {
    return "DogInfo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DogInfo for dynamic purposes.
  **/
  public static factory(data: DogInfoInterface): DogInfo{
    return new DogInfo(data);
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
      name: 'DogInfo',
      plural: 'DogInfos',
      path: 'DogInfos',
      idName: 'id',
      properties: {
        "dogCode": {
          name: 'dogCode',
          type: 'string',
          default: 'Y99-999-99'
        },
        "cpuId": {
          name: 'cpuId',
          type: 'string',
          default: '0000000000000000'
        },
        "dogDate": {
          name: 'dogDate',
          type: 'Date'
        },
        "dogSeq": {
          name: 'dogSeq',
          type: 'string'
        },
        "workType": {
          name: 'workType',
          type: 'number',
          default: 0
        },
        "dogSuperCode": {
          name: 'dogSuperCode',
          type: 'string'
        },
        "activeCode": {
          name: 'activeCode',
          type: 'string'
        },
        "activeTime": {
          name: 'activeTime',
          type: 'Date'
        },
        "contractNumber": {
          name: 'contractNumber',
          type: 'string'
        },
        "DeviceType": {
          name: 'DeviceType',
          type: 'string',
          default: 'DR'
        },
        "purchaseName": {
          name: 'purchaseName',
          type: 'string'
        },
        "userName": {
          name: 'userName',
          type: 'string'
        },
        "consignmentDate": {
          name: 'consignmentDate',
          type: 'Date'
        },
        "acceptDate": {
          name: 'acceptDate',
          type: 'Date'
        },
        "payMode": {
          name: 'payMode',
          type: 'string'
        },
        "power": {
          name: 'power',
          type: 'string'
        },
        "monthLimit": {
          name: 'monthLimit',
          type: 'number'
        },
        "dayLimit": {
          name: 'dayLimit',
          type: 'number'
        },
        "putMarketTime": {
          name: 'putMarketTime',
          type: 'Date'
        },
        "activeId": {
          name: 'activeId',
          type: 'string'
        },
        "newDogDate": {
          name: 'newDogDate',
          type: 'Date'
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
      }
    }
  }
}
