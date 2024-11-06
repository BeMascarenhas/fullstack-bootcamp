//var generateName = require('sillyname');

import generateName from "sillyName";
var sillyName = generateName();

import {randomSuperhero} from "superheroes";
var hero = randomSuperhero();

console.log(`My name is ${hero}.`);