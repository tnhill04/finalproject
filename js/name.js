// 2. In this JavaScript file, add a prompt dialog to capture input from the user and store it in a variable

var firstName = prompt("What is your first name?");

// 3. Add a second a prompt dialog to capture input from the user and store it in a second variable

var lastName = prompt("What is your last name?");

// 4. Create a third variable and which combines an uppercase version values in the two other variables separated by a space. For example, if the first two variables contain "sally" and "forth", this third variable should contain the string value "SALLY FORTH"

var completeName = firstName.toUpperCase() + ' ' + lastName.toUpperCase();


let html = `
  <h1>Welcome ${completeName}!</h1>

`;

document.querySelector('main').innerHTML = html;
