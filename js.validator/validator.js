var userInput = prompt("What is your phone number? i.e. xxx-xxx-xxxx. I assure you this is not spam!")

alert(userInput.charAt(3) === '-' && userInput.charAt(7) === '-')

var userInput = prompt("What is your birthdate? i.e. xx/xx/xx")

alert(userInput.charAt(2) === '/' && userInput.charAt(5) === '/')

var userInput = prompt("What is your postal code? i.e. xxxxx or xxxxx-xxxx")

alert(userInput.isNaN !== true || userInput.charAt(5) === '-')

var userInput = prompt("What is your state abbreviation? i.e. CO. Your answer must be in all caps.")

alert(userInput.toLowerCase !== true && userInput.length === 2)

var userInput = prompt("Are you married? Yes or No")

alert(userInput == 'yes' || userInput == 'no')


