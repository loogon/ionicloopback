/* tslint:disable */

declare var Object: any;
export interface NumberRecordInterface {
  "recordType": string;
  "recordGroup": string;
  "count": number;
  "id"?: any;
}

export class NumberRecord implements NumberRecordInterface {
  "recordType": string;
  "recordGroup": string;
  "count": number;
  "id": any;
  constructor(data?: NumberRecordInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `NumberRecord`.
   */
  public static getModelName() {
    return "NumberRecord";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of NumberRecord for dynamic purposes.
  **/
  public static factory(data: NumberRecordInterface): NumberRecord{
    return new NumberRecord(data);
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
      name: 'NumberRecord',
      plural: 'NumberRecords',
      path: 'NumberRecords',
      idName: 'id',
      properties: {
        "recordType": {
          name: 'recordType',
          type: 'string'
        },
        "recordGroup": {
          name: 'recordGroup',
          type: 'string'
        },
        "count": {
          name: 'count',
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
