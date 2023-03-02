const slips = {
    slip_23: {
        transactions: [123, 456],
        shop: 1,
    },
    slip_42: {
        transactions: [789],
        shop: 2,
    },
};

const transactions = [
    {
        id: 123,
        amount: 10.01,
        payout: false,
    },
    {
        id: 456,
        amount: 5.01,
        payout: true,
    },
    {
        id: 789,
        amount: 20.1,
        payout: false,
    },
];

const shops = [
    [1, "Zalando.de"],
    [2, "Amazon.com"],
];

// Your task: Use the three data sources above and create the following result.
// Bonus: Try to write as few lines as possible for your solution

function restructure(slips, transactions, shops) {
    let result = {};
    for (const key in slips) {
        const value = slips[key];
        // RESTRUCTURE KEY NAME
        const newKeyName = key.replace(/slip_/g, "");
        const number_transactions = value.transactions.length;
        const shop = shops.find((item) => item.includes(value.shop))[1];

        let arr = [];
        for (const transacs_id of value.transactions) {
            const transaces = transactions.find((i) => i.id === transacs_id);
            arr.push(transaces.amount);
        }

        let total_amount = arr.reduce((a, b) => a - b);

        result[newKeyName] = { number_transactions, shop, total_amount };
    }
    return result;
}

const result = {
    23: {
        number_transactions: 2, // no of transactions per slip
        shop: "Zalando.de", // shop title
        total_amount: 5, // total amount of transactions (a payout must be subtracted instead of added!)
    },
    42: {
        number_transactions: 1,
        shop: "Amazon.com",
        total_amount: 20.1,
    },
};

console.log(restructure(slips, transactions, shops));
// console.log(result);
