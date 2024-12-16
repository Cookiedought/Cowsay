require("dotenv").config();

const cowsay = require("cowsay");

const message = `Salut! Je m'appelle ${process.env.NAME} et j'étudie au campus de ${process.env.CAMPUS}.`;

console.log(
  cowsay.say({
    text: message,
    e: "oO",
    T: "U ",
  })
);
