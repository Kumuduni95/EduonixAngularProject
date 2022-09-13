import { Component, OnInit } from '@angular/core';
import { ALBUM } from '../data/albums';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  albums = ALBUM;
  constructor() { }

  ngOnInit(): void {
    console.log("Albums",this.albums);
  }

}
