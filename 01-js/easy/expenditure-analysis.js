/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
    // Check if the category already exists in the categoryTotals object
    if (categoryTotals.hasOwnProperty(transaction.category)) {
      // If it exists, add the transaction price to the existing total
      categoryTotals[transaction.category] += transaction.price;
    } else {
      // If it doesn't exist, initialize the category with the transaction price
      categoryTotals[transaction.category] = transaction.price;
    }
  });

  // Convert the categoryTotals object into an array of objects
  const result = Object.keys(categoryTotals).map(category => ({
    category: category,
    totalSpent: categoryTotals[category]
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
