let x;

x = 5 + "5" //gives 55

x = 5 + Number("5") //gives 10

x = 5 * "5" //gives 25

x = 5 + null; //Number

x = Number(null) //gives 0

x = Number(true) // 1 'Number'

x = Number(false) // 0 'Number'
 
x = 5 + true // 6 'Number'

x = 5 + false // 5 'Number'

console.log(x, typeof x)