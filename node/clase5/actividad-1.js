"use strict";

const generatorRandomNumber = function (amount, max, min) {
  const randomNumbers = [];
  for (let i = 0; i < amount; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
};

const countOccurrencesObj = function (numbers) {
  const occurrences = {};

  for (const number of numbers) {
    occurrences[number] = (occurrences[number] || 0) + 1;
  }
  return occurrences;
};

const randomNumbers = generatorRandomNumber(10000, 20, 1);
const occurrences = countOccurrencesObj(randomNumbers);

console.log("Occurrences Object: ", occurrences);
