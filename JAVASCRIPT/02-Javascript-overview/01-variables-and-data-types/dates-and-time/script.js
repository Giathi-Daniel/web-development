let d 

d = new Date();

// passing an argument
d = new Date(2004, 8, 20) // 0 -> January

// passing a string
d  = new Date('2004-09-09T12:00:00')
d  = new Date('09/09/2004 12:00:00')

d = new Date('2022-07-10') // If you start with the year, JS goes by a day off if TimeZone not set -> 09

d = new Date('04-05-2027')


// Timestamps
d = Date.now() //millisenconds

d = new Date('04-05-2027');
d = d.getTime(); //gives the exact time stamp of that date

d = new Date();
d = d.getTime(); // Time stamp dynamically changes as the time goes by

alert(d, typeof d) //an object because it is not a primitive data typr

