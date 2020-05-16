export class Student {
  id: number
  firstname: string
  lastname: string
  age: number

  constructor() {
    this.id = 0
    this.firstname = ''
    this.lastname = ''
    this.age = 7
  }

  get fullname(): string {
    return `${this.firstname} ${this.lastname}`
  }
}

export type Students = Student[]

export interface RootState {
  students: Students
}
