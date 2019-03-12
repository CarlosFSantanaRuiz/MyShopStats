import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-shop-info-edit',
  templateUrl: './shop-info-edit.component.html',
  styleUrls: ['./shop-info-edit.component.css']
})
export class ShopInfoEditComponent implements OnInit {
  @Input() shop: Object;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  
  closeModal() {
    this.notify.emit('');
  }
}
