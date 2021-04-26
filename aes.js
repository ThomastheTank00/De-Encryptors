
let message = document.getElementById("message");  
let key= document.getElementById("key");
let enstr = "";
let destr = ""; 
function encrypt(){
    let encrypted = CryptoJS.AES.encrypt(message, key);
    enstr = enstr + encrypted;
    document.getElementById("encrypted").innerHTML = enstr;
}

function decrypt() {
    let decrypted = CryptoJS.AES.decrypt(encrypted, key);
    destr = destr + decrypted
    document.getElementById("decrypted").innerHTML = destr;
}

document.getElementById("enbtn").onclick=function(){
	encrypt();
}
	
document.getElementById("debtn").onclick=function(){
    decrypt();
}