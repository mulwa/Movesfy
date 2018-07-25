import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';


@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css']
})
export class TruckComponent implements OnInit {
   items: Observable<any[]>;

  constructor(public clientService: ClientService, public afd: AngularFireDatabase) { }

  ngOnInit() {
    this.items = this.afd.list('truck').valueChanges();
    console.log(this.items);
  }

}
