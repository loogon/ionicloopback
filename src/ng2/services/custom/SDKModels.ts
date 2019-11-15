/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { AccessToken } from '../../models/AccessToken';
import { ACL } from '../../models/ACL';
import { RoleMapping } from '../../models/RoleMapping';
import { Role } from '../../models/Role';
import { NumberRecord } from '../../models/NumberRecord';
import { Customer } from '../../models/Customer';
import { Equipment } from '../../models/Equipment';
import { Report } from '../../models/Report';
import { Contact } from '../../models/Contact';
import { Employee } from '../../models/Employee';
import { Department } from '../../models/Department';
import { Region } from '../../models/Region';
import { Country } from '../../models/Country';
import { Province } from '../../models/Province';
import { ExposureCount } from '../../models/ExposureCount';
import { LocationReport } from '../../models/LocationReport';
import { SignIn } from '../../models/SignIn';
import { Trip } from '../../models/Trip';
import { ReportCode } from '../../models/ReportCode';
import { Appointment } from '../../models/Appointment';
import { Dispatch } from '../../models/Dispatch';
import { Maintain } from '../../models/Maintain';
import { AccessoryApplication } from '../../models/AccessoryApplication';
import { ApplyAccessoryList } from '../../models/ApplyAccessoryList';
import { DispatchEmployee } from '../../models/DispatchEmployee';
import { WorkLog } from '../../models/WorkLog';
import { ActivationCode } from '../../models/ActivationCode';
import { Container } from '../../models/Container';
import { ExposureList } from '../../models/ExposureList';
import { Accessory } from '../../models/Accessory';
import { Service } from '../../models/Service';
import { DisposeRecord } from '../../models/DisposeRecord';
import { AccessoryStore } from '../../models/AccessoryStore';
import { SummaryStatement } from '../../models/SummaryStatement';
import { SystemConfig } from '../../models/SystemConfig';
import { WdCrypto } from '../../models/WdCrypto';
import { DogInfo } from '../../models/DogInfo';
import { CodeInfo } from '../../models/CodeInfo';
import { CdCodeInfo } from '../../models/CdCodeInfo';
import { DeviceCode } from '../../models/DeviceCode';
import { Device } from '../../models/Device';
import { DeviceDetail } from '../../models/DeviceDetail';
import { DeviceMachine } from '../../models/DeviceMachine';
import { DeviceMachineLog } from '../../models/DeviceMachineLog';
import { DeviceMachineSoft } from '../../models/DeviceMachineSoft';
import { DeviceMachineDetail } from '../../models/DeviceMachineDetail';
import { DebugCodeInfo } from '../../models/DebugCodeInfo';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    AccessToken: AccessToken,
    ACL: ACL,
    RoleMapping: RoleMapping,
    Role: Role,
    NumberRecord: NumberRecord,
    Customer: Customer,
    Equipment: Equipment,
    Report: Report,
    Contact: Contact,
    Employee: Employee,
    Department: Department,
    Region: Region,
    Country: Country,
    Province: Province,
    ExposureCount: ExposureCount,
    LocationReport: LocationReport,
    SignIn: SignIn,
    Trip: Trip,
    ReportCode: ReportCode,
    Appointment: Appointment,
    Dispatch: Dispatch,
    Maintain: Maintain,
    AccessoryApplication: AccessoryApplication,
    ApplyAccessoryList: ApplyAccessoryList,
    DispatchEmployee: DispatchEmployee,
    WorkLog: WorkLog,
    ActivationCode: ActivationCode,
    Container: Container,
    ExposureList: ExposureList,
    Accessory: Accessory,
    Service: Service,
    DisposeRecord: DisposeRecord,
    AccessoryStore: AccessoryStore,
    SummaryStatement: SummaryStatement,
    SystemConfig: SystemConfig,
    WdCrypto: WdCrypto,
    DogInfo: DogInfo,
    CodeInfo: CodeInfo,
    CdCodeInfo: CdCodeInfo,
    DeviceCode: DeviceCode,
    Device: Device,
    DeviceDetail: DeviceDetail,
    DeviceMachine: DeviceMachine,
    DeviceMachineLog: DeviceMachineLog,
    DeviceMachineSoft: DeviceMachineSoft,
    DeviceMachineDetail: DeviceMachineDetail,
    DebugCodeInfo: DebugCodeInfo,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
