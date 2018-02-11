/* tslint:disable */
import {
  User,
  Province
} from '../index';

declare var Object: any;
export interface RegionInterface {
  "name": string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
  provinces?: Province[];
}

export class Region implements RegionInterface {
  "name": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "createdBy": any;
  "lastUpdatedBy": any;
  createdBy: User;
  lastUpdatedBy: User;
  provinces: Province[];
  constructor(data?: RegionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Region`.
   */
  public static getModelName() {
    return "Region";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Region for dynamic purposes.
  **/
  public static factory(data: RegionInterface): Region{
    return new Region(data);
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
      name: 'Region',
      plural: 'Regions',
      path: 'Regions',
      idName: 'name',
      properties: {
        "name": {
          name: 'name',
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
        provinces: {
          name: 'provinces',
          type: 'Province[]',
          model: 'Province',
          relationType: 'hasMany',
                  keyFrom: 'name',
          keyTo: 'regionId'
        },
      }
    }
  }
}
