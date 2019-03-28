import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-manage-shops-add',
  templateUrl: './manage-shops-add.component.html',
  styleUrls: ['./manage-shops-add.component.css']
})
export class ManageShopsAddComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  addShopActive = 1;

  constructor() { }

  ngOnInit() {
  }

  makeShopActive(activeShop) {
    this.addShopActive = activeShop;
  }

  closeModal() {
    this.notify.emit('');
  }

}
