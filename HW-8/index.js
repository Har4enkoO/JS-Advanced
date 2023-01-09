//Base

class Student {
  allMarks = [5, 4, 4, 5];
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
  }

  getInfo() {
    return `Студент ${this.course}го курса ${this.university}, ${this.fullName}`;
  }

  get marks() {
    if (!this.allMarks) console.log("Студента виключено");
    return this.allMarks;
  }

  set marks(value) {
    if (this.allMarks) {
      this.allMarks = [...this.allMarks, value];
      return this.allMarks;
    } else {
      return null;
    }
  }

  getAverageMark() {
    if (this.allMarks) {
      const averageMark =
        this.allMarks.reduce((accumulator, currentEl) => {
          return accumulator + currentEl;
        }, 0) / this.allMarks.length;
      return averageMark;
    } else {
      return null;
    }
  }

  dismiss() {
    this.allMarks = null;
    console.log("Студента виключено");
  }

  recover() {
    if (this.allMarks === null) {
      this.allMarks = [];
      console.log("Студента відновлено");
    }
  }
}

let alex = new Student("НАУ", "3", "Харченко Олександр");
console.log(alex.getInfo());
console.log(alex.marks);
alex.marks = 5;
console.log(alex.marks);
console.log(alex.getAverageMark());
console.log(alex.dismiss());
console.log(alex.marks);
console.log(alex.recover());
alex.setMarks = 5;
console.log(alex.marks);

//Advanced

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    setInterval(() => this.getScholarship(), 30000);
  }
  getScholarship() {
    if (this.getAverageMark() >= 4) {
      console.log(
        this.getAverageMark() >= 4
          ? `Ви отримали 1400 грн. стипендії`
          : `${this.fullName}, Ви погано навчаєтеся`
      );
    }
  }
}

let petro = new BudgetStudent("МАУ", "4", "Петренко Олександр");

console.log(petro.getScholarship());
