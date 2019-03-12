import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['./shop-info.component.css']
})
export class ShopInfoComponent implements OnInit {
  @Input() shop: Object;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  toggle(contentname) {
    this.notify.emit(contentname);
  }

}
