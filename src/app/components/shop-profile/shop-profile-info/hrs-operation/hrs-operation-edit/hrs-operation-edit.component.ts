import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hrs-operation-edit',
  templateUrl: './hrs-operation-edit.component.html',
  styleUrls: ['./hrs-operation-edit.component.css']
})
export class HrsOperationEditComponent implements OnInit {
  @Input() weeklySchedules: any;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  timearray = [];
  timeGenerator() {
    this.timearray = [];
    for (var i = 0; i < 24; i++) {
      //if(i < 10) { time = '0' + i;} else (time = i+'')
      this.timearray.push(i * 100);
      this.timearray.push((i * 100) + 30);
    }
    console.log(this.timearray);
    return this.timearray;
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
  
  constructor() { }

  ngOnInit() {
    this.timeGenerator();
  }

  closeModal() {
    this.notify.emit('');
  }

}
