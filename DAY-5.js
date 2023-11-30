// create your own resume data in json format.

var resume = {
  my_Name: "sibichakkravarthy.k",
  Email: "sibichakkravarthy45@gmail.com",
  Date_of_birth: "12.08.1998",
  Gender: "Male",
  Nationality: "Indian",
  Marital_Status: "Single",
  Languages_known: ["English", "Tamil"],
  Age: 24,
  Marks: { "B.E": "CGPA 7", "Higher secondary": "87%", SSLC: "87%" },
  Qualification: "B.E Mechatronics",
  Years_of_Experience: 3,
  Software_proficiency: [
    "javascript",
    "HTML",
    "css",
    "Ms office",
  ],
  Key_strength: ["Fast Learning", "creative", "apdaptive"],
  Personal_hobbies: ["reading books", "singing "],
};

var resume_JSON_Format = JSON.stringify(resume);
console.log(resume_JSON_Format);

// For the given JSON iterate over all for loops (for, for in, for of, forEach)
var json_data = {
  my_Name: "sibichakkravarthy.k",
  Email: "sibichakkravarthy45@gmail.com",
  Date_of_birth: "12.08.1998",
  Gender: "Male",
  Nationality: "Indian",
  Marital_Status: "Single",
  Languages_known: ["English", "Tamil"],
  Age: 26,
  Marks: { "B.E": "CGPA 7", "Higher secondary": "87%", SSLC: "87%" },
  Qualification: "B.E Mechatronics",
};
const count = Object.keys(json_data);

// for loop
for (let i = 0; i < count.length; i++) {
  console.log(json_data[count[i]]);
}

// for in
for (let keys in json_data) {
  console.log(json_data[keys]);
}

// for Of
for (let i of count) {
  console.log(json_data[i]);
}

// for each
count.forEach(values);
function values(item) {
  console.log(json_data[item]);
}