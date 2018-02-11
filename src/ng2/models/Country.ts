/* tslint:disable */
import {
  User,
  Province
} from '../index';

declare var Object: any;
export interface CountryInterface {
  "name": string;
  "createdAt"?: Date;
  "lastUpdatedAt"?: Date;
  "createdBy"?: any;
  "lastUpdatedBy"?: any;
  createdBy?: User;
  lastUpdatedBy?: User;
  provinces?: Province[];
}

export class Country implements CountryInterface {
  "name": string;
  "createdAt": Date;
  "lastUpdatedAt": Date;
  "createdBy": any;
  "lastUpdatedBy": any;
  createdBy: User;
  lastUpdatedBy: User;
  provinces: Province[];
  constructor(data?: CountryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Country`.
   */
  public static getModelName() {
    return "Country";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Country for dynamic purposes.
  **/
  public static factory(data: CountryInterface): Country{
    return new Country(data);
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
      name: 'Country',
      plural: 'Countries',
      path: 'Countries',
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
          keyTo: 'countryId'
        },
      }
    }
  }
}
