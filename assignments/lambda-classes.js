// CODE here for your Lambda Classes

class Person{
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}
class Instructor extends Person{
    constructor(instructorAtt){
        super(instructorAtt);
            this.favLanguage= instructorAtt.favLanguage;
            this.specialty = instructorAtt.specialty;
            this.catchPhrase =instructorAtt.catchPhrase;
    }
    demo(subject){
       return `Today we are learning about ${subject}`
    }
    grade( student , subject){
       return `${student.name} receives a perfect score on ${subject}`
    }
}
class Student extends Person{
    constructor(studentAtt){
        super(studentAtt);
        this.previousBackground = studentAtt.previousBackground;
        this.className = studentAtt.className;
        this.favSubjects = studentAtt.favSubjects;
        this.grade = studentAtt.grade;
    }
    listsSubjects() {
        return `${this.name}'s Favorite subjects are ${this.favSubjects}.`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduation() {
        if (this.grade >= 60) {
            return `${this.name} has graduated with a final grade of ${this.grade}!`;
        } else {
            let diff = 60 - this.grade;
            this.grade += diff;
            return `After a second chance, ${this.name} has 
            graduated with a grade of ${this.grade}!`;
        }
    }
}
class ProjectManager extends Instructor {
    constructor(managerAtt) {
        super(managerAtt);
        this.gradClassName = managerAtt.gradClassName;
        this.favInstructor = managerAtt.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
const Josh = new Instructor({
    name: "Josh",
    location: "Uganda",
    age: 137,
    gender: "Male",
    favLanguage: "JavaScript",
    specialty: "Fullstack",
    catchPhrase: `I am dead, coding no fun any more :P `
});
const Melinda = new ProjectManager({
    name: "Melinda",
    location: "Ukanda",
    age: 19,
    gender: "Female",
    gradClassName: "Web17"
    
});
const Md = new Student({
    name: "Md",
    location: "New York",
    age: 900,
    gender: "Male",
    favSubjects: ["Html", "Javascript"],
    grade: 100
});
console.log(Melinda.speak());
console.log(Melinda.gender);
console.log(Md.listsSubjects());
console.log(Melinda.debugsCode(Md, "Javascript"));
console.log(Josh.catchPhrase);
console.log(Melinda.standUp("Web17"));
console.log(Md.sprintChallenge("Javascript"));
console.log(Josh.speak());
console.log(Josh.demo("Javascript"));
console.log(Md.PRAssignment("JavaScript"));
console.log(Josh.grade(Md, "JavaScript"));
console.log(Md.graduation());


