import { DateTime } from "luxon"
export class Task {
  public title: string = ''
  public priority: number = 0
  public completed: boolean = false
  public previousOccurrence?: Date
  public nextOccurrence: Date = DateTime.now().toJSDate()
  public needsEncouragement: boolean = false
  public repeater: Repeater = new Repeater()
  }

export class Repeater {
  public doesRepeat: boolean = false
  public every: number = 0
  public interval: number = 0
  public day: number = 0
  }