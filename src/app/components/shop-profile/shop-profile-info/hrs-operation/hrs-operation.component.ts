import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-hrs-operation',
  templateUrl: './hrs-operation.component.html',
  styleUrls: ['./hrs-operation.component.css']
})
export class HrsOperationComponent implements OnInit {
  @Input() weeklySchedules: any;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  checkClosed(time) {
    if (time === 0) {
      return 'CLOSED';
    } else {
      return time;
    }
  }

  toggle(contentname) {
    this.notify.emit(contentname);
  }

  amPmConvertItem(element) {
    var elementstring = element.toString();
    var hour;
    var min;
    var ampm = 'AM';
      if (elementstring.length <= 2) {
        if (elementstring === '0') {
          hour = '12';
          min = '00';
        }
        if (elementstring === '30') {
          hour = '12';
          min = '30';
        }
      }
      else if (elementstring.length === 3) {
        hour = elementstring.substring(0,1);
        min = elementstring.toString().substring(1, 3);
      } else {
        hour = elementstring.substring(0,2);
        min = elementstring.substring(2, 4);
      }
      
      if (hour > 12) {
        hour = hour - 12;
        ampm = 'PM';
      }
      return hour + ':' + min + ' ' + ampm
  }

}
