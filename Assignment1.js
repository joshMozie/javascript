const courseUnites = {
    english: 2,
    french: 1,
    mathematics: 4,
    physics: 4,
    chemistry: 4,
    biology: 3,
    workshop: 1,
    technicalDrawing: 1,
    humanities: 1,
}

const grades = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0,
}

const userGrades = {};

userGrades.english = prompt ("input English grade");

while ((userGrades.english !== "A") && (userGrades.english !== "B") && (userGrades.english !== "C") && (userGrades.english !== "D") && (userGrades.english !== "E") && (userGrades.english !== "F")) {
    userGrades.english = prompt ("incorrect grade value. please type in your appropriate grade in English");
}

userGrades.french = prompt ("input French grade");

while ((userGrades.french !== "A") && (userGrades.french !== "B") && (userGrades.french !== "C") && (userGrades.french !== "D") && (userGrades.french !== "E") && (userGrades.french !== "F")) {
    userGrades.french = prompt ("incorrect grade value. please type in your appropriate grade in French");
}

userGrades.mathematics = prompt ("input Mathematics grade");

while ((userGrades.mathematics !== "A") && (userGrades.mathematics !== "B") && (userGrades.mathematics !== "C") && (userGrades.mathematics !== "D") && (userGrades.mathematics !== "E") && (userGrades.mathematics !== "F")) {
    userGrades.mathematics = prompt ("incorrect grade value. please type in your appropriate grade in Mathematics");
}

userGrades.physics = prompt ("input Physics grade");

while ((userGrades.physics !== "A") && (userGrades.physics !== "B") && (userGrades.physics !== "C") && (userGrades.physics !== "D") && (userGrades.physics !== "E") && (userGrades.physics !== "F")) {
    userGrades.physics = prompt ("incorrect grade value. please type in your appropriate grade in Physics");
}

userGrades.chemistry = prompt ("input Chemistry grade");

while ((userGrades.chemistry !== "A") && (userGrades.chemistry !== "B") && (userGrades.chemistry !== "C") && (userGrades.chemistry !== "D") && (userGrades.chemistry !== "E") && (userGrades.chemistry !== "F")) {
    userGrades.chemistry = prompt ("incorrect grade value. please type in your appropriate grade in Chemistry");
}

userGrades.biology = prompt ("input Biology  grade");

while ((userGrades.biology !== "A") && (userGrades.biology !== "B") && (userGrades.biology !== "C") && (userGrades.biology !== "D") && (userGrades.biology !== "E") && (userGrades.biology !== "F")) {
    userGrades.biology = prompt ("incorrect grade value. please type in your appropriate grade in Biology");
}

userGrades.workshop = prompt ("input Workshop grade");

while ((userGrades.workshop !== "A") && (userGrades.workshop !== "B") && (userGrades.workshop !== "C") && (userGrades.workshop !== "D") && (userGrades.workshop !== "E") && (userGrades.workshop !== "F")) {
    userGrades.workshop = prompt ("incorrect grade value. please type in your appropriate grade in Workshop");
}

userGrades.technicalDrawing = prompt ("input Technical Drawing grades");

while ((userGrades.technicalDrawing !== "A") && (userGrades.technicalDrawing !== "B") && (userGrades.technicalDrawing !== "C") && (userGrades.technicalDrawing !== "D") && (userGrades.technicalDrawing !== "E") && (userGrades.technicalDrawing !== "F")) {
    userGrades.technicalDrawing = prompt ("incorrect grade value. please type in your appropriate grade in Technical Drawing");
}

userGrades.humanities = prompt ("input Humanities grade");

while ((userGrades.humanities !== "A") && (userGrades.humanities !== "B") && (userGrades.humanities !== "C") && (userGrades.humanities !== "D") && (userGrades.humanities !== "E") && (userGrades.humanities !== "F")) {
    userGrades.humanities = prompt ("incorrect grade value. please type in your appropriate grade in Humanities");
}

const englishScore = courseUnites.english * grades[userGrades.english];

const frenchScore = courseUnites.french * grades[userGrades.french];

const mathematicsScore = courseUnites.mathematics * grades[userGrades.mathematics];

const physicsScore = courseUnites.physics * grades[userGrades.physics];

const chemistryScore = courseUnites.chemistry * grades[userGrades.chemistry];

const biologyScore = courseUnites.biology * grades[userGrades.biology];

const workshopScor = courseUnites.workshop * grades[userGrades.workshop];

const technicalDrawingScore = courseUnites.technicalDrawing * grades[userGrades.technicalDrawing];

const humanitiesScore = courseUnites.humanities * grades[userGrades.humanities];

const totalScore = englishScore + frenchScore + mathematicsScore + physicsScore + chemistryScore + biologyScore + workshopScor + technicalDrawingScore + humanitiesScore;

const totalUnits = courseUnites.biology + courseUnites.chemistry + courseUnites.english + courseUnites.french + courseUnites.humanities + courseUnites.mathematics + courseUnites.physics + courseUnites.technicalDrawing + courseUnites.workshop;

const gpa = totalScore / totalUnits;

document.write(gpa);