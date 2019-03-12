import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnDestroy {

  constructor(private renderer: Renderer2) { 
    this.renderer.addClass(document.body, 'modal-open');
   }
   
   ngOnInit() {
   }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }

}
