/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SDKModels } from './SDKModels';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackAuth } from '../core/auth.service';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { JSONSearchParams } from '../core/search.params';
import { ErrorHandler } from '../core/error.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { WdCrypto } from '../../models/WdCrypto';
import { SocketConnection } from '../../sockets/socket.connections';
import { User } from '../../models/User';


/**
 * Api services for the `WdCrypto` model.
 */
@Injectable()
export class WdCryptoApi extends BaseLoopBackApi {

  constructor(
    @Inject(Http) protected http: Http,
    @Inject(SocketConnection) protected connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Inject(JSONSearchParams) protected searchParams: JSONSearchParams,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    super(http,  connection,  models, auth, searchParams, errorHandler);
  }

  /**
   * Fetches belongsTo relation createdBy.
   *
   * @param {any} id Tracked id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `WdCrypto` object.)
   * </em>
   */
  public getCreatedBy(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/WdCryptos/:id/createdBy";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Fetches belongsTo relation lastUpdatedBy.
   *
   * @param {any} id Tracked id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `WdCrypto` object.)
   * </em>
   */
  public getLastUpdatedBy(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/WdCryptos/:id/lastUpdatedBy";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {object} data Request data.
   *
   *  - `serialNo` – `{string}` - 
   *
   *  - `dateStart` – `{date}` - 
   *
   *  - `dateEnd` – `{date}` - 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `ret` – `{any}` - 
   */
  public generateCdCode(serialNo: any, dateStart: any, dateEnd: any, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/WdCryptos/genCdCode";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof serialNo !== 'undefined' && serialNo !== null) _urlParams.serialNo = serialNo;
    if (typeof dateStart !== 'undefined' && dateStart !== null) _urlParams.dateStart = dateStart;
    if (typeof dateEnd !== 'undefined' && dateEnd !== null) _urlParams.dateEnd = dateEnd;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {object} data Request data.
   *
   *  - `serialNo` – `{string}` - 
   *
   *  - `dateStart` – `{date}` - 
   *
   *  - `dateEnd` – `{date}` - 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `ret` – `{any}` - 
   */
  public generateDebugCode(serialNo: any, dateStart: any, dateEnd: any, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/WdCryptos/genDebugCode";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof serialNo !== 'undefined' && serialNo !== null) _urlParams.serialNo = serialNo;
    if (typeof dateStart !== 'undefined' && dateStart !== null) _urlParams.dateStart = dateStart;
    if (typeof dateEnd !== 'undefined' && dateEnd !== null) _urlParams.dateEnd = dateEnd;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {object} data Request data.
   *
   *  - `serialNo` – `{string}` - 
   *
   *  - `allowDate` – `{date}` - 
   *
   *  - `genPower` – `{string}` - 
   *
   *  - `encryVersion` – `{number}` - 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `ret` – `{string}` - 
   */
  public generateActiveCode(serialNo: any, allowDate: any, genPower: any, encryVersion: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/WdCryptos/genActiveCode";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof serialNo !== 'undefined' && serialNo !== null) _urlParams.serialNo = serialNo;
    if (typeof allowDate !== 'undefined' && allowDate !== null) _urlParams.allowDate = allowDate;
    if (typeof genPower !== 'undefined' && genPower !== null) _urlParams.genPower = genPower;
    if (typeof encryVersion !== 'undefined' && encryVersion !== null) _urlParams.encryVersion = encryVersion;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {object} data Request data.
   *
   *  - `serialNo` – `{string}` - 
   *
   *  - `codeList` – `{string}` - 
   *
   *  - `encryVersion` – `{number}` - 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `ret` – `{object}` - 
   */
  public generateDeviceCode(serialNo: any, codeList: any, encryVersion: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/WdCryptos/genDeviceCode";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof serialNo !== 'undefined' && serialNo !== null) _urlParams.serialNo = serialNo;
    if (typeof codeList !== 'undefined' && codeList !== null) _urlParams.codeList = codeList;
    if (typeof encryVersion !== 'undefined' && encryVersion !== null) _urlParams.encryVersion = encryVersion;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {object} data Request data.
   *
   *  - `deviceCode` – `{string}` - 
   *
   *  - `version` – `{number}` - 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `ret` – `{object}` - 
   */
  public parseDeviceCode(deviceCode: any, version: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/WdCryptos/parseDeviceCode";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof deviceCode !== 'undefined' && deviceCode !== null) _urlParams.deviceCode = deviceCode;
    if (typeof version !== 'undefined' && version !== null) _urlParams.version = version;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {object} data Request data.
   *
   *  - `content` – `{string}` - 
   *
   *  - `version` – `{number}` - 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `ret` – `{object}` - 
   */
  public decodeLog(content: any, version: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/WdCryptos/decodeLog";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof content !== 'undefined' && content !== null) _urlParams.content = content;
    if (typeof version !== 'undefined' && version !== null) _urlParams.version = version;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `WdCrypto`.
   */
  public getModelName() {
    return "WdCrypto";
  }
}
