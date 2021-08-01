export class Task {
    public title: string = ''
    public completed: boolean = false
    public previousOccurrence: Date = new Date
    public nextOccurrence?: Date
    public needsEncouragement: boolean = false
  }