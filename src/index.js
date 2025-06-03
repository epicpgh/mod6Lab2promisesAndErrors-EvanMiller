"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiSimulator_1 = require("./apiSimulator");
function runFetchReport() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield (0, apiSimulator_1.fetchProductCatalog)();
            console.log(products);
        }
        catch (error) {
            console.log(error);
        }
    });
}
try {
    const reviews = apiSimulator_1.fetchProductReviews;
    console.log(reviews);
}
catch (error) {
    console.log(error);
}
try {
    const report = (0, apiSimulator_1.fetchSalesReport)();
    console.log(report);
}
catch (error) {
    console.log(error);
}
runFetchReport();
