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


