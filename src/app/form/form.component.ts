import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public name = '';
  public password = '';
  public vehicle = ["Honda", "Toyota", "BMW"]
  private selectVehicle = ''
  constructor() { }

  ngOnInit(): void {
  }
  public onSubmit()
  {
    console.log("Name: " + this.name);
    console.log("pass: " + this.password);
    console.log("Vehicle: " + this.selectVehicle);
  }

  public onChange(event:any){
    this.selectVehicle = event.target.value;
  }

}
