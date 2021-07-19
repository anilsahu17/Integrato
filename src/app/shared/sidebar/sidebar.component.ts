import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    /* open sidebar */
    document.body.classList.add("sidebar-open");

    $.getScript('assets/js/sidebar.js');

  }

}
