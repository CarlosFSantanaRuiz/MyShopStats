import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-shop-info-edit',
  templateUrl: './shop-info-edit.component.html',
  styleUrls: ['./shop-info-edit.component.css']
})
export class ShopInfoEditComponent implements OnInit {
  @Input() shop: Object;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  states = 
  [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 
  'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 
  'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

  constructor() { }

  ngOnInit() {
  }
  
  closeModal() {
    this.notify.emit('');
  }
}
