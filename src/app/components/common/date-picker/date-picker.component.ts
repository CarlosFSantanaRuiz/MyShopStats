import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Input() mode: String;
  calendarActive = false;
  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth();

  selectedYear = this.currentYear;
  selectedMonth = this.currentMonth;
  displayYear = this.selectedYear;

  monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

  constructor() { }

  ngOnInit() {
    console.log(this.selectedYear);
    console.log(this.displayYear);
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
}
