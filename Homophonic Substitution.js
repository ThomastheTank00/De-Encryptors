function encrypt(plaintext){
    let arr1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let arr2 = ["D", "X", "S", "F", "Z", "E", "H", "C", "V", "I", "T", "P", "G", "A", "Q", "L", "K", "J", "R", "U", "O", "W", "M", "Y", "B", "N"];
    let ciphertext = "";
    for(let i=0; i < plaintext.length(); i++){
        if(plaintext.charCodeAt(i) >= 65 && plaintext.charCodeAt(i) <= 90){
            ciphertext += arr2[arr1.indexOf(plaintext.charAt(i))];
        }else if(plaintext.charCodeAt(i) >= 97 && plaintext.charCodeAt(i) <= 122){
            ciphertext += arr2[arr1.indexOf(plaintext.charAt(i))];
        }else{
            ciphertext += plaintext.charAt(i);
        }
    }
    return ciphertext
}

function decrypt(){
    for(let i=0; i < ciphertext.length(); i++){
        if(ciphertext.charCodeAt(i) >= 65 && ciphertext.charCodeAt(i) <= 90){
            plaintext += arr1[arr2.indexOf(ciphertext.charAt(i))];
        }else if(ciphertext.charCodeAt(i) >= 97 && ciphertext.charCodeAt(i) <= 122){
            plaintext += arr1[arr2.indexOf(ciphertext.charAt(i))];
        }else{
            plaintext += ciphertext.charAt(i);
        }
        return plaintext
}
}