/* tslint:disable */

declare var Object: any;
export interface ServiceInterface {
  "serviceCode": string;
  "serviceName": string;
  "description"?: string;
  "servicePhase"?: string;
  "category"?: string;
}

export class Service implements ServiceInterface {
  "serviceCode": string;
  "serviceName": string;
  "description": string;
  "servicePhase": string;
  "category": string;
  constructor(data?: ServiceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Service`.
   */
  public static getModelName() {
    return "Service";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Service for dynamic purposes.
  **/
  public static factory(data: ServiceInterface): Service{
    return new Service(data);
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
      name: 'Service',
      plural: 'Services',
      path: 'Services',
      idName: 'serviceCode',
      properties: {
        "serviceCode": {
          name: 'serviceCode',
          type: 'string'
        },
        "serviceName": {
          name: 'serviceName',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "servicePhase": {
          name: 'servicePhase',
          type: 'string'
        },
        "category": {
          name: 'category',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
