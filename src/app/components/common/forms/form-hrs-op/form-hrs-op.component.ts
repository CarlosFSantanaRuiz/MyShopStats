import { Component, OnInit, Input } from '@angular/core';

import { GenerateDataService } from 'src/app/services/generate-data.service';

@Component({
  selector: 'app-form-hrs-op',
  templateUrl: './form-hrs-op.component.html',
  styleUrls: ['./form-hrs-op.component.css']
})
export class FormHrsOpComponent implements OnInit {
  @Input() weeklySchedules: any;

  defaultWeeklySchedule = this.GenerateDataService.getDefaultWeeklySchedule();

  timearray = this.GenerateDataService.timeGenerator();

  amPmConvertItem(element) {
    return this.GenerateDataService.amPmConvertItem(element);
  }

  constructor(
    private GenerateDataService : GenerateDataService
  ) {}

  ngOnInit() {
  }

}
