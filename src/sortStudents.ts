
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  let sortCallback: (firstStudent: Student, secondStudent: Student) => number;
  let sortOrder: number;

  switch (order) {
    case 'asc':
      sortOrder = 1;
      break;
    case 'desc':
      sortOrder = -1;
      break;
    default:
      return [];
  }

  switch (sortBy) {
    case SortType.Name:
      sortCallback = (
        firstStudent: Student,
        secondStudent: Student,
      ): number => firstStudent
        .name
        .localeCompare(secondStudent.name)
        * sortOrder;
      break;
    case SortType.Surname:
      sortCallback = (
        firstStudent: Student,
        secondStudent: Student,
      ): number => firstStudent
        .surname
        .localeCompare(secondStudent.surname)
        * sortOrder;
      break;
    case SortType.Age:
      sortCallback = (
        firstStudent: Student,
        secondStudent: Student,
      ): number => (firstStudent.age - secondStudent.age) * sortOrder;
      break;
    case SortType.Married:
      sortCallback = (
        firstStudent: Student,
        secondStudent: Student,
      ): number => (Number(firstStudent.married)
      - Number(secondStudent.married))
      * sortOrder;
      break;
    case SortType.AverageGrade:
      sortCallback = (
        firstStudent: Student,
        secondStudent: Student,
      ): number => (
        firstStudent
          .grades
          .reduce((sum: number, grade: number) => sum + grade, 0)
        / firstStudent.grades.length
        - secondStudent
          .grades
          .reduce((sum: number, grade: number) => sum + grade, 0)
        / secondStudent.grades.length
      ) * sortOrder;
      break;
    default:
      return [];
  }

  return [...students].sort(sortCallback);
}
