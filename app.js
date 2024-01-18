let lexicon = {
  name: "lexicon",
  students: [],
  enlistStudent: function (student) {
    this.students.push(student);
  },
  teachers: [],
};

let math = {
  name: "mathematics",
  students: [],
  teacher: {},
};

let english = {
  name: "english",
  students: [],
  teacher: {},
};

let physicalEd = {
  name: "physical education",
  students: [],
  addStudent: function (student) {
    this.students.push(student);
  },
  teacher: {},
  addTeacher: function (subject) {
    subject.teacher = this;
  },
};

let bo = {
  name: "Bo",
  age: 20,
  gender: "fluid",
  subjects: [],
};

let sven = {
  name: "Sven",
  age: 66,
  gender: "male",
  subjects: [],
};

let ada = {
  name: "Ada",
  age: 38,
  gender: "female",
  subjects: [],
};

let lucas = {
  name: "Lucas",
  age: 30,
  gender: "male",
  subjects: [],
};

let linda = {
  name: "Linda",
  age: 26,
  gender: "female",
  subjects: [],
};

let niklas = {
  name: "niklas",
  subjects: [],
  addSubject: function (subject) {
    this.subjects.push(subject);
    subject.teacher = this;
  },
};

let tomas = {
  name: "tomas",
  subjects: [],
};

niklas.subjects.push(physicalEd);
niklas.subjects.push(math);
tomas.subjects.push(english);

console.log(niklas);
console.log(tomas);

physicalEd.teacher = niklas;

console.log(physicalEd);
console.log(niklas);

function addSubjectToTeacher(subject, teacher) {
  subject.teacher = teacher;
  return teacher;
}

console.log(addSubjectToTeacher(math, niklas));

bo.quitSubject = function (subject) {
  this.subjects = this.subjects.filter((subj) => subj !== subject);
  subject.students = subject.students.filter((student) => student !== this);
};

niklas.removeTeacher = function (subject) {
  subject.teacher = {};
};

tomas.relegateStudent = function (student, subject) {
  subject.students = subject.students.filter((stud) => stud !== student);
};

tomas.fireTeacher = function (subject) {
  subject.teacher = {};
};

addSubjectToTeacher(math, niklas);
bo.quitSubject(english);
niklas.removeTeacher(english);
tomas.relegateStudent(bo, math);
tomas.fireTeacher(math);

console.log("Lexicon Object:", lexicon);
console.log("All Students:", displayAllStudents());
console.log("Subjects of Niklas:", displayAllSubjectsOfStudent(niklas));
console.log(
  "Students Enlisted to Physical Education:",
  displayAllStudentsEnlistedToSubject(physicalEd)
);
console.log("All Teachers:", displayAllTeachers());

lexicon.students = [bo, sven, ada, lucas, linda];
lexicon.teachers = [niklas, tomas];
addSubjectToTeacher(math, niklas);
addSubjectToTeacher(english, tomas);
addSubjectToTeacher(physicalEd, niklas);

function displayAllStudents() {
  let studentNames = [];
  for (let index in lexicon.students) {
    studentNames.push(lexicon.students[index].name);
  }
  return studentNames;
}

function displayAllSubjectsOfStudent(student) {
  let subjectNames = [];
  for (let index in student.subjects) {
    subjectNames.push(student.subjects[index].name);
  }
  return subjectNames;
}

function displayAllStudentsEnlistedToSubject(subject) {
  let studentNames = [];
  for (let index in subject.students) {
    studentNames.push(subject.students[index].name);
  }
  return studentNames;
}

function displayAllTeachers() {
  let teacherNames = [];
  for (let index in lexicon.teachers) {
    teacherNames.push(lexicon.teachers[index].name);
  }
  return teacherNames;
}

math.grade = "5";
physicalEd.grade = "4";
english.grade = "4";

console.log("School:", lexicon);
console.log("All Students:", displayAllStudents());
console.log("Subjects where Niklas is the teacher:", displayAllSubjectsOfStudent(niklas));
console.log(
  "Students enlisted to Physical Education:",
  displayAllStudentsEnlistedToSubject(physicalEd)
);
console.log("All Teachers:", displayAllTeachers());
