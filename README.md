# School - Practice Using Objects in JS

This assignment aims to create different types of object literals (referred to as OBJECTS for simplicity in the future). You will be creating a school, which will contain teachers instructing courses taken by students. Various objects with different types of data and functions will be created to enable interaction between these objects. The JavaScript file may become quite lengthy, but embrace it as part of the learning process. Remember to declare all variables at the top of the file for them to be accessible throughout the code below. The exercise is primarily designed to help you get accustomed to syntax and understand the strengths of objects. It also serves as a natural preparation for object-oriented programming.

## Getting Started

### 1. Creating School Object ✅

Start by creating a school as an object. The object should be stored inside a variable named after the school's name for simplicity. The school should have properties such as name, address, zipcode, city, students (initialized as an empty array), and teachers (initialized as an empty array).

**Solution:**
```js
let lexicon = {
    name: "lexicon",
    students: [],
    teachers: [],
};
```


### 2. Creating Subject Objects ✅

Create three different subjects, where each subject is an object with a variable corresponding to the subject's name. Properties should include name, students (initialized as an empty array), and teacher (initialized as an empty object). For example:

```javascript
let mathematics = {/*subject properties here*/};
```
**Solution:**
```js
let math = {
    name: "mathematics",
    students: [],
    teacher: {}
}
let english = {
    name: "english",
    students: [],
    teacher: {}
}
let physicalEd = {
    name: "physical education",
    students: [],
    teacher: {}
}
```

### 3. Creating Student Objects ✅

Create five students, with the student's name as the variable. Properties should include name, age, gender, and subjects (initialized as an empty array).\
**Solution:**
```js
let bo = {
    name: "Bo",
    age: 20,
    gender: "fluid",
    subjects: []
}

let sven = {
    name: "Sven",
    age: 66,
    gender: "male",
    subjects: []
}

let ada = {
    name: "Ada",
    age: 38,
    gender: "female",
    subjects: []
}

let lucas = {
    name: "Lucas",
    age: 30,
    gender: "male",
    subjects: []
}

let linda = {
    name: "Linda",
    age: 26,
    gender: "female",
    subjects: []
}
```

### 4. Creating Teacher Objects ✅

Create two teachers with the name as the variable, and properties name and subjects (initialized as an empty array).\
**Solution:**
```js
let niklas={
    name: "niklas",
    subjects: []
}
let tomas={
    name: "tomas",
    subjects: []
}
```

## Connecting Subjects and Teachers 

### 5. Connecting Subjects and Teachers ✅

Write a code line where you add a subject to a teacher's array of subjects using either push() or unshift(). Remember the difference between the two. Print both the teacher and the selected subject in the console and inspect them. Consider how this data could be useful from an admin's perspective in a school. Do you think it's complete, or is something missing?\
**Solution:**
```js
niklas.subjects.push(physicalEd)
niklas.subjects.push(math)
tomas.subjects.push(english)

node app.js 
{
  name: 'niklas',
  subjects: [
    { name: 'physical education', students: [], teacher: {} },
    { name: 'mathematics', students: [], teacher: {} }
  ]
}
{
  name: 'tomas',
  subjects: [ { name: 'english', students: [], teacher: {} } ]
}
```

### 6. Creating Connection Function ✅

To address the issues in the previous tasks, you should establish a connection in both objects. In other words, start by adding a subject to a teacher's array of subjects, and then replace the empty teacher object in the subject with the actual teacher. This creates a reference on both sides. This situation is known as a circular reference, something typically avoided in programming, but for this exercise, it's acceptable.

Now, create a function named `addSubjectToTeacher` that takes a subject and a teacher as parameters and associates them. Return the teacher to observe the change in the teacher's array of subjects.\
**Solution:**
```js
function addSubjectToTeacher(subject, teacher){
subject.teacher = teacher;
return teacher;
}

console.log(addSubjectToTeacher(math, niklas))

$ node app.js
<ref *1> {
  name: 'niklas',
  subjects: [
    {
      name: 'physical education',
      students: [],
      teacher: [Circular *1]
    },
    { name: 'mathematics', students: [], teacher: [Circular *1] }
  ]
}
```

### 7. Object Methods ✅

Why have a standalone function to add a subject to a teacher? Why not just add a method (a function associated with a specific object) to the teacher's object? For example:

```javascript
let niklas = {
    name: "niklas",
    subjects: [],
    addSubject: function(subject) {/*Logic here*/}
};

// or

niklas.addSubject = function(subject) {/*Logic here*/};
niklas.addSubject(mathematics); // Test it in the console!
```

Create the following methods (some methods may appear multiple times with different logic) and place them in the appropriate object: `addTeacher`, `enlistToSubject`, `addStudent`, `addSubject`.

**Solution:**
```js
let niklas={
    name: "niklas",
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject);
        subject.teacher = this;
    }
}
let physicalEd = {
    name: "physical education",
    students: [],
    addStudent: function (student) {
        this.students.push(student);},   
    teacher: {},
    addTeacher: function (subject) {
        subject.teacher = this;}
}
let lexicon = {
    name: "lexicon",
    students: [],
    enlistStudent: function (student) {
        this.students.push(student);},
    teachers: [], 
};
```

### 8. Additional Methods ✅

Create more methods: `quitSubject`, `removeTeacher`, `relegateStudent`, `fireTeacher`. In which objects do these methods belong? If, for example, you fire a teacher, you need to remove the teacher's connection with the school and the subject(s) they teach. 

**Solution:**
```js
bo.quitSubject = function (subject) {
    this.subjects = this.subjects.filter(subj => subj !== subject);
    subject.students = subject.students.filter(student => student !== this);
  };
  
  niklas.removeTeacher = function (subject) {
    subject.teacher = {};
  };
  
  tomas.relegateStudent = function (student, subject) {
    subject.students = subject.students.filter(stud => stud !== student);
  };
  
  tomas.fireTeacher = function (subject) {
    subject.teacher = {};
  };
  
```

### 9. Testing Methods ✅

Play around with these methods. 

**Solution:**
```js
addSubjectToTeacher(math, niklas); 
bo.quitSubject(english);
niklas.removeTeacher(english);
tomas.relegateStudent(bo, math);
tomas.fireTeacher(math);
```

### 10. Initialization Logic ✅

Now, let's build on that. To avoid having to call numerous methods in the console when restarting the program (which happens every time you edit the script file), you can create logic at the bottom of the script file (meaning the code is read last every time) to connect some students to the school, some subjects to the students, and some teachers to the subjects, and so on. Implement this logic now.

**Solution:**
```js
lexicon.students = [bo, sven, ada, lucas, linda];
lexicon.teachers = [niklas, tomas];
addSubjectToTeacher(math, niklas);
addSubjectToTeacher(english, tomas);
addSubjectToTeacher(physicalEd, niklas);
```

### 11. Display Functions ✅

Create a function (Note: a standalone function), `displayAllStudents`, that iterates through all the school's students using a for-loop. Note that a regular for..of loop won't work here (why?). You must use a for..in loop, which lets you iterate through an object's properties (also called keys) and thus access all the properties' values. Syntax:

```javascript
for(keys in lexicon.students) {/*logic to print out students*/};
```
Now create more functions: `displayAllSubjectsOfStudent(student)`, `displayAllStudentsEnlistedToSubject(subject)`, `displayAllTeachers`. Each function should have a return value.

**Solution:**
```js
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
```

### 12. Introducing Grades ✅

Expand the system by adding another type of object - objects related to grades. What properties should these have? What methods might be needed in these grade objects? How should the relationship between these objects be? What methods should exist in the other types of objects that deal with grades? Try to solve this and inspect and experiment with it in the console.

**Solution:**
```js
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

// Output:
// All Students: [ 'Bo', 'Sven', 'Ada', 'Lucas', 'Linda' ]
// Subjects where Niklas is the teacher: [ 'physical education', 'mathematics' ]
// Students enlisted to Physical Education: []
// All Teachers: [ 'niklas', 'tomas' ]
// 
// School: {
//   name: 'lexicon',
//   students: [
//     {
//       name: 'Bo',
//       age: 20,
//       gender: 'fluid',
//       subjects: [],
//       quitSubject: [Function (anonymous)]
//     },
//     { name: 'Sven', age: 66, gender: 'male', subjects: [] },
//     { name: 'Ada', age: 38, gender: 'female', subjects: [] },
//     { name: 'Lucas', age: 30, gender: 'male', subjects: [] },
//     { name: 'Linda', age: 26, gender: 'female', subjects: [] }
//   ],
//   enlistStudent: [Function: enlistStudent],
//   teachers: [
//     {
//       name: 'niklas',
//       subjects: [Array],
//       addSubject: [Function: addSubject],
//       removeTeacher: [Function (anonymous)]
//     },
//     {
//       name: 'tomas',
//       subjects: [Array],
//       relegateStudent: [Function (anonymous)],
//       fireTeacher: [Function (anonymous)]
//     }
//   ]
// }
// All Students: [ 'Bo', 'Sven', 'Ada', 'Lucas', 'Linda' ]
// Subjects where Niklas is the teacher: [ 'physical education', 'mathematics' ]
// Students enlisted to Physical Education: []
// All Teachers: [ 'niklas', 'tomas' ]
```
