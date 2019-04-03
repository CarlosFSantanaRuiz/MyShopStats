import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-form-shop-info',
  templateUrl: './form-shop-info.component.html',
  styleUrls: ['./form-shop-info.component.css']
})
export class FormShopInfoComponent implements OnInit {
  @Input() shop;
  @Output() shopInfo = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }


}
