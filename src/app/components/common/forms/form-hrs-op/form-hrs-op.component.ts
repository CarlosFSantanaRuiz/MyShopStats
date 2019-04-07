import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { GenerateDataService } from 'src/app/services/generate-data.service';

@Component({
  selector: 'app-form-hrs-op',
  templateUrl: './form-hrs-op.component.html',
  styleUrls: ['./form-hrs-op.component.css']
})
export class FormHrsOpComponent implements OnInit {
  @Input() weeklySchedules: any;

  datearray = this.GenerateDataService.dateGenerator();

  constructor(
    private GenerateDataService : GenerateDataService
  ) {}

  ngOnInit() {
  }

}
