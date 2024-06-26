function solve(array, startStr, endStr) {
    let startIndex = array.indexOf(startStr);
    let endIndex = array.indexOf(endStr) + 1; // including
    return array.slice(startIndex, endIndex)
}

console.log(
    solve(
        [
            'Pumpkin Pie',
            'Key Lime Pie',
            'Cherry Pie',
            'Lemon Meringue Pie',
            'Sugar Cream Pie'],
        'Key Lime Pie',
        'Lemon Meringue Pie'
    ))
console.log(
    solve(
        [
            'Apple Crisp',
            'Mississippi Mud Pie',
            'Pot Pie',
            'Steak and Cheese Pie',
            'Butter Chicken Pie',
            'Smoked Fish Pie'
        ],
        'Pot Pie',
        'Smoked Fish Pie'
    ))
