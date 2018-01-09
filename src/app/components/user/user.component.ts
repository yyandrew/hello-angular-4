import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  constructor() { }

  ngOnInit() {
    this.name = 'andrew';
    this.age = 12;
  }

  onKeyUp() {
    console.log('key up!');
  }

}
