import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ClientService } from '../../services/client.service';
import { IDriver } from '../../Models/Driver';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  drivers: any;
  showLoading: boolean = true;

  constructor(private clientService: ClientService, private afd: AngularFireDatabase ) {

  }

  ngOnInit() {
    this.showLoading = true;
    this.getDriverList();
     }

  getDriverList() {
    this.clientService.getDriversList().snapshotChanges().map(changes => {
      this.showLoading = false;
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(drivers => {
      this.drivers = drivers;
    });
  }
}
