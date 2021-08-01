import { AngularFirestore } from '@angular/fire/firestore';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TaskListComponent } from '../task-list.component'; 

@Component({
  selector: 'task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.sass']
})
export class TaskCardComponent implements OnInit {

  @Input() id!: string
  @Input() title!: string
  @Input() completed!: boolean

  @ViewChild(TaskListComponent)
    public taskList!: TaskListComponent


  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {
  }

  completeTask(id:string){
    this.store.collection('tasks').doc(id).update({completed: true})
  }

  requestEncouragment(id:string){
    this.store.collection('tasks').doc(id).update({needsEncouragement: true})
  }

}
