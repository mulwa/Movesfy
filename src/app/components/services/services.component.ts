import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  requests: any;
  showLoading: boolean = true;

  constructor( public clientService: ClientService) { }

  ngOnInit() {
    this.showLoading = true;
    this.getRequest();
  }
  getRequest() {
    this.clientService.getRequestList().snapshotChanges().map(changes => {
      this.showLoading = false;
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(drivers => {
      this.requests = drivers;
    });
  }

}
