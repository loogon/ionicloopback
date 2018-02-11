/* tslint:disable */
import {
  GeoPoint
} from '../index';

declare var Object: any;
export interface LocationReportInterface {
  "time": Date;
  "location": GeoPoint;
  "id"?: any;
  "signInId"?: any;
  "tripId"?: any;
}

export class LocationReport implements LocationReportInterface {
  "time": Date;
  "location": GeoPoint;
  "id": any;
  "signInId": any;
  "tripId": any;
  constructor(data?: LocationReportInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `LocationReport`.
   */
  public static getModelName() {
    return "LocationReport";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of LocationReport for dynamic purposes.
  **/
  public static factory(data: LocationReportInterface): LocationReport{
    return new LocationReport(data);
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
      name: 'LocationReport',
      plural: 'LocationReports',
      path: 'LocationReports',
      idName: 'id',
      properties: {
        "time": {
          name: 'time',
          type: 'Date'
        },
        "location": {
          name: 'location',
          type: 'GeoPoint'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "signInId": {
          name: 'signInId',
          type: 'any'
        },
        "tripId": {
          name: 'tripId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
