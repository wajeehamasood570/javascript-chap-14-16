// Chapter 14-16
// Arrays

// 1. Declare an empty array using JS literal notation to store student names in future.
// var s_names = [];


// 2. Declare an empty array using JS object notation to store student names in future.
// var s_names = [];


// 3. Declare and initialize a strings array.
// var name = ["wajeeha","fatima"];


// 4. Declare and initialize a numbers array.
// var number = [21,54,65];


// 5. Declare and initialize a boolean array.
// var bool = ["True,False"];


// 6. Declare and initialize a mixed array.
// var mix = ["54,"abc",47,"True"];


// 7. Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS,BS, BCOM, MS, M. Phil., PhD).
// var qual = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h1>");
// document.write("Qualifications");
// document.write("</h1>");
// document.write("<br>");
// document.write("<br>");
// document.write("1)" + " " + qual[0]);
// document.write("<br>");
// document.write("2)" + " " + qual[1]);
// document.write("<br>");
// document.write("2)" + " " + qual[2]);
// document.write("<br>");
// document.write("3)" + " " + qual[3]);
// document.write("<br>");
// document.write("4)" + " " + qual[4]);
// document.write("<br>");
// document.write("5)" + " " + qual[5]);
// document.write("<br>");
// document.write("6)" + " " + qual[6]);
// document.write("<br>");
// document.write("7)" + " " + qual[7]);
// document.write("<br>");


// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:
// var names = ["bilal" , "ali", "ahad"];
// var marks = [450, 400, 480];
// var total_marks = 500;
// var per1 = (marks[0]*100)/total_marks;
// var per2 = (marks[1]*100)/total_marks;
// var per3 = (marks[2]*100)/total_marks;
// document.write("Score of " + names[0] + " is " + marks[0] +". " + " Percentage : " + per1 + " %" );
// document.write("<br>");
// document.write("Score of " + names[1] + " is " + marks[1] +". " + " Percentage : " + per2 + " %");
// document.write("<br>");
// document.write("Score  of " + names[2] + " is " + marks[2] +". " + " Percentage : " + per3 + " %" );
// document.write("<br>");

// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var color = ["blue", "red" , "orange", "yellow", "green"];
// alert("Colors name:  " + color);
// var add = prompt("enter a color you want in the begining");
// color.unshift(add);    
// document.write("Colors name:  " + color);


// var color = ["blue", "red" , "orange", "yellow", "green"];
// alert("Colors name:  " + color);
// var add = prompt("enter a color you want in the begining");
// color.push(add);    
// document.write("Colors name:  " + color);


// var color = ["blue", "red" , "orange", "yellow", "green"];
// alert("Colors name:  " + color);
// var add = prompt("enter any two colors you want in the begining");
// color.unshift(add);    
// document.write("Colors name:  " + color);


// var color = ["blue", "red" , "orange", "yellow", "green"];
// alert("Colors name:  " + color);
// color.shift();    
// document.write("Colors name:  " + color);


// var color = ["blue", "red" , "orange", "yellow", "green"];
// alert("Colors name:  " + color);
// color.pop();    
// document.write("Colors name:  " + color);


// var color = ["blue", "red" , "orange", "yellow", "green"];
// alert("Colors name:  " + color);
// var add = prompt("enter a color you want to add");
// var index = prompt("at which position you want to insert: ");
// color.splice(index, 0 , add);    
// document.write("Colors name:  " + color);

// var color = ["blue", "red" , "orange", "yellow", "green"];
// alert("Colors name:  " + color);
// var index = prompt("at which position you want to delete: ");
// var del = prompt("how many color you want to delete");
// color.splice(index, del);    
// document.write("Colors name:  " + color);


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


// var std_score = [40, 100, 1, 5, 25, 10];
// std_score.sort(function(a, b){return a - b});
// document.write(std_score);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var city = ["karachi", "islamabad" , "hyderabad", "lahore", "quetta"];
// var slec = city.splice(1,3);
// document.write("Selected city: " + slec);


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This ", "is ", "my ", "cat"];
// document.write(arr[0] + arr[1] + arr[2] + arr[3] );

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var devices = ["keyboard ", "Mouse ", "Monitor ", "CPU "];
// document.write("<h1>");
// document.write("devices are: ");
// document.write("</h1>");
// document.write(devices[0]);
// document.write("<br>");
// document.write(devices[1]);
// document.write("<br>");
// document.write(devices[2]);
// document.write("<br>");
// document.write(devices[3]);
// document.write("<br>");
// document.write("<br>");
// devices.shift();
// document.write("<h1>");
// document.write("Out");
// document.write("</h1>");
// document.write(devices);
// document.write("<br>");


// devices.shift();
// document.write("<h1>");
// document.write("Out");
// document.write("</h1>");
// document.write(devices);

// devices.shift();
// document.write("<h1>");
// document.write("Out");
// document.write("</h1>");
// document.write(devices);

// devices.shift();
// document.write("<h1>");
// document.write("Out");
// document.write("</h1>");
// document.write(devices);


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// var devices = ["keyboard ", "Mouse ", "Monitor ", "CPU "];
// document.write("<h1>");
// document.write("devices are: ");
// document.write("</h1>");
// document.write(devices[0]);
// document.write("<br>");
// document.write(devices[1]);
// document.write("<br>");
// document.write(devices[2]);
// document.write("<br>");
// document.write(devices[3]);
// document.write("<br>");
// document.write("<br>");
// devices.pop();
// document.write("<h1>");
// document.write("Out");
// document.write("</h1>");
// document.write(devices);
// document.write("<br>");


// devices.pop();
// document.write("<h1>");
// document.write("Out");
// document.write("</h1>");
// document.write(devices);

// devices.pop();
// document.write("<h1>");
// document.write("Out");
// document.write("</h1>");
// document.write(devices);

// devices.pop();
// document.write("<h1>");
// document.write("Out");
// document.write("</h1>");
// document.write(devices);


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:


var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
document.write('<select>
    <option>${phone[0]}</option>
    <option>${Apple}</option>
    <option>Apple</option>
    <option>Apple</option>
    </select>')