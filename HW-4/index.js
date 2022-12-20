const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const studentsGirls = students.filter((el) => el.slice(-1) === "а");
const studentsBoys = students.filter((el) => el.slice(-1) !== "а");
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

//Task 1
const getPairs = (studentsGirls, studentsBoys) => {
  let pairs = [];
  for (let i = 0; i < studentsGirls.length; i++) {
    pairs = [...pairs, [studentsGirls[i], studentsBoys[i]]];
  }
  return pairs;
};
const pairs = getPairs(studentsGirls, studentsBoys);
console.log("Pairs", pairs);

//Task 2
const getPairsAndThemes = (studentsGirls, studentsBoys, themes) => {
  let pairsAndThemesArr = [];
  for (let i = 0; i < studentsGirls.length; i++) {
    pairsAndThemesArr = [
      ...pairsAndThemesArr,
      [`${studentsGirls[i]} i ${studentsBoys[i]}`, themes[i]],
    ];
  }
  return pairsAndThemesArr;
};
const pairsAndThemesArr = getPairsAndThemes(
  studentsGirls,
  studentsBoys,
  themes
);
console.log("Pairs and Themes", pairsAndThemesArr);

//Task 3
const getSuccess = (students, marks) => {
  let studentsSuccess = [];
  for (let i = 0; i < students.length; i++) {
    studentsSuccess = [...studentsSuccess, [students[i], marks[i]]];
  }
  return studentsSuccess;
};
const studentsSuccess = getSuccess(students, marks);
console.log("Students and marks", studentsSuccess);

//Task 4
const getStudentsThemesAndMarks = (pairsAndThemesArr) => {
  const studentsThemesAndMarks = pairsAndThemesArr.map((el) => [
    ...el,
    Math.floor(Math.random() * 5 + 1),
  ]);
  return studentsThemesAndMarks;
};
const studentsThemesAndMarks = getStudentsThemesAndMarks(pairsAndThemesArr);
console.log("Pairs and Themes and Marks", studentsThemesAndMarks);
