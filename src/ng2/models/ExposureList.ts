/* tslint:disable */

declare var Object: any;
export interface ExposureListInterface {
  "time": Date;
  "count": number;
  "totalCount": number;
  "id"?: any;
}

export class ExposureList implements ExposureListInterface {
  "time": Date;
  "count": number;
  "totalCount": number;
  "id": any;
  constructor(data?: ExposureListInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ExposureList`.
   */
  public static getModelName() {
    return "ExposureList";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ExposureList for dynamic purposes.
  **/
  public static factory(data: ExposureListInterface): ExposureList{
    return new ExposureList(data);
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
      name: 'ExposureList',
      plural: 'ExposureLists',
      path: 'ExposureLists',
      idName: 'id',
      properties: {
        "time": {
          name: 'time',
          type: 'Date'
        },
        "count": {
          name: 'count',
          type: 'number'
        },
        "totalCount": {
          name: 'totalCount',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
