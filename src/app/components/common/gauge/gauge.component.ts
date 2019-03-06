import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {
  @Input() color: string;
  @Input() title: string;
  presentableActual = 28;
  actualVsGoalDif = 100;
  goal = 100;
  symbol = '';
  constructor() { }

  ngOnInit() {
  }

}
