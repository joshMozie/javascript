console.log("Hello World");

const usersDetails = {
    firstName: prompt ("type in first name"), lastName: prompt ("type in last name"), middleName: prompt ("type in middle name"), dateOfBirth: prompt ("type in date of birth"), maritalStatus: prompt ("type in marital status"), weight: prompt ("type in weight"), height: prompt ("type in height"), highestAcademicQualification: prompt ("type in highest academic qualification"), identificationNumber: prompt ("type in identification number"), age: prompt ("type in age"), ageClassification: ("open"),
}

if ((usersDetails.age >= 0) && (usersDetails.age <= 7)) {usersDetails.ageClassification = ("toddler");}

else if ((usersDetails.age >= 8) && (usersDetails.age <= 12)) {usersDetails.ageClassification = ("adolescent");}

else if ((usersDetails.age >= 13) && (usersDetails.age <= 19)) {usersDetails.ageClassification = ("teenager");}

else if ((usersDetails.age >= 20) && (usersDetails.age <= 25)) {usersDetails.ageClassification = ("baby adult");}

else if ((usersDetails.age >= 26) && (usersDetails.age <= 35)) {usersDetails.ageClassification = ("adult");}

else if ((usersDetails.age >= 36) && (usersDetails.age <= 55)) {usersDetails.ageClassification = ("midlife crises");}

else if (usersDetails.age >= 56) {usersDetails.ageClassification = ("ancestor");}

console.log(usersDetails);