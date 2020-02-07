// @ts-ignore
import { Component, Input, OnInit } from '@angular/core';
import {Content} from './content-card-helper';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent implements OnInit {
  @Input() content: Content;
  ngOnInit(): void {
  }

  clickMe() {
    console.log('Id: ' + this.content.id);
  }
}
