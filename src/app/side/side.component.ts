import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSlack  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  faCoffee = faCoffee;
  faLinkedin = faLinkedin;
  faSlack = faSlack;
  constructor() { }

  ngOnInit() {
  }

}
