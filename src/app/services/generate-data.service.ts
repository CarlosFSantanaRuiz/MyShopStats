import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateDataService {

  states = 
  [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 
  'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 
  'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

  constructor() { }

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

  getDefaultWeeklySchedule() {
    var weeklyScheduleArray = [];
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    for (var i = 0; i < days.length; i ++) {
      var weeklySchedule = {};
        weeklySchedule['day'] = days[i];
        weeklyScheduleArray.push(weeklySchedule);
      var startEndObject = {};
        startEndObject['start'] = 24;
        startEndObject['end'] = 24;
      weeklySchedule['schedule'] = startEndObject;
    }
    return weeklyScheduleArray;
  }

  timeGenerator() {
    var timearray = [];
    for (var i = 0; i < 24; i++) {
      //if(i < 10) { time = '0' + i;} else (time = i+'')
      timearray.push(i * 100);
      timearray.push((i * 100) + 30);
    }
    return timearray;
  }
}
