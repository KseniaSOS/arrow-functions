/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
  
  const oldEnough = people.filter(person => person.age >= 21);
  console.log(oldEnough);

//   выход будет массив, но если в елгце добавить [0], то будет только даанные, как объект.
// const paul = people.filter(p => p.name === "Paul");
//   console.log(paul);

const paul = people.filter(p => p.name === "Paul")[0];
console.log(paul);
  
  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

//  1-st Option
//  const hasStrongSkills = student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//     return strongSkills.length > 0;
//   };

//   const candidates = students.filter (hasStrongSkills);
//   console.log(candidates);

// 2-d Option. more clear
const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const candidates = students.filter (hasStrongSkills);
console.log(candidates);

const candidatesName = candidates.map(candidat => [candidat.name]);
console.log(candidatesName);
