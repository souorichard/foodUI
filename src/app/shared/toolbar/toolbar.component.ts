import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', function() {
      const toolbar = this.document.querySelector('mat-toolbar');
      toolbar?.classList.toggle("sticky", this.window.scrollY > 0);
    })
  }

}
