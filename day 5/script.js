// JSON Object
const jsonData = {
    "fruits": ["apple", "banana", "orange"],
    "numbers": {"one": 1, "two": 2, "three": 3},
    "booleanValue": true
  };
  
  // Using for loop
  console.log("Using for loop:");
  for (let key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
      console.log(key, jsonData[key]);
    }
  }

 // Using for in loop
  console.log("\nUsing for...in loop:");
  for (let key in jsonData) {
    console.log(key, jsonData[key]);
  }
  
  // Using for of loop
  console.log("\nUsing for...of loop:");
  for (let value of Object.values(jsonData)) {
    console.log(value);
  }
  
  // Using forEach for arrays
  console.log("\nUsing forEach for arrays:");
  jsonData.fruits.forEach(fruit => {
    console.log(fruit);
  });


  // resume using json
  
  // JSON data
const resumeData = {
    "personalInformation": {
      "firstName": "S.Deepika",
      "lastName": "Shree",
      "address": "12 A West Raja Street, Big Kanchipuram",
      "phone": "84986***08",
      "email": "deepikashree0314@gmail.com"
    },
    "education": [
      {
        "degree": "Bachelor of computer science",
        "school": "SCSVMV University",
        "graduationYear": 2015
      }
    ],
    "experience": [
      {
        "position": "Teacher",
        "school": "Indu Matric School",
        "startDate": "2018",
        "endDate": "2020"
      }
    ],
    "skills": [
      "Programming languages: c, c++, JavaScript",
      "Web development: HTML, CSS, React",
      "Version control: Git",
      "Problem-solving and critical thinking"
    ],
    "languages": ["Tamil", "English"],
    "interests": ["Reading", "Traveling"]
  };
  
  console.log("Personal Information:");
  console.log(`Name: ${resumeData.personalInformation.firstName} ${resumeData.personalInformation.lastName}`);
  console.log(`Address: ${resumeData.personalInformation.address}`);
  console.log(`Phone: ${resumeData.personalInformation.phone}`);
  console.log(`Email: ${resumeData.personalInformation.email}\n`);
  console.log("Education:");
resumeData.education.forEach(edu => {
  console.log(`${edu.degree} from ${edu.school}, Graduated in ${edu.graduationYear}`);
});
console.log("");
console.log("Work Experience:");
resumeData.experience.forEach(exp => {
  console.log(`${exp.position} at ${exp.school}, ${exp.startDate} - ${exp.endDate}`);
});
console.log("");
console.log("Skills:");
resumeData.skills.forEach(skill => {
  console.log(`- ${skill}`);
});
console.log("");
console.log("Languages:");
resumeData.languages.forEach(language => {
  console.log(`- ${language}`);
});
console.log("");
console.log("Interests:");
resumeData.interests.forEach(interest => {
  console.log(`- ${interest}`);
});