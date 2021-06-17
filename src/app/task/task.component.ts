import { Component, OnInit } from '@angular/core';
// import * as internal from 'stream';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  taskName: string = ''

  constructor() { 
  }

  ngOnInit(): void {
  }

}
