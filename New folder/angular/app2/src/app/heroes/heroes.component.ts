import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {Hero} from '../Hero'
import{HEROES} from '../Mock-hero'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero:Hero={id:1,
    name:"Ankur"}
    heroes=HEROES;
    constructor() { }

  ngOnInit() {
  }

}
