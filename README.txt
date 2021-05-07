Thomas Leach
April Allen
Kobe Culpepper
Wil Gray
Daniel Cornett

website.html
The main webpage allows the user to input text as well as a key to encrypt and decrypt. The user can also chose how encrypt and encrypt their text by choosing between 6 different ciphers that can picked using radio buttons. Once a user has inputted their text, key if necessary, and chosen the cipher they can choose to encrypt or decrypt by clicking on the corresponding buttons. Once one of those buttons are clicked a progress bar starts that once complete the output is displayed in a corresponding box. There is also a help section that can be access through the help button that describes what each cipher does and what each can take in as input to be encrypted or decrypted in case the user is unsure which cipher to use.

style.css 
Body
Aligns text to the center
Background-color is changed to alice blue 
Div
Adds 1px solid black border
Changes font-size to large
Label
Bolds the labels of the web page
Increases font-size of labels
Button
Bolds buttons of the webpage 
#Label
Selects elements with id of "Label"
Bolds font and increases font size
#myProgress
Selects elements with id of "myProgress"
Sets width and changes background color
#myBar
Selects elements with id of "myBar"
Sets width, height, as well as background color
#encrypted1
Selects elements with id of "encrypted1"
Sets display: none in order to hide the results
Creates a solid black border of 1px
#decrypted1
Selects elements with id of "decrypted1"
Sets display: none in order to hide the results
Creates a solid black border of 1px


script.js 
contains the following functions and runs one of the them depending upon the radio button choosena dn whether the Encrypt or Decrypt button is clicked on

MONOALPHABETIC CIPHER

shuffledArr is created.
alphabetArr is created and filled with the alphabet.


A function named shuffle is created
This function will be used to shuffle the alphabet to use as its key.

shuffledArray is assigned to the extracted string from the array.
currentIndex is assigned to the number of the length of shuffledArray.
TemporaryValue and randomIndex are created
	
while currentIndex is not equal to 0 continue to loop
randomIndex is set to a random index using Math.random() to provide a random 
number between 0 and 1 multiplied by the currentIndex. Math.floor is then 
used to round down to a whole number.
currentIndex is then decremented.
		
temporary value is assigned to the current index we are working with
the currentIndex we are working with is assigned the random value
		


A function named cipher is created
This function will encrypt the given input using the key and then output the result.

shuffledArr is assigned a shuffled version of the alphabet.
This will serve as the key for the cipher
	
textArr is assigned the value that is within the textbox (the user input)
a for loop is created to iterate through the textArr.
if statement is used to skip spaces and newlines etc.
else the encrypted version of the user input is returned
The result is then shown to the user in the "result" box 


A function named decipher is created
This function will be used to decrypt data.

textArr is assigned the encrypted "result" user input
A for loop is created to iterate through this array
if statement is used to ignore unecessary characters.
else the encrypted array is decrpyted 

-----------------------------------------------------------------------------------------
HOMOPHONIC SUBSTITUTION

function encrypt(plaintext) is a function which reads user input, encrypts it, and returns the result as ciphertext when the user clicks the encrypt button.
the variable ciphertext is created
the variable plaintext is created and is linked to the HTML's textbox
the for loop within the encrypt function goes down the line, encrypting each letter by way of the substitution method which is specified in the alphabet declared later in the script.
ciphertext is returned as encrypted via Homophonic Substitution

function decrypt(ciphertext) does the opposite of function encrypt.
The user enters ciphertext which was encrypted with the same cipher, and the function decrypts it into plaintext.
The variable plaintext is linked to user's input via the textbox when this function is ran.
The for loop does the exact same thing as the encrypt function, but instead converts the ciphertext back into plaintext via the prescribed alphabet listed in an array later in the script.
plaintext is returned as decrypted user input

arr1 is an array of the regular plaintext alphabet.
arr2 is an array of the homophonic substitution cipher alphabet.

The onclick event links the encrypt and decrypt buttons within the website's html file to run the script's functions:
encrypt() is linked to "btn"
decrypt() is linked to "debtn"

----------------------------------------------------------------------------------------------------

RC4 
for (var i = 0; i < 256; i++) {
		a[i] = i;
initializes the array that has a charecter size of 256

j = (j + a[i] + key.charCodeAt(i % key.length)) % 256;
		z = a[i];
		a[i] = a[j];
		a[j] = z;
create the key scheduling algorithim wgere there are two varibales i and j. rearranges the arrays. 

i = 0;
	j = 0;
initializes i and j setting them = 0

for (var b = 0;  b str.length;b++) {
		i = (i + 1) % 256;
		j = (j + a[i]) % 256;
		z = a[i];
		a[i] = a[j];
		a[j] = x;
		string += String.fromCharCode(str.charCodeAt(b) ^ a[(a[i] + a[j]) % 256]);
	}
this reads the strings length and uses hte encryption key made earlier of 256 bytes to encrpyt the string

----------------------------------------------------------------------------------------------------

AES 
function aesEncrypt(message, key)
intializes variable enstr with an empty string
intializes encrypted variable and takes the message and key inputs of the function and runs them through the CryptoJS to encrypt
combines the empty string from enstr and encrypted then  assigns them back to the enstr variable
returns variable enstr

function aesDecrypt(message, key)
intializes variable destr with an empty string
intializes decrypted variable and takes the message and key inputs of the function and runs them through the CryptoJS to decrypt
takes the decrypted variable and put it back into narmal characters through the use of the .toString() and assigns it to the destr variable
returns variable enstr


----------------------------------------------------------------------------------------------------

AtBash
Loops through the input string checking whether or not it is a capital letter or not inversing the character in the alphabet ao a becomes z and z becomes a returning a string.
function atBash(inp)
Initializes variable arr1 set equal to an array full of characters and numbers
Initializes variable arr2 set equal to a reverse array of arr1  
Initializes variable output set equal to an empty string
for(let i = 0; i < inp.length; i++)
if(arr1.indexOf(inp.charAt(i) != -1))
Initializes variable pos setting equal to arr1.indexOf(inp.charAt(i))
Output is set equal to itself plus arr2[pos]
Else
Output is set it equal to itself plus inp.charAt(i)
Returns variable output


----------------------------------------------------------------------------------------------------

ROT Cipher
Takes a string input and moves each character up x times through the alphabet depending on the number of rot given by the user.
function ROT#(inputString)
Intializes variable string setting equal to an empty string
for(let i=0; i < str.length; i++)
if(((str.charCodeAt(i) >= #) && (str.charCodeAt(i) <= #)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= #)))
Variable string is set equal to itself plus String.fromCharCode(str.charCodeAt(i) + #)
else if (((str.charCodeAt(i) >= #) && (str.charCodeAt(i) <= #)) || ((str.charCodeAt(i) >= #) && (str.charCodeAt(i) <= #)))
Variable string is set equal to itself plus string += String.fromCharCode(str.charCodeAt(i) - #)
Else
Variable string is set equal to itself plus str.charAt(i)
Returns variable string


----------------------------------------------------------------------------------------------------

windod.addEventListener()
Each event listener is used to check what button the user clicked whether that be the help button or either encrypt or decrypt buttons, the cipher selected, the eod variable is set equal to a value based on which button was clicked, the Caesar number, a key, the user inputted message, and then calls the main function to run


----------------------------------------------------------------------------------------------------

function progressBar()
Displays element with id myBar
Initializes variable i to 0
If i == 0
Variable is set to equal 1
Initializes variable elem to equal the element with id myBar
Initializes variable width to equal 1
Initializes variable id to equal setInterval(frame, 10)
function frame()
If width is >= 100
clearInterval(id)
Variable i is set equal to 0
else
Iterate variable with +1
elem.style.width is set equal to variable width
if eod == “encrypt”
Display element with id encrypted1
else
Display element with id denrypted1


----------------------------------------------------------------------------------------------------

funtion main() 
runs on of the following funcition based on which radio button is selected and whether the Encrypt or Decrypt button is pressed then outputs the result 
