export class Task {
    public title: string = ''
    public completed: boolean = false
    public previousOccurrence?: Date 
    public nextOccurrence: Date = new Date()
    public needsEncouragement: boolean = false
    public repeater: Repeater = new Repeater()
  }

export class Repeater {
    public doesRepeat: boolean = false
    public every: Number | null = null
    public interval: Number | null = null
    public day: Number | null = null
  }