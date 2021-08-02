import { DateTime } from "luxon"
export class Task {
    public title: string = ''
    public completed: boolean = false
    public previousOccurrence?: DateTime | Date
    public nextOccurrence: DateTime | Date = DateTime.now()
    public needsEncouragement: boolean = false
    public repeater: Repeater = new Repeater()
  }

export class Repeater {
    public doesRepeat: boolean = false
    public every: number | null = null
    public interval: number | null = null
    public day: number | null = null
  }