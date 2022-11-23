// // chapter 1 (Alert) 

// // Task 1


// // Q 1. Write a script to greet your website visitor using JS alert box.

// alert("Welcome to our Website")

// // task 2
// // Q 2. Write a script to display following message on your web page:

// alert("Error! Please enter a valid Password");

// // task 3
// // Q 3. Write a script to display following message on your web page: (Hint : Use line break)

// alert("Welcome to JS Land...\nHappy Coding!")

// // task 4
// // 4. Write a script to display following messages in sequence:

// alert("Welcome to JS Land");
// alert("Happy Coding!");


// // task 5
// // 5. Generate the following message through browser’s developer console:

    // a = prompt("Enter Your Name");

    // alert("Hello... I can run JS through web browser's console");
    
    // document.write("<h1> WeLLCOME " +a.toUpperCase());

// task 6
// 6. Make use of alerts in your new/existing HTML & CSS
// project.

// alert("My First Project Web And Mobile App deveploment")




// chapter 2 (VARIABLES FOR STRINGS) 

// task 1

// Question 1 
// Declare a variable called username.

// var username;

// // task 2 
// // Q 2. Declare a variable called myName & assign to it a string that represents your Full Name.

// var myname = "Furqan Ali"

// // task 3
// // Q 3. Write script to
// // a) Declare a JS variable, titled message.
// // b) Assign “Hello World” to variable message
// // c) Display the message in alert box.

// var message;
// message = "Hello World";
// alert(message);

// // task 4
// // Q 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

// var fullname = "Furqan Ali Lashari";
// var age = 28;
// var DOB = '08-02-1993';
// alert("Name : " + myname + "\n" +"AGE : "+age +"\n"+"Date of birth: " + DOB);


// // task 5
// // Q 5. Write a script to display the following alert using one JS variable:

// window.alert("Pizza  \nPizz \nPiz  \nPi \nP")

// // task 6
// //Q 6 Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

// var email = "furqanali592@gmail.com";

// alert("My email address is " + email);

// // task 7
// // Q 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

// var book = "A smarter way to learn JavaScript";

// alert("I am trying to learn from the Book " + book);

// // task 8
// // Q 8. Write a script to display this in browser through JS

// var display = "Yah! I can write HTML content through JaveScript"
// document.write("<h1>" + display+ "</h1>");

// // task 9
// // Q 9. Store following string in a variable and show in alert and browser through JS


// alert("“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”")




// // chapter 3 (VARIABLES FOR NUMBERS)

// // task 1

// // 1. Declare a variable called age & assign to it your age. Show
// // your age in an alert box.

// var age=prompt("Enter Age");
// alert("I Am"+age+"Years Old");

// // task 2

// // 2. Declare & initialize a variable to keep track of how many
// // times a visitor has visited a web page. Show his/her
// // number of visits on your web page. For example: “You
// // have visited this site N times”.

// var visit = 13
// var newVisit = visit+1
// alert("You Have Visited This Site" + (visit+1) + "Time");

// // task 3

// // 3. Declare a variable called birthYear & assign to it your
// // birth year. Show the following message in your browser:

// var brith = parseInt(prompt("Enter value"));

// document.write("My Brith Year Is" + brith);
// document.write("<br>Data type of birth year" + typeof(brith) );

// // task 4

// // 4. A visitor visits an online clothing store
// // www.xyzClothing.com . Write a script to store in variables
// // the following information:
// // a. Visitor’s name
// // b. Product title
// // c. Quantity i.e. how many products a visitor wants to
// // order
// // Show the following message in your browser: “John
// // Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// var name = prompt ("")
// var title = prompt("")
// var qty = prompt("")

// document.write(name + "Order" + qty + "T-Shirt(s) on" + title +" Clothing Store");






// // chapter 4 (VARIABLE NAMES: LEGAL & ILLEGAL )

// // task 1

// // 1. Declare 3 variables in one statement.

// var a = 4, b = 6, c = 12

// // task 2 

// // 2. Declare 5 legal & 5 illegal variable names.

// // llegal variables

// var abc
// var abc_hello
// var $done
// var data1
// var data_he$

// // illegal variables

// var 1abc1
// var +abc_hello
// var 1$done
// var ?data1
// var %data_$he;

// task 3

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// document.write("<h1>Rules for naming JS variables</h1>");

// document.write("<br> Variable names can only contain,Numbers,$ and_.For example: $my_1stVariable");
// document.write("<br> Variables must begin with a Letter, $ or_ . For example $name, _name or name ");
// document.write("<br> Variable names are case Sensitive");
// document.write("<br> Variable names should not be JS Keywords")





// chapter 5 (MATH EXPRESSIONS)

// task 1

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// var inp1 = parseInt(prompt("Enter Number 1"))
// var inp2 = parseInt(prompt("Enter Number 2"))

// var sum = inp1+inp2

// document.write(" Sum Of " + inp1 + " and " + inp2 + " is " +sum);

// task 2


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// var inp1 = parseInt(prompt("Enter Number 1"))
// var inp2 = parseInt(prompt("Enter Number 2"))

// document.write("<br> Subraction : " + (inp1-inp2));
// document.write("<br>Multiplication :" + (inp1*inp2));
// document.write("<br>Division : " + (inp1/inp2));
// document.write("<br>Modulus : " + (inp1%inp2));

// task 3

// 3. Do the following using JS Mathematic Expressions

// a. Declare a variable.

// var value;

// b. Show the value of variable in your browser like �Value after variable declaration is: ??�. 

// document.write("Value after variable declaration is "+value);

// c. Initialize the variable with some number;

// var value = 5;

// d. Show the value of variable in your browser like �Initial value: 5�

// document.write("<br>Initial value: "+value);

// e. Increment the variable

// value++;

// f. Show the value of variable in your browser like �Value after increment is: 6�. 

// document.write("<br>Value after increment is: "+value);

//  Add 7 to the variable

// var addition = value + 7;

// h. Show the value of variable in your browser like �Value after addition is: 13�. 

// document.write("<br>Value after addition is: "+addition);

// i. Decrement the variable

// addition--;

// j. Show the value of variable in your browser like �Value after decrement is: 12�. 

// document.write("<br>Value after decrement is: "+addition);

// k. Show the remainder after dividing the variable�s value by 3. 

//  var reminder = addition%3;

 // l. Output : �The remainder is : 0�. 

//  document.write("<br>The reminder is "+reminder);


// task 4

// Q4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets?

// var tkprice = 600
// var tkpurchased = parseInt(prompt("How Much tickets"));

// document.write("Total cost to buy " + tkpurchased + " Tickets to a movie is " + tkpurchased*tkprice + "PKR");

// task 5


// Q5. Write a script to display multiplication table of any
// number in your browser. E.g


// var userinput = parseInt(prompt("Enter any table"));


//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*1 );
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*2);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*3);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*4);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*5);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*6);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*7);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*8);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*9);
//     document.write( "<br>" + userinput + "x" +1+ "=" + userinput*10);

// task 6

// Q6:  The Temperature Converter: It�s hot out! Let�s make a converter based on the steps here
 // a.  Store a Celsius temperature into a variable
 // b. Convert it to Fahrenheit & output �NNoC is NNoF�. 
 // c. Now store a Fahrenheit temperature into a variable. 
 // d. Convert it to Celsius & output �NNoF is NNoC�. 

//  var celcius = parseInt(prompt("Enter a number in celcius "));
//  var Fahrenheit = parseInt(prompt("Enter a number in fahrenheit "));

//  var celciusConvert = ((Fahrenheit - 32)*(5/9));
//  var fahrenDegree = ((celcius*(9/5)) + 32);

//  document.write("<br>" +celcius+ "F is "+ celciusConvert);
//  document.write("<br>" +Fahrenheit+"C is "+fahrenDegree);


// Q7: Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
 // a. Price of item 1 
 // b. Price of item 2 
 // c. Ordered quantity of item 1 
 // d. Ordered Quantity of item 2 
 // e. Shipping charges 

//  var item1 = parseInt(prompt("Enter the price of item 1:  "));
//  var item2 = parseInt(prompt("Enter the price of item 2:  "));
//  var quantityOfItem1 = parseInt(prompt("Enter the Quantity of item 1:  "));
//  var quantityOfItem2 = parseInt(prompt("Enter the Quantity of item 2:  "));
// var shippingCharges = 100;

//  var cost = ((item1*quantityOfItem1) + (item2*quantityOfItem2) + shippingCharges);
//  document.write("<br>Price of item 1 is "+item1)
//  document.write("<br>Quantity of item 1 "+quantityOfItem1)
//  document.write("<br>Price of item 2 is "+item2)
//  document.write("<br>Quantity of item 2 "+quantityOfItem2)
//  document.write("<br>Shipping charges is 100");
//  document.write("<br>Total cost of ypur order is "+cost);


// task 8

// Q8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


// var totalmark = 980
// var markobtained = parseInt(prompt("Enter Your Obtained Marks"));


// document.write("<br> Total Marks: " + totalmark + " ");
// document.write("<br> Marks Obtained: " + markobtained + " ");
// document.write("<br>percentage: " + (((totalmark = markobtained)) * 100 / 980) + "%");


// Q9:  Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 

// var moneyInDollar = parseInt(prompt("Enter money in dollar "));
// var saudiRiyal = parseInt(prompt("Enter money in Saudi riyal "));
// var pakistaniRupees = (moneyInDollar * 104.80) + (saudiRiyal * 28);

// document.write("<br>Total Currency in PKR : "+pakistaniRupees);

// Q10: Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression 

// var num = 25;
// document.write("<br>( "+num+ " + 5 * 10 / 2) = "+(num + 5 * 10 / 2));


// task 11

// Q11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// var currentyear = parseInt(prompt("Current Year"))
// var birthyear = parseInt(prompt("Birth Year"))

// document.write("<h1>Age Calculator</h1>");
// document.write("<br> Current Year " + currentyear + "<br> Birth Year " + birthyear + "<br> Your age is " +(currentyear-birthyear));


//Q12:  The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output �The circumference is NN�. (Hint : Circumference of a circle = 2 p r , p = 3.142) Calculate the area based on the radius, and output �The  area is NN�. (Hint : Area of a circle = p r2, p = 3.142) 

// var radiusOfCircle = parseInt(prompt("Enter radius of circle "));
// var PI = 3.142;

// document.write("<br>Radius of Circle is "+radiusOfCircle);
// document.write("<br> The Circumference is "+(2 * PI * radiusOfCircle));
// document.write("<br>The area is "+(PI * radiusOfCircle * radiusOfCircle));

//Q13:  The Lifetime Supply Calculator: Ever wonder how much a �lifetime supply� of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable
// c. Store a maximum age into a variable
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life

// var snack = prompt("Enter your favorite snack ");
// var age = parseInt(prompt("Enter your Current Age "));
// var maximumAge = parseInt(prompt("Enter your Maximum Age "));
// var amountPerDAy = parseInt(prompt("How much you can eat your favorite snack per day "));
// var total = (amountPerDAy * 365 * (maximumAge - age));

// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("<br>FAvorite Snack "+snack);
// document.write("<br>Current Age "+age);
// document.write("<br>Estimate Maximum Age "+maximumAge);
// document.write("<br>Amount of Snack per Day ");
// document.write("<br>you will need "+total+" chocolate chip to last you until the rip old age of "+maximumAge);




// chapter 6 to 9 (MATH EXPRESSIONS)

// task 1

// Q1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your browser:


//Declaration//


// var a = 10;
//  document.write("<h1>Result</h1>");
//  document.write("<br> The value of a is "+a);
//  document.write("<br>The value of ++a is "+ ++a);
//  document.write("<br>Now the value of a is "+a);
//  document.write("<br>The value of a++ is "+ a++);
//  document.write("<br>Now the value of a is "+a );
//  document.write("<br>The value of --a is "+ --a);
//  document.write("<br>Now the value of a is "+a);
//  document.write("<br>The value of a-- is "+ a--);
//  document.write("<br>Now the value of a is "+a);

//  task 2

 //Q2: What will be the output in variables a, b & result after execution of the following script: 
 
 
//  var a=2, b=1;
//  var result = --a - --b + ++b + b--; 
//             //1   - 0  + 1  + 1 //
// document.write("<br> a is "+a);
// document.write("<br> b is "+b);
// document.write("<br> Result is "+result);

// task 3

//Q3:  Write a program that takes input a name from user & greet the user?


// var myName = prompt("Enter your Name");

// document.write("<br>"+myName+" <br>WellCome<br> Hope you are fine.");

// if(myName=="")
    
//     alert("please enter your good name");


// task 4 

// 4.
//  Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var userinput= prompt("Enter your number");

// if(userinput==""){
// document.write(    "5" + "*" + 1 + "=" + 5*1 );
// document.write("<br>5" + "*" + 2 + "=" + 5*2);
// document.write("<br>5" + "*" + 3 + "=" + 5*3 );
// document.write("<br>5" + "*" + 4 + "=" + 5*4);
// document.write("<br>5" + "*" + 5 + "=" + 5*5);
// document.write("<br>5" + "*" + 6 + "=" + 5*6);
// document.write("<br>5" + "*" + 7 + "=" + 5*7);
// document.write("<br>5" + "*" + 8 + "=" + 5*8);
// document.write("<br>5" + "*" + 9 + "=" + 5*9);
// document.write("<br>5" + "*" + 10 + "=" + 5*10);
// }

// else
// {
//     document.write("<br>" + userinput + "*" +1+ "=" + userinput*1);
//     document.write("<br>" + userinput + "*" +2+ "=" + userinput*2);
//     document.write("<br>" + userinput + "*" +3+ "=" + userinput*3);
//     document.write("<br>" + userinput + "*" +4+ "=" + userinput*4);
//     document.write("<br>" + userinput + "*" +5+ "=" + userinput*5);
//     document.write("<br>" + userinput + "*" +6+ "=" + userinput*6);
//     document.write("<br>" + userinput + "*" +7+ "=" + userinput*7);
//     document.write("<br>" + userinput + "*" +8+ "=" + userinput*8);
//     document.write("<br>" + userinput + "*" +9+ "=" + userinput*9);
//     document.write("<br>" + userinput + "*" +10+ "=" + userinput*10);

//     }

    // task 5

//  5. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.


// var eng=parseInt(prompt("Enter English Marks"))

// if(eng>=0 && eng<=100){
//   var  urdu=parseInt(prompt("Enter Urdu Marks"))
//   if(urdu>=0 && urdu<=100){
//     var math = parseInt(prompt("Enter Urdu Marks"))
//     if(math>=0 && math<=100){
       

//         var eng_per = ((eng/100)*100).toFixed()
//         var urdu_per = ((urdu/100)*100).toFixed()
//         var math_per = ((math/100)*100).toFixed()

//         var sum = eng+urdu+math

//         var tper= (sum/300*100).toFixed()

//         document.write("<table>")
//         document.write("<tr><th> Subject </th>")
//         document.write("<th> Obtained Marks </th>")
//         document.write("<th> Total Marks </th>")
//         document.write("<th> sub Percentage </th>")
//         document.write("</tr>")

//         document.write("<tr><th> English </th>")
//         document.write("<th> "+ eng +" </th>")
//         document.write("<th> 100 </th>")
//         document.write("<th> " + eng_per +" % </th>")
//         document.write("</tr>")

//         document.write("<tr><th> Urdu </th>")
//         document.write("<th> "+ urdu +" </th>")
//         document.write("<th> 100 </th>")
//         document.write("<th> " + urdu_per +" %</th>")
//         document.write("</tr>")

//         document.write("<tr><th> Math </th>")
//         document.write("<th> "+ math +" </th>")
//         document.write("<th> 100 </th>")
//         document.write("<th> " + math_per + " %</th>")
//         document.write("</tr>")

//         document.write("<tr><th> </th>")
//         document.write("<th> " + sum + "</th>")
//         document.write("<th> 300 </th>")
//         document.write("<th> " + tper + " %</th>")
//         document.write("</tr>")

        

//     }
//     else{
//         document.write("You enter encorrect marks of Math")
//         alert("You enter encorrect marks of Math") 
//     }
//   }
//   else{
//     document.write("You enter encorrect marks of Urdu")
//     alert("You enter encorrect marks of Urdu")

//   }
// }
// else{
//     document.write("You enter encorrect marks of eng")
//     alert("You enter encorrect marks of eng")
// }




// chapter 9-11 (USER INPUT & CONDITIONAL STATEMENT)

// task 1

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var city = prompt("Enter Your City Name")

// if(city.toLocaleLowerCase()=="karachi"){

// document.write("Welcome to city of lights ")
// }
// else{
//     document.write("wellcome to the "+city);
// }


// task 2

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


// var gender = prompt("please Enter Your Gender")
 
// if(gender == 'male')
//   document.write("Good Morning Sir")

// if(gender == 'female')
//     document.write("Good Morning Ma'am")


// task 3

//Q3:  Write a program to take input color of road traffic signal from the user & show the message according to this table

// var signal_Color = prompt("Enter traffic color ");

// if(signal_Color == "red"){
//     document.write("Must Stop");
// }
// else if(signal_Color == "yellow"){
//     document.write("Ready to move");
// }
// else if(signal_Color == "green"){
//     document.write("Move Now");
// }

// task 4

// Q4:  Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” 

// var fuel = prompt("Enter fuel in litres ");
 
// if (fuel < 0.25){
//     document.write("<br> Please refill the fuel in your car ");
// }
// else{
//     document.write("<br> your car is ready to go sir!");
// }

    // task 5

    // 5. Run this script, & check whether alert message would be
    // displayed or not. Record the outputs.

//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

//  if("car" < "cat"){
// alert("car is smaller than cat");
// }

// task 6

//Q6  Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table

// var subject1_Marks =parseInt( prompt("Enter your first subject marks "));
// var subject2_Marks =parseInt( prompt("Enter your second subject marks "));
// var subject3_Marks =parseInt (prompt("Enter your third subject marks "));
// var obtainedMarks = (subject1_Marks + subject2_Marks + subject3_Marks) ;
// var percentage = (obtainedMarks / 300) * 100;
// if (percentage >= "90"){
//     document.write("<br> Total Marks 300");
//     document.write("<br> Marks Obtained: "+obtainedMarks);
//     document.write("<br> Percentage: "+percentage+"%");
//     document.write("<br> Grade A-One");
//     document.write("<br>Remarks:  Excellent");
// }
// else if (percentage >= "70"){
//     document.write("<br> Total Marks 300");
//     document.write("<br> Marks Obtained: "+obtainedMarks);
//     document.write("<br> Percentage: "+percentage+"%");
//     document.write("<br> Grade A");
//     document.write("<br>Remarks:  Good");
// }
// else if (percentage >= "55"){
//     document.write("<br> Total Marks 300");
//     document.write("<br> Marks Obtained: "+obtainedMarks);
//     document.write("<br> Percentage: "+percentage+"%");
//     document.write("<br> Grade B");
//     document.write("<br>Remarks:  You need to improve");
// }
// else if (percentage < "40"){
//     document.write("<br> Total Marks 300");
//     document.write("<br> Marks Obtained: "+obtainedMarks);
//     document.write("<br> Percentage: "+percentage+"%");
//     document.write("<br> Fail");
//     document.write("<br> Remarks: Sorry <br>");
// }

// task 7

//Q7: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 

// var secretNumber =parseInt (prompt("Enter any Random Number from 1-10: "));
// var guessNumber  = secretNumber +1; 
// if(guessNumber = secretNumber ){
//     document.write("<br> Bingo! Correct Answer");
// }
// else{
//     document.write("<br>“Close enough to the correct answer” ")
// }

// task 8

//Q8:  Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. 

// var givennumber =parseInt (prompt("Enter any number "));
// var dividednumber = (givennumber) 
// if(givennumber /=3){
//     document.write("<br>"+dividednumber+ " If the number is divisible by 3 Answer is "+givennumber);
// }
// else{
//     document.write("<br> Please Enter any Number");
// }

// task 9

//Q9 Write a program that checks whether the given input is an even number or an odd number

// var even =[]
// var odd=[]

// for(var j=0;j<2;j++){
//     var num1 = prompt("Enter Number") 
//     if(num1.length>0){
        
//         if(num1.charCodeAt(0)>=48 && num1.charCodeAt(0)<=57){
        
//             if(num1%2==0){
            
//                 document.write(num1+" is even number<br>" )
//             }
//             else{
                
//                 document.write(num1+" is odd number<br>")

//             }
//         }
//         else{
            
//             document.write("Enter Only number <br>")
//         }

//     }
//     else{
        
//         document.write("Value input must")
//     }
// }


// task 10

//Q10 Write a program that takes temperature as input and shows a message based on following criteria
//a)  T > 40 then “It is too hot outside.” 
// b)  T > 30 then “The Weather today is Normal.” 
//c)  T > 20 then “Today’s Weather is cool.” 
//d)  T > 10 then “OMG! Today’s weather is so Cool.” 

// var temperature = prompt("Enter temperature ");
// if(temperature > "40"){
//     document.write(" its too hot outside.");
// }
// else if(temperature > "30"){
//     document.write("The Weather today is Normal..");
// } 
// else if(temperature > "20"){
//     document.write("Today’s Weather is cool.");
// }
// else if(temperature > "10"){
//     document.write("OMG! Today’s weather is so Cool.");
// }

// task 11

//Q11 Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input

// var inputNumber1 = parseInt(prompt("Enter first number "));
// var inputNumber2 = parseInt(prompt("Enter second number "));
// var operator = prompt("Enter any operator ");

// if(operator == "+"){
//     var sum = inputNumber1 + inputNumber2;
//     document.write("<br>"+inputNumber1+" and "+inputNumber2+" = "+sum);
// }
// else if(operator = "-"){
//     var subtraction = inputNumber1 - inputNumber2;
//     document.write("<br>"+inputNumber1+" and "+inputNumber2+" = "+subtraction);
// }
// else if(operator = "/"){
//     var division = inputNumber1 / inputNumber2;
//     document.write("<br>"+inputNumber1+" and "+inputNumber2+" = "+division);
// }
// else if(operator = "*"){
//     var multiplication = inputNumber1 * inputNumber2;
//     document.write("<br>"+inputNumber1+" and "+inputNumber2+" = "+multiplication);
// }
// else if(operator = "%"){
//     var modulus = inputNumber1 % inputNumber2;
//     document.write("<br>"+inputNumber1+" and "+inputNumber2+" = "+mudulus);
// }






// Chapter 12 to 13    ( IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS )

//Q1:  Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


// task 1


// var inp = prompt("Enter your Character Of ASCII Code ")

// document.write(inp+" = "+inp.charCodeAt())


//Q2: Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// task 2

// var number1 = prompt("Enter first number ");
// var number2 = prompt("Enter second number ");

// if (number1 > number2){
//     document.write(number1+" is Greater than "+number2);
// }
// else if (number1 <  number2){
//     document.write(number1+" is Less than "+number2);
// }
// else if (number1 == number2){
//     document.write(number1+" is Equal to "+number2);
// }

//Q3:  Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


// task 3

// var numb1 = prompt("Enter number ");

// if (numb1 > 0){
//     document.write(numb1+" is Positive number");
// }
// else if (numb1 <  0){
//     document.write(numb1+" is Negative number");
// }
// else if (numb1 == 0){
//     document.write(numb1+" is Zero");
// }

//Q4:  Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// task 4

// var vowel = prompt("Enter String ");

// if((vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U") || (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u")){
//     document.write(vowel+" is a Vowel Letter");
// }
// else{
//     document.write(vowel+" is Consonent");
// }

//Q5:  Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// task 5

// var password = prompt("Enter your Password ");

// if(password == "SMIT HYDERABAD"){
//    alert("Correct!");
// }
// else if(password == ""){
//     alert("Please enter your password");
// }
// else{
//     alert("Incorrect password");
// }

//Q6:  This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else 
// greeting = "Good evening";
// }

// task 6

// var greeting;
//  var hour = 13;
// if (hour < 18) { 
//     alert("Good day");
// }
//  else{
//     alert("Good evening");
// }
  
//Q7:   Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// task 7 


// var time =parseInt (prompt("Enter time "));
// if(time>=5 && time<11,59){
//     alert("Good Morning!");
// }
// else if(time>=12 && time<17){
//     alert("Good afternoon!");
// }
// else if(time>=17 && time<21){
//     alert("Good evening!");
// }
// else if(time>=21 && time<4,59){
//     alert("Good night!");
// }







// (chapter 14 to 16) (ARRAYS) 

//Q1:  Declare an empty array using JS literal notation to store
// student names in future.

// task 1


// var studentsName = [];


// Q2:  Declare an empty array using JS object notation to store
// student names in future.

// task 2

//  var studentName = new Array();

 //Q3:  Declare and initialize a strings array.

//  task 3

// var arr = ["SMIT", "JAvascript", "Nodejs", "Express", "Mongodb"];

//Q4:  Declare and initialize a numbers array.

// task 4

// var numb = [2,4,6,8,10];

//Q5:  Declare and initialize a boolean array.

// task 5

// var booleanArray = [true, false];

//Q6: Declare and initialize a mixed array.

// task 6

// var mixedArray = ["Furqan", "Ali", 73768, true, false];

//Q7: . Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//     BS, BCOM, MS, M. Phil., PhD). Show the listed
//     qualifications in your browser like:

// task 7

// var Qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PHD"];
// document.write("<h1>Qualification</h1>");
// for(var i =0; i<Qualification.length; i++){
//     document.write("<br>"+Qualification[i]);
// }

//Q8: Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// task 8

// var students = [" Michael ", " John ", " Tony "];
// var score = [];
// for(var i=0; i<students.length; i++){
//     var data = prompt("Enter your marks ");
//     score.push(data);
//     var percentage = (data/500)*100;
//     document.write("<br>Score of"+students[i]+" is "+data+ " percentage is "+percentage+"%");
// }

//Q9: Initialize an array with color names. Display the array
// elements in your browser. 


 //a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser

//  var color = ["Red", "Green", "Blue", "Purple"];
//  var ask = prompt("Enter new color: ");
//  var store = color.unshift(ask);
// document.write("<br>"+color);

// //b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
// Display the updated array in your browser

// var add_last = prompt("Enter color in last: ");
// store = color.push(add_last);
// document.write("<br>"+color);

// //c. Add two more color to the beginning of the array. Display the updated array in your browser...

// for(var i=0; i<2; i++){
//     var addMore = prompt("Enter two More colors at the begining: ");
//     color.unshift(addMore);
// }
// document.write("<br>"+color);

// //d. Delete the first color in the array. Display the updated array in your browser...

// color.shift();
// document.write("<br>"+color);

// //e. Delete the last color in the array. Display the updated array in your browser...

// color.pop();
// document.write("<br>"+color);

// //f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser....

// var position = parseInt(prompt("At what index you want to Add color: "));
// var add = prompt("enter color: ");
// color.slice(position,1,add);
// document.write("<br>"+color);

// // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser....
// var index = parseInt(prompt("At what index you want to delete color: "));
// var howMany = parseInt(prompt("Enter how many element you want to delete "));

// color.splice(index,howMany);
// document.write("<br>"+color);


//Q10: Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// task 10

// var arr = [320, 230, 480, 120];
// document.write("scores of students "+arr);
// document.write("<br> Ordered Scores Of Students "+arr.sort());

//Q11: Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// task 11

// var city = ["karachi", "Lahore", "Islamabad", "Quetta", "peshawer"];
// var selected = ["Islamabad", "Quetta", "Karachi"];
// document.write("<br> <h1>cities list:</h1>\n "+city);
// document.write("<br> <h1>Selected city:</h1>\n"+selected);

// Q12: Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// task 12

// var arr2 = [" This ", " is ", " my ", " cat "];
// var result = arr2.join("");
// document.write("<br> <h1>Array:</h1>\n"+arr2);
// document.write("<br> <h1>String:</h1>\n"+result);

//Q13: Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// task 13

// var device = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<h1> Device </h1>"+device)
// for(var i=0; i<device.length; i++){
//     var out = (device[i]);
    
//     document.write("<h1> out </h1>"+out);
// }

//Q14: Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In First Out)

// task 14

// var device = [" keyboard "," mouse ", " printer ", " monitor "];
// document.write("<h1> Device </h1>"+device)
// device.reverse()
// for(var i=0; i<device.length; i++){
    
//     var out = (device[i]);
    
//     document.write("<h1> out </h1>"+out);
// }


//Q15: Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

// task 15

// var mobiles = ["Apple", "Samsung", "Motorola" , "Nokia", "Sony", "Haier"];
// document.write("<br><select>");
// for(var i =0; i<mobiles.length; i++){
//     document.write("<option>"+mobiles[i]+ "</option>");
// }
// document.write("<br></select>");
