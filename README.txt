Thomas Leach
April Allen
Kobe Culpepper
Wil Gray

script.js contains the following functions and runs one of the them depending upon the radio button choosena dn whether the Encrypt or Decrypt button is clicked on

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
