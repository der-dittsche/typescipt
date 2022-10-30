"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summery_1 = require("./Summery");
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
const summary = Summery_1.Summary.winsAnalysisWithHtmlReport("Man United");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
