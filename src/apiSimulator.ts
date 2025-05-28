export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
        ]);
        } else {
        reject("Failed to fetch product catalog");
        }
    }, 1000);
    });
};

export function fetchProductReviews(productId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const reviewsFailState = Math.random() < 0.5;
  
        if (reviewsFailState) {
          reject(`Failed to fetch reviews for product ID ${productId}`);
        } else {
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
                const shouldFail = Math.random() < 0.5; 
                if (shouldFail) {
                  reject(new Error('Failed to fetch sales report'));
                  return;
                }
          
                const Report = {
                  totalSales: 15890.75,
                  unitsSold: 473,
                  averagePrice: 33.59,
                };
          
                resolve(Report);
              }, 2000); 
            });
          }
            



