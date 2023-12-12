interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getToWork(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getToWork(): string {
    return "Getting a coffee break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  } 
}

interface CreateEmployeeFunction {
  (salary: number | string): string;
}

const createEmployee: CreateEmployeeFunction = (salary) => {
  if (typeof salary === number) {
    if (salary <= 500) {
      return new Teacher();
      } else {
        return new Director();
      }
  }
};

function isDirector(employee: Director | Teacher): employee is DIrector {
  return (employee as DIrector).workDirectorTasks != undefined;
}

function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';  
  }
}
