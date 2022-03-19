const student = require("./information");

var cowsay = require("cowsay");
const { studentName, campus } = require("./information");

console.log(
  cowsay.say({
    text: `${student.studentName} from ${student.campus}`,
       e: "oO",
    T: "U ",
  })
);
