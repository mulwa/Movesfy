import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-truck',
  templateUrl: './add-truck.component.html',
  styleUrls: ['./add-truck.component.css']
})
export class AddTruckComponent implements OnInit {
  public truckForm: FormGroup;

  constructor(public fb: FormBuilder, public clientService: ClientService) { }

  ngOnInit() {
    this.truckForm = this.fb.group({
      truckRegNo: ['', Validators.required],
      truckType: ['', Validators.required],
      truckCapacity: ['', Validators.required],
      truckDriver: ['', Validators.required]
    });
  }

  addTruck() {
    this.clientService.saveTruck(this.truckForm.value).then((res) => {
      if (res === 'success') {
        this.truckForm.reset();
      }
    }, error => {
      console.log('an error has occured');
    });
  }

}
