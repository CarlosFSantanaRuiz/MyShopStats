import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { GenerateDataService } from 'src/app/services/generate-data.service';

@Component({
  selector: 'app-hrs-op-day',
  templateUrl: './hrs-op-day.component.html',
  styleUrls: ['./hrs-op-day.component.css']
})
export class HrsOpDayComponent implements OnInit {
  @Input() daySchedule : any;
  @Input() datearray: any;
  
  dayActive: Boolean = true;
  constructor(private GenerateDataService : GenerateDataService) { }
  
  ngOnInit() {
    if (this.daySchedule.schedule.start <= -1) {
      this.dayActive = false;
    }
  }

  formatAMPM(date) {
    date = this.GenerateDataService.generateDateUTC(date);
    return this.GenerateDataService.formatAMPM(date);
  }

  dayActiveToggle() {
    this.dayActive = !this.dayActive;
    if (this.dayActive === false) {
    this.daySchedule.schedule.start = new Date(-1);
    this.daySchedule.schedule.end = new Date(-1);
    }    
    if (this.dayActive === true) {
      this.daySchedule.schedule.start = new Date(0);
      this.daySchedule.schedule.end = new Date(0);
    }
  }

}
