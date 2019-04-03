import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-shops-existing-technician',
  templateUrl: './manage-shops-existing-technician.component.html',
  styleUrls: ['./manage-shops-existing-technician.component.css']
})
export class ManageShopsExistingTechnicianComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.notify.emit('');
  }
}
