import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent) child;

  // @ViewChild(ChildComponent, { static: true }) child; // Only for Angular 8
  msg = 'Hello MSG from parent !';
  msgFromChild: string;
  msgFromChildUsingOutput: string;
  msgFromService: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.msgFromChild = this.child.childMsg;
    this.dataService.currentMsg.subscribe(
      (data: string) => {
        this.msgFromService = data;
      });
  }

  getMsgFromChild(cMsg: string) {
    this.msgFromChildUsingOutput = cMsg;
  }

  changeMsg() {
    this.dataService.changeMsg('Change Default MSG from PARENT !');
  }
}






