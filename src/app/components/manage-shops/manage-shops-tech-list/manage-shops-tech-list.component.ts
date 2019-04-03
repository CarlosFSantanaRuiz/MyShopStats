import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-shops-tech-list',
  templateUrl: './manage-shops-tech-list.component.html',
  styleUrls: ['./manage-shops-tech-list.component.css']
})
export class ManageShopsTechListComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  toggleModal(value) {
    this.notify.emit(value);
  }

}
