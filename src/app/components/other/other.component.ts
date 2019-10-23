import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  msgFromService: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.currentMsg.subscribe(
      (data: string) => {
        this.msgFromService = data;
      });
  }

  changeMsg() {
    this.dataService.changeMsg('Change Default MSG from OTHER !');
  }

}








