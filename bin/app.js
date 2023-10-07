#!/usr/bin/env node
import dataBuilder from "../src/cvsManager.js";
import fs from "fs";

// This file will run the program. Will call other modules to be executed here.
const path = "./resources/spotifyData.csv";
const data = fs.readFileSync(path, "utf-8");

// Get array of objects with all the data in CSV already processed.
const result = dataBuilder(data);
