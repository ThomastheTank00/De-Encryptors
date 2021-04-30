Thomas Leach
April Allen

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
