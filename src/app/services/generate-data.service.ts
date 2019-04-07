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

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    var newminutes = minutes < 10 ? '0'+minutes.toString() : minutes.toString();
    var strTime = hours + ':' + newminutes + ' ' + ampm;
    return strTime;
  };

  generateDateUTC(date) {
    var newdate = new Date(date);
    var utc = new Date(newdate.getTime() + newdate.getTimezoneOffset() * 60000);
    return utc
  }

  getDefaultWeeklySchedule() {
    var weeklyScheduleArray = [];
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    var date = new Date(0);
    for (var i = 0; i < days.length; i ++) {
      var weeklySchedule = {};
        weeklySchedule['day'] = days[i];
        weeklyScheduleArray.push(weeklySchedule);
      var startEndObject = {};
        startEndObject['start'] = date.toString();
        startEndObject['end'] = date.toString();
      weeklySchedule['schedule'] = startEndObject;
    }
    return weeklyScheduleArray;
  }

  dateGenerator() {
    var datearray = [];
    for (var i = 0; i < 48; i++) {
      var date = new Date(i * 1800000);
      datearray.push(date.toString());
    }
    return datearray;
  }
}
