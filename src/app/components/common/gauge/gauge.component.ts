import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Input() gaugedata;
  color: string;
  arrowdirection: string;
  constructor() {
   }

  ngOnInit() {
    this.color = this.getColor();
    this.arrowdirection = this.getArrowDirection();
  }

  getArrowDirection() {
    switch(this.type) {
      case 'shop':
        return 'right';
        break;
      case 'tech':
        return 'up';
        break;
      default:
        return 'right';
    }
  }

  getColor(){
    switch(this.title) {
      case 'Productivity':
        return 'yellow';
        break;
      case 'Unit Count':
        return 'red';
        break;
      case 'Monthly Sales':
        return 'green';
        break;
      case 'Avg Ro':
        return 'blue';
        break;
      default:
        return 'yellow';
    }
  }

  actualOfGoalPercentageValue(value) {
    var percentage = this.gaugedata.actual / this.gaugedata.goal;
    return percentage * value;
  }

  actualVsGoalGauge() {
    return (this.actualOfGoalPercentageValue(146.5)) + 24;
  };

  actualVsGoalDial() {
    if ((this.gaugedata.actual / this.gaugedata.goal) > 1.0) {
      return 497;
    }
    else {
      return (this.actualOfGoalPercentageValue(272)) - 135;
    }
  };

}
