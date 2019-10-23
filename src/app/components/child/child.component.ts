import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() MSG;
  @Output() msgEvent = new EventEmitter<string>();
  childMsgForOutput = 'Hello MSG from Child using Output()';

  childMsg = 'Hello MSG from Child !';

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

  sendToParent() {
    this.msgEvent.emit(this.childMsgForOutput);
  }

  changeMsg() {
    this.dataService.changeMsg('Change Default MSG from CHILD !');
  }
}








