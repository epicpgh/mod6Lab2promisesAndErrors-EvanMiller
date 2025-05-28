import{
    fetchProductCatalog, fetchProductReviews, fetchSalesReport
}

from "./apiSimulator";

async function runFetchReport(){
    try {
        const products = await fetchProductCatalog()
        console.log(products);
    } catch (error) {
        console.log(error);
    }}

    try {
        const reviews = fetchProductReviews
        console.log(reviews);
    } catch (error) {
        console.log(error);
    }

    try {
        const report = fetchSalesReport()
        console.log(report);
    } catch (error) {
        console.log(error);
    }
    

  
runFetchReport();



