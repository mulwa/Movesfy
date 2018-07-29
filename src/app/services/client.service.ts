import { IDriver } from './../Models/Driver';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { resolve, reject } from 'q';
import { Itruck } from '../Models/truck';
import { Customer } from '../Models/Customer';
import { IRequest } from '../Models/Requests';


@Injectable()
export class ClientService {
  public truckRef: AngularFireList<Itruck>;
  public driverRef: AngularFireList<IDriver>;
  public customerRef: AngularFireList<Customer>;
  public requestRef: AngularFireList<IRequest>;

  constructor(public afd: AngularFireDatabase) {
    this.truckRef = this.afd.list('trucks');
    this.driverRef = this.afd.list('drivers');
    this.customerRef  =  this.afd.list('customers');
    this.requestRef = this.afd.list('requests');
  }

  public saveTruck(truck): Promise<string> {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise((resolve, reject) => {
      this.truckRef.push(truck).then(res => {
        resolve('success');
      }, error => {
        reject(new Error(error));
      });
    });
  }


  saveDriver(data): Promise<string> {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise((resolve, reject) => {
      this.driverRef.push(data).then((res) => {
        resolve('success');

      }, error => {
        reject(new Error(error));
      });

    });
  }
  getDriversList(): AngularFireList<IDriver>  {
    return this.driverRef;
  }
  deleteDriver() {

  }
  getTruckList(): AngularFireList<Itruck> {
    return this.truckRef;
  }
  getCustomerList(): AngularFireList<Customer> {
    return this.customerRef;
  }
  getRequestList(): AngularFireList<IRequest> {
    return this.requestRef;
  }

}
