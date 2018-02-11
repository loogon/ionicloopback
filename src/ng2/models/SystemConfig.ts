/* tslint:disable */

declare var Object: any;
export interface SystemConfigInterface {
  "type": string;
  "config": string;
}

export class SystemConfig implements SystemConfigInterface {
  "type": string;
  "config": string;
  constructor(data?: SystemConfigInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SystemConfig`.
   */
  public static getModelName() {
    return "SystemConfig";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SystemConfig for dynamic purposes.
  **/
  public static factory(data: SystemConfigInterface): SystemConfig{
    return new SystemConfig(data);
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
      name: 'SystemConfig',
      plural: 'SystemConfigs',
      path: 'SystemConfigs',
      idName: 'type',
      properties: {
        "type": {
          name: 'type',
          type: 'string'
        },
        "config": {
          name: 'config',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
