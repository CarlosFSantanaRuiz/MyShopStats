import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['../date-picker.component.css']
})
export class DateSelectorComponent implements OnInit {
  calendarActive = false;
  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth();
  currentDay = new Date().getDate();
  selectedYear = this.currentYear;
  selectedMonth = this.currentMonth;
  selectedDay = this.currentDay;
  displayYear = this.selectedYear;
  displayMonth = this.selectedMonth;
  displayWeeks = this.getWeeksInMonth(this.currentMonth, this.currentYear);

  monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  constructor() { }

  ngOnInit() {
    
  }

  toggleCalendarDropdown() {
    this.calendarActive = !this.calendarActive;
  }

  updateActiveMonthYear(selectedMonth) {
      if(! (this.displayYear === this.currentYear && selectedMonth > this.currentMonth)) {
        this.selectedYear = this.displayYear;
        this.selectedMonth = selectedMonth;
        this.toggleCalendarDropdown();
      }
  }

  updateDisplayYear(displayYear) {
    if (displayYear <= this.currentYear) {
      this.displayYear = displayYear;
    }
  }

 getWeeksInMonth(month, year) {
    var weeks=[];
    var lastMonthDate=new Date(year, month, 0).getDate();
    var firstDate=new Date(year, month, 1);
    var lastDate=new Date(year, month+1, 0);
    var numDays= lastDate.getDate();
    var start=1;
    var end=7-firstDate.getDay();
    var weekcounter = 0;

    while(start<=numDays){
      var week = [];
      var endstart = end - start + 1;

      //Adds Days of Previous Month to First Week
      if (endstart < 7 && weekcounter === 0) {
        var remainder = 7-endstart;
        for(var i = 0; i < remainder; i++) {
          week.push(lastMonthDate - remainder + i + 1);
        }
      }

      //Adds Days of Selected Month
      for(var i = 0; i < endstart; i++) {
        week.push(start + i);
      }

      //Adds Days of Next Month to Last
      if (endstart < 7 && weekcounter != 0) {
        var remainder = 7-endstart;
        for(var i = 0; i < remainder; i++) {
          week.push(i+1);
        }
      }

      //Add week[] array to the weeks[] array
      weeks.push(week);
      start = end + 1;
      end = end + 7;

      weekcounter++;
      if(end>numDays)
        end=numDays;    
      }

       return weeks;
    }

    isDayActive(day, weekslength) {
      if(this.selectedDay === day && this.displayYear === this.selectedYear && this.displayMonth === this.selectedMonth && 
        !(weekslength === 0 && day > 7 || weekslength + 1 === this.displayWeeks.length && day < 7)) {
        return true;
      }
    }

    isDayDisabled(day, weekslength) {
      if(weekslength === 0 && day > 7 || weekslength + 1 === this.displayWeeks.length && day < 7) {
        return true;
      }
    }

    updateActiveDate(selectedDay, weekslength) {
      if (weekslength === 0 && selectedDay > 7) {
        this.updateDisplayMonthYear(this.displayMonth - 1);
      }
      if (weekslength + 1 === this.displayWeeks.length && selectedDay < 7) {
        this.updateDisplayMonthYear(this.displayMonth + 1);
      }
        this.selectedYear = this.displayYear;
        this.selectedMonth = this.displayMonth;
        this.selectedDay = selectedDay;
  }

  updateDisplayMonthYear(displayMonth) {
    if(! (this.displayYear === this.currentYear && displayMonth > this.currentMonth)) {
      if (displayMonth < 0 ) {
        displayMonth = displayMonth + 12;
        this.displayYear = this.displayYear - 1;
      }
      else if (displayMonth > 11) {
        displayMonth = displayMonth - 12;
        this.displayYear = this.displayYear + 1;
      }
      this.displayMonth = displayMonth;
      this.displayWeeks = this.getWeeksInMonth(this.displayMonth, this.displayYear);
    }
  }
}

