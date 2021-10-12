import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../service/common-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public Name : string = "Thuận"
  public Age
  public Vehicles = ["Toyota", "Honda", "Nissan"]
  constructor(private common: CommonServiceService) { 
    this.Age = common.age;
  }

  ngOnInit(): void {
  }

  public tangTuoi()
  {
    this.common.age++;
    this.Age = this.common.age;
  }

}
