import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../service/common-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public name = "chu cuoi";
  public age;
  constructor(private common: CommonServiceService) {
    this.age = this.common.age;
   }

  ngOnInit(): void {
  }
  
  public tangTuoi()
  {
    this.common.age++;
    this.age = this.common.age;
  }

}
