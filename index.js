#!/usr/bin/env node

"use strict";

const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const questions = require("./src/data/data").questions;
const data = require("./src/data/data");
const logger = require("./src/utils/logs");




let commitType;

