var inputPlaintext;
var inputKey;
var selected;
var eod;
var caesarNumber
// TODO ADD MONO cipher 
window.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#enbtn").addEventListener("click", function () {
		selected = $('input[name="cipers"]:checked').val();
		if(document.getElementById("myfile").value == ""){
			eod = "encrypt";
			caesarNumber = document.getElementById("caesarNum").value;
			inputPlaintext = document.getElementById("message").value
			inputKey = document.getElementById("key").value;
			main();
		}
	});
});

window.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#debtn").addEventListener("click", function () {
		const cipherChoise = document.getElementsByName("cipers").value;
		if(document.getElementById("myfile").value == ""){
			eod = "decrypt";
			caesarNumber = document.getElementById("caesarNum").value;
			inputPlaintext = document.getElementById("message").value;
			inputKey = document.getElementById("key").value;
			main();
		}

	});
});

//CEASER
function ROT1 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 121)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 89)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 1);
    }
    else if(((str.charCodeAt(i) >= 122) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 90) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 25);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT2 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 120)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 88)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 2);
    }
    else if(((str.charCodeAt(i) >= 121) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 89) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 24);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT3 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 119)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 87)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 3);
    }
    else if(((str.charCodeAt(i) >= 120) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 88) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 23);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT4 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 118)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 86)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 4);
    }
    else if(((str.charCodeAt(i) >= 119) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 87) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 22);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT5 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 117)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 85)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 5);
    }
    else if(((str.charCodeAt(i) >= 118) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 86) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 21);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT6 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 116)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 84)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 6);
    }
    else if(((str.charCodeAt(i) >= 117) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 85) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 20);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT7 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 115)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 83)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 7);
    }
    else if(((str.charCodeAt(i) >= 116) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 84) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 19);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT8 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 114)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 82)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 8);
    }
    else if(((str.charCodeAt(i) >= 115) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 83) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 18);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT9 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 113)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 81)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 9);
    }
    else if(((str.charCodeAt(i) >= 114) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 82) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 17);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT10 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 112)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 80)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 10);
    }
    else if(((str.charCodeAt(i) >= 113) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 81) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 16);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT11 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 111)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 79)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 11);
    }
    else if(((str.charCodeAt(i) >= 112) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 80) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 15);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT12 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 110)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 78)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 12);
    }
    else if(((str.charCodeAt(i) >= 111) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 79) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 14);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT13 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 109)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 77)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 13);
    }
    else if(((str.charCodeAt(i) >= 110) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 78) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 13);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT14 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 108)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 76)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 14);
    }
    else if(((str.charCodeAt(i) >= 109) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 77) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 12);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT15 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 107)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 75)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 15);
    }
    else if(((str.charCodeAt(i) >= 108) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 76) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 11);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT16 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 106)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 74)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 16);
    }
    else if(((str.charCodeAt(i) >= 107) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 75) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 10);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT17 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 105)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 73)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 17);
    }
    else if(((str.charCodeAt(i) >= 106) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 74) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 9);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT18 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 104)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 72)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 18);
    }
    else if(((str.charCodeAt(i) >= 105) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 73) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 8);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT19 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 103)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 71)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 19);
    }
    else if(((str.charCodeAt(i) >= 104) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 72) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 7);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT20 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 102)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 70)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 20);
    }
    else if(((str.charCodeAt(i) >= 103) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 71) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 6);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT21 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 101)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 69)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 21);
    }
    else if(((str.charCodeAt(i) >= 102) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 70) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 5);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT22 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 100)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 68)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 22);
    }
    else if(((str.charCodeAt(i) >= 101) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 69) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 4);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT23 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 99)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 67)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 23);
    }
    else if(((str.charCodeAt(i) >= 100) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 68) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 3);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT24 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 98)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 66)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 24);
    }
    else if(((str.charCodeAt(i) >= 99) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 67) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 2);
    }
    else
    {
        string += str.charAt(i);
    }        
}
return string;
}


function ROT25 (str) {
	var string = "";
for(let i=0; i < str.length; i++){
    if(((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 97)) || ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 65)))
    {
        string += String.fromCharCode(str.charCodeAt(i) + 25);
    }
    else if (((str.charCodeAt(i) >= 98) && (str.charCodeAt(i) <= 122)) || ((str.charCodeAt(i) >= 66) && (str.charCodeAt(i) <= 90)))
    {
        string += String.fromCharCode(str.charCodeAt(i) - 1);
    }
    else
    {
        string += str.charAt(i)
    }        
}
return string;
}

// ATBASH
function AtBash(inp){


    let charlistUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let charlistUpperReverse = ['Z', "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
    let charlistLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let charlistLowerReverse = ['z', "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];
    
    let output = "";

    for(let i = 0; i < inp.length; i++){
        
        if((inp.charCodeAt(i) >= 65) && (inp.charCodeAt(i) <= 90)){
            pos = charlistUpper.indexOf(inp.charAt(i));
            output += charlistUpperReverse[pos];
        }else if(inp.charCodeAt(i) >= 97 && inp.charCodeAt(i) <= 122){ 
            pos = charlistLower.indexOf(inp.charAt(i));
            output += charlistLowerReverse[pos];

        }else{
            output += str.charAt(i);

        }
    
    }
    return output;
}

function AtBashDecrypt(inp){

    let charlistUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let charlistUpperReverse = ['Z', "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
    let charlistLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let charlistLowerReverse = ['z', "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];
    
    let output = "";

    for(let i = 0; i < inp.length; i++){
        
        if((inp.charCodeAt(i) >= 65) && (inp.charCodeAt(i) <= 90)){
            pos = charlistUpperReverse.indexOf(inp.charAt(i));
            output += charlistUpper[pos];
        }else if(inp.charCodeAt(i) >= 97 && inp.charCodeAt(i) <= 122){ 
            pos = charlistLowerReverse.indexOf(inp.charAt(i));
            output += charlistLower[pos];

        }else{
            output += str.charAt(i);

        }
    
    }
    return output;
}

//Homophonic
function homophonicEncrypt(plaintext){
    let arr1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	let arr2 = ["D", "X", "S", "F", "Z", "E", "H", "C", "V", "I", "T", "P", "G", "A", "Q", "L", "K", "J", "R", "U", "O", "W", "M", "Y", "B", "N"];
    let ciphertext = "";
    for(let i=0; i < plaintext.length; i++){
        if(plaintext.charCodeAt(i) >= 65 && plaintext.charCodeAt(i) <= 90){
            ciphertext += arr2[arr1.indexOf(plaintext.charAt(i))];
        //}else if(plaintext.charCodeAt(i) >= 97 && plaintext.charCodeAt(i) <= 122){
           // ciphertext += arr2[arr1.indexOf(plaintext.charAt(i))];
        }else{
            ciphertext += plaintext.charAt(i);
        }
    }
    return ciphertext;
}

function homophonicDecrypt(ciphertext){
	let arr1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	let arr2 = ["D", "X", "S", "F", "Z", "E", "H", "C", "V", "I", "T", "P", "G", "A", "Q", "L", "K", "J", "R", "U", "O", "W", "M", "Y", "B", "N"];
    let plaintext= "";
    for(let i=0; i < ciphertext.length; i++){
        if(ciphertext.charCodeAt(i) >= 65 && ciphertext.charCodeAt(i) <= 90){
            plaintext += arr1[arr2.indexOf(ciphertext.charAt(i))];
        //}else if(ciphertext.charCodeAt(i) >= 97 && ciphertext.charCodeAt(i) <= 122){
           // plaintext += arr1[arr2.indexOf(ciphertext.charAt(i))];
        }else{
            plaintext += ciphertext.charAt(i);
        }
    }   
    return plaintext;
}


// AES
function aesEncrypt(message, key){
	let enstr = "";
    let encrypted = CryptoJS.AES.encrypt(message, key);
    enstr = enstr + encrypted;
    return enstr;
}

function aesDecrypt(message, key) {
	let destr = ""; 
    let decrypted = CryptoJS.AES.decrypt(message, key);
    destr = decrypted.toString(CryptoJS.enc.Utf8);
    return destr;
}

//RC4
function rc4Encryption(key, str) {
	var a = [], j = 0, z, string = '';
	for (var i = 0; i < 256; i++) {
		a[i] = i;
	}
	for (i = 0; i < 256; i++) {
		j = (j + a[i] + key.charCodeAt(i % key.length)) % 256;
		z = a[i];
		a[i] = a[j];
		a[j] = z;
	}
	i = 0;
	j = 0;
	for (var b = 0;  b < str.length;b++) {
		i = (i + 1) % 256;
		j = (j + a[i]) % 256;
		z = a[i];
		a[i] = a[j];
		a[j] = z;
		string += String.fromCharCode(str.charCodeAt(b) ^ a[(a[i] + a[j]) % 256]);
	}
	return string;
}

//no work
var shuffledArr;
let alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function shuffle(array) {
	let shuffledArray = array.slice(0,array.length)
	var currentIndex = shuffledArray.length;
	var temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = shuffledArray[currentIndex];
		shuffledArray[currentIndex] = shuffledArray[randomIndex];
		shuffledArray[randomIndex] = temporaryValue;
	}

	return shuffledArray;
}

function monoEncrypt(textArr){
	shuffledArr = shuffle(alphabetArr);
	document.getElementById("key").innerHTML = shuffledArr.join().replace(/,/g, '')

	//var textArr = document.getElementById("textbox").value.split("");
	for(let k=0; k<textArr.length; k++){
		if ((textArr[k] == ' ') || (textArr[k] == '\t') || (textArr[k] == '\n' || alphabetArr.indexOf(textArr[k].toUpperCase())==-1)){
		continue;

		}else
			textArr[k]=shuffledArr[alphabetArr.indexOf(textArr[k].toUpperCase())];
		}
		return textArr.join().replace(/,/g, '')
}
	
	
	
function monoDecrypt(textArr){
	//var textArr = document.getElementById("result").value.split("");
	for(let k=0; k<textArr.length;k++){
		if ((textArr[k] == ' ') || (textArr[k] == '\t') || (textArr[k] == '\n' || alphabetArr.indexOf(textArr[k].toUpperCase())==-1)){
		continue;

		}else{	
			textArr[k]=alphabetArr[shuffledArr.indexOf(textArr[k].toUpperCase())];
		}
	}
	return textArr.join().replace(/,/g, '');
}

function main(){
	
	if(selected == "monoalphabetic"){
		if(eod == "encrypt"){
			document.getElementById("encrypted1").innerHTML = monoEncrypt(inputPlaintext);
		}else if(eod == "decrypt"){
			document.getElementById("decrypted1").innerHTML = monoDecrypt(inputPlaintext);
		}
	}
	if(selected == "caesar"){
		if(caesarNumber > 25){
			caesarNum = 25;
		}else if(caesarNumber < 1){
			caesarNumber = 1;
		}

		if(eod == "encrypt"){
			if(caesarNumber == 1){
				document.getElementById("encrypted1").innerHTML = ROT1(inputPlaintext);
			}else if(caesarNumber == 2){
				document.getElementById("encrypted1").innerHTML = ROT2(inputPlaintext);
			}else if(caesarNumber == 3){
				document.getElementById("encrypted1").innerHTML = ROT3(inputPlaintext);
			}else if(caesarNumber == 4){
				document.getElementById("encrypted1").innerHTML = ROT4(inputPlaintext);
			}else if(caesarNumber == 5){
				document.getElementById("encrypted1").innerHTML = ROT5(inputPlaintext);
			}else if(caesarNumber == 6){
				document.getElementById("encrypted1").innerHTML = ROT6(inputPlaintext);
			}else if(caesarNumber == 7){
				document.getElementById("encrypted1").innerHTML = ROT(inputPlaintext7);
			}else if(caesarNumber == 8){
				document.getElementById("encrypted1").innerHTML = ROT8(inputPlaintext);
			}else if(caesarNumber == 9){
				document.getElementById("encrypted1").innerHTML = ROT9(inputPlaintext);
			}else if(caesarNumber == 10){
				document.getElementById("encrypted1").innerHTML = ROT10(inputPlaintext);
			}else if(caesarNumber == 11){
				document.getElementById("encrypted1").innerHTML = ROT11(inputPlaintext);
			}else if(caesarNumber == 12){
				document.getElementById("encrypted1").innerHTML = ROT12(inputPlaintext);
			}else if(caesarNumber == 13){
				document.getElementById("encrypted1").innerHTML = ROT13(inputPlaintext);
			}else if(caesarNumber == 14){
				document.getElementById("encrypted1").innerHTML = ROT14(inputPlaintext);
			}else if(caesarNumber == 15){
				document.getElementById("encrypted1").innerHTML = ROT15(inputPlaintext);
			}else if(caesarNumber == 16){
				document.getElementById("encrypted1").innerHTML = ROT16(inputPlaintext);
			}else if(caesarNumber == 17){
				document.getElementById("encrypted1").innerHTML = ROT17(inputPlaintext);
			}else if(caesarNumber == 18){
				document.getElementById("encrypted1").innerHTML = ROT18(inputPlaintext);
			}else if(caesarNumber == 19){
				document.getElementById("encrypted1").innerHTML = ROT19(inputPlaintext);
			}else if(caesarNumber == 20){
				document.getElementById("encrypted1").innerHTML = ROT20(inputPlaintext);
			}else if(caesarNumber == 21){
				document.getElementById("encrypted1").innerHTML = ROT21(inputPlaintext);
			}else if(caesarNumber == 22){
				document.getElementById("encrypted1").innerHTML = ROT22(inputPlaintext);
			}else if(caesarNumber == 23){
				document.getElementById("encrypted1").innerHTML = ROT23(inputPlaintext);
			}else if(caesarNumber == 24){
				document.getElementById("encrypted1").innerHTML = ROT24(inputPlaintext);
			}else if(caesarNumber == 25){
				document.getElementById("encrypted1").innerHTML = ROT25(inputPlaintext);
			}
		}else if(eod == "decrypt"){
		
		}
	}
	if(selected == "atbash"){
		if(eod == "encrypt"){
			document.getElementById("encrypted1").innerHTML = AtBash(inputPlaintext);
		}else if(eod == "decrypt"){
			document.getElementById("decrypted1").innerHTML = AtBashDecrypt(inputPlaintext);
		}
	}
	if(selected == "homophonic"){
		if(eod == "encrypt"){
			document.getElementById("encrypted1").innerHTML = homophonicEncrypt(inputPlaintext);
		}else if(eod == "decrypt"){
			document.getElementById("decrypted1").innerHTML = homophonicDecrypt(inputPlaintext);
		}
	}
	if(selected == "aes"){
		if(eod == "encrypt"){
			document.getElementById("encrypted1").innerHTML = aesEncrypt(inputPlaintext, inputKey);
		}else if(eod == "decrypt"){
			document.getElementById("decrypted1").innerHTML = aesDecrypt(inputPlaintext, inputKey);
		}
	}
	if(selected == "rc4"){
		if(eod == "encrypt"){
			document.getElementById("encrypted1").innerHTML = rc4Encryption(inputKey, inputPlaintext);
		}else if(eod == "decrypt"){
			document.getElementById("decrypted1").innerHTML = rc4Encryption(inputKey, inputPlaintext);
		}
	}
}
