let x;

let d = new Date();

x = d.getFullYear(); //get year

x = d.getMonth() + 1; //+1 to remove 0 based counting

x = d.getDate(); // Day of the month

x = d.getDay() // Day of the week

x  = d.getMinutes() //minutes

x = d.getSeconds() //seconds


x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// FORMAT DATE IN A LOCALE SENSITIVE WAY USING API (Intl.format)
x = Intl.DateTimeFormat('en-Us').format(d);
x = Intl.DateTimeFormat('default').format(d); //current location

// Short format (calling a method on your date object)
x = d.toLocaleString('default', {month: 'long'}); //get only month
x = d.toLocaleString('default', {Date: 'short'}); //get date and time

// Short format of date
x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric', // or numeric
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York'
})

console.log(x)