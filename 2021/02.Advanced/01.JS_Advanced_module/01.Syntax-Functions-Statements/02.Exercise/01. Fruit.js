function solve(fruit, weight, price){
    weight = weight/1000;
    console.log(`I need $${(weight*price)
        .toFixed(2)} to buy ${weight
            .toFixed(2)} kilograms ${fruit}.`)
}
// solve('orange', 2500, 1.80);
// solve('apple', 1563, 2.35);

