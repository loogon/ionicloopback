/* tslint:disable */
import {
  User,
  Country,
  Region
} from '../index';

declare var Object: any;
export interface ProvinceInterface {
  "name": string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  "countryId"?: string;
  "regionId"?: string;
  createdBy?: User;
  lastUpdatedBy?: User;
  country?: Country;
  region?: Region;
}

export class Province implements ProvinceInterface {
  "name": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "createdBy": any;
  "lastUpdatedBy": any;
  "countryId": string;
  "regionId": string;
  createdBy: User;
  lastUpdatedBy: User;
  country: Country;
  region: Region;
  constructor(data?: ProvinceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Province`.
   */
  public static getModelName() {
    return "Province";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Province for dynamic purposes.
  **/
  public static factory(data: ProvinceInterface): Province{
    return new Province(data);
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
      name: 'Province',
      plural: 'Provinces',
      path: 'Provinces',
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
        "countryId": {
          name: 'countryId',
          type: 'string'
        },
        "regionId": {
          name: 'regionId',
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
        country: {
          name: 'country',
          type: 'Country',
          model: 'Country',
          relationType: 'belongsTo',
                  keyFrom: 'countryId',
          keyTo: 'name'
        },
        region: {
          name: 'region',
          type: 'Region',
          model: 'Region',
          relationType: 'belongsTo',
                  keyFrom: 'regionId',
          keyTo: 'name'
        },
      }
    }
  }
}
