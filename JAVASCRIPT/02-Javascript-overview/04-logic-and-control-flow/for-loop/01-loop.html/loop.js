const todoList = [
    'make dinner',
    'wash dishes',
    'watch youtube'
];

todoList.forEach(item => {
    console.log(item)
    console.log(item.length)
    console.log(todoList.length)
});


// add items -> using accumulator pattern
const nums = [1, 2, 3]
let total = 0 // -> accumulator varibale

nums.forEach(num => {
    total += num
    console.log(total) 
})