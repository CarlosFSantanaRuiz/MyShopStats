import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-shop-profile-technicians-form',
  templateUrl: './shop-profile-technicians-form.component.html',
  styleUrls: ['./shop-profile-technicians-form.component.css']
})
export class ShopProfileTechniciansFormComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  closeModal() {
    this.notify.emit('');
  }
}
