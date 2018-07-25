import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { resolve, reject } from 'q';

@Injectable()
export class ClientService {
  public truckRef: AngularFireList<string>;
  public driverRef: AngularFireList<string>;

  constructor(public afd: AngularFireDatabase) {
    this.truckRef = this.afd.list('trucks');
    this.driverRef = this.afd.list('drivers');
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
  // public fetchTrucks() {
  //   return this.truckRef.snapshotChanges().map( docArray => {
  //     return docArray.map( doc => {
  //       return {
  //         id: doc.payload.key,
  //         truckCapacity: doc.payload.val()

  //       };
  //     });
  //   });
  // }

  // fetchQoutes(){
  //   return this.afd.list('/myqoutes')
  //   .snapshotChanges().map(docArray =>{
  //     return docArray.map(doc =>{
  //       return {
  //         id: doc.payload.key,
  //         title: doc.payload.val().title,
  //         description: doc.payload.val().description,
  //         shared: doc.payload.val().shared
  //       }
  //     })
  //   });
  // }

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
}
