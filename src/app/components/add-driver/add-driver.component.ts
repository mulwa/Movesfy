import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
  public driverForm: FormGroup;

  constructor(public fb: FormBuilder, public clientService: ClientService) { }

  ngOnInit() {
    this.driverForm  = this.fb.group({
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      licenceNo: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', Validators.required],
      idNo: ['', Validators.required]
    });
  }
  addDriver() {
    console.log(JSON.stringify(this.driverForm.value));
    this.clientService.saveDriver(this.driverForm.value).then(res => {
      if (res === 'success') {
        this.driverForm.reset();
      }

    }, error => {
      console.log('An error has Occured');
    });

  }

}
