LOOPING A TRIANGLE

for (var i = "#"; i.length < 8; i += "#" ) {
  console.log (i);
};

start with the variable i = #
continue to loop until the length of the variable is less than 8
after each iteration, add a # to the string.

FIZZBUZZ

for (var i = 0; i <= 100; i ++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if 
    (i % 3 === 0) {
    console.log("Fizz");
  }
  else if
    ( i % 5 === 0) {
    console.log ("Buzz");
  }
  else {  
    console.log(i);
  }
};

Start the for loop at 1 and go up to 100 increasing by 1 each time.
if the number is divisible by 3 AND 5 (modulo leaving a remainder of 0) print out "FizzBuzz"
otherwise if divisible by 3 only print "Fizz"
otherwise if divisible by 5 only print "Buzz"
otherwise print the number (i)


CHESS BOARD

var size = 8;
var line = "";

for (var x = 0; x < size; x++) {
  for (var y = 0; y < size; y++) {
    if ((x+y) % 2===0)
      line += " ";
    else 
        line += "#"
      }
  line += "\n";
}

console.log (line);


Build a table using nested loop.

declare variable size (number of rows / columns)
define the outer loop (hvertical dimension of table)
define the inner loop (horizontal rows)


if the position in the string is even, put a space
if the position in the string is odd, put a #

(declare this as a new variable called line)

exit the inner loop to get to the outer loop
each line is followed by a new line \n

print out the line  
