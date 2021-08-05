import { AngularFirestore } from '@angular/fire/firestore';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TaskListComponent } from '../task-list.component';
import { Repeater } from '../../models/task'
import { DateTime } from 'luxon';

@Component({
  selector: 'task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.sass']
})
export class TaskCardComponent implements OnInit {

  @Input() id!: string
  @Input() title!: string
  @Input() completed!: boolean
  @Input() repeater!: Repeater

  @ViewChild(TaskListComponent)
    public taskList!: TaskListComponent


  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {
  }

  completeTask(id:string, repeater: Repeater){
    this.store.collection('tasks').doc(id).update({
      completed: true,
      // previousOccurrence: this.getNextOccurrence(repeater)?.now.toJSDate(),
      // nextOccurrence: this.getNextOccurrence(repeater)?.nextOccurrence.toJSDate()
    }).then(r => console.log(r))
  }

  requestEncouragment(id:string){
    this.store.collection('tasks').doc(id).update({needsEncouragement: true})
  }

  getNextOccurrence(repeater: Repeater) {
    const now: DateTime = DateTime.now()
    let nextOccurrence: DateTime;
    const intervals: Array<any> = [
      { days: repeater.every },
      { weeks: repeater.every },
      { months: repeater.every },
      { years: repeater.every }
    ]

    if (repeater.doesRepeat === false) {
      return null
    } else {
      nextOccurrence = now.plus(intervals[repeater.interval])
    }
    return { nextOccurrence, now }
  }

}
