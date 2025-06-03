"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductCatalog = void 0;
exports.fetchProductReviews = fetchProductReviews;
exports.fetchSalesReport = fetchSalesReport;
const errorClasses_1 = require("./errorClasses");
const fetchProductCatalog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            }
            else {
                reject(new errorClasses_1.NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};
exports.fetchProductCatalog = fetchProductCatalog;
function fetchProductReviews(productId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const reviewsFailState = Math.random() < 0.5;
            if (reviewsFailState) {
                reject(new errorClasses_1.NetworkError(`Failed to fetch reviews for product ID ${productId}`));
            }
            else {
                const reviews = [
                    { user: 'A', rating: 5, comment: 'Excellent!' },
                    { user: 'B', rating: 4, comment: 'Excellent!' },
                    { user: 'C', rating: 3, comment: 'Excellent!' },
                    { user: 'D', rating: 2, comment: 'Excellent!' },
                ];
                resolve(reviews);
            }
        }, 1500);
    });
}
function fetchSalesReport() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const reportFailState = Math.random() < 0.5;
            if (reportFailState) {
                reject(new errorClasses_1.DataError('Failed to fetch sales report'));
                return;
            }
            const report = {
                totalSales: 15000,
                unitsSold: 400,
                averagePrice: 40,
            };
            resolve(report);
        }, 2000);
    });
}
