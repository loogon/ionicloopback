/* tslint:disable */
import {
  Equipment
} from '../index';

declare var Object: any;
export interface ExposureCountInterface {
  "date": Date;
  "count": number;
  "id"?: any;
  "equipmentId"?: any;
  equipment?: Equipment;
}

export class ExposureCount implements ExposureCountInterface {
  "date": Date;
  "count": number;
  "id": any;
  "equipmentId": any;
  equipment: Equipment;
  constructor(data?: ExposureCountInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ExposureCount`.
   */
  public static getModelName() {
    return "ExposureCount";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ExposureCount for dynamic purposes.
  **/
  public static factory(data: ExposureCountInterface): ExposureCount{
    return new ExposureCount(data);
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
      name: 'ExposureCount',
      plural: 'ExposureCounts',
      path: 'ExposureCounts',
      idName: 'id',
      properties: {
        "date": {
          name: 'date',
          type: 'Date'
        },
        "count": {
          name: 'count',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "equipmentId": {
          name: 'equipmentId',
          type: 'any'
        },
      },
      relations: {
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
