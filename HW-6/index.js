const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

//Task #1
const getSubjects = (name) => {
  const subjectsArr = Object.keys(name.subjects).map(
    (el) =>
      (el = el[0].toUpperCase() + el.slice(1).toLowerCase().replace("_", " "))
  );
  return subjectsArr;
};
console.log("Список предметів студента: " + getSubjects(students[0]));

//Task #2

const getAverageMark = (name) => {
  let allMarks = [];
  for (const i in name.subjects) {
    allMarks = [...allMarks, ...name.subjects[i]];
  }
  const avgMark = (
    allMarks.reduce((acc, el) => acc + el, 0) / allMarks.length
  ).toFixed(2);
  return avgMark;
};
console.log("Середня оцінка по студенту: " + getAverageMark(students[0]));

//Task #3
const getStudentInfo = (student) => {
  const info = { ...student };
  info.averageMark = getAverageMark(student);
  delete info.subjects;
  return info;
};

console.log("Інфо по студенту: ", getStudentInfo(students[1]));

//Task #4

const getStudentsNames = (students) => {
  let studentsNames = [];
  for (const student of students) {
    studentsNames = [...studentsNames, student.name];
  }
  const sortedStudentsNames = studentsNames.sort();
  return sortedStudentsNames.sort();
};
console.log(
  "Імена студентів в Алфавітному порядку: " + getStudentsNames(students)
);

//Task #5
const getBestStudent = (students) => {
  let bestStudent = "";
  let bestAvarageMark = 0;
  for (const student of students) {
    const avgMark = getAverageMark(student);
    if (avgMark > bestAvarageMark) {
      bestStudent = student.name;
      bestAvarageMark = avgMark;
    }
  }
  return bestStudent;
};
console.log("Найкращий студент - " + getBestStudent(students));

//Task #6

const calculateWordLetters = (word) => {
  const countLetters = {};
  word.split("").forEach((el) => {
    countLetters[el] ? countLetters[el]++ : (countLetters[el] = 1);
  });
  return countLetters;
};
console.log("Перелік літер ", calculateWordLetters("teessstttt"));
