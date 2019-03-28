import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-manage-shops-dashboard',
  templateUrl: './manage-shops-dashboard.component.html',
  styleUrls: ['./manage-shops-dashboard.component.css']
})
export class ManageShopsDashboardComponent implements OnInit {
  openModal: string = '';
  @Input() notify;

  constructor() { }

  ngOnInit() {
  }

  toggleModal(contentname) {
    this.openModal = contentname;
  }

}
