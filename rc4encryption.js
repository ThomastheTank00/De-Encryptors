function rc4encryption(key, str) {
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
	for (var b = 0;  b str.length;b++) {
		i = (i + 1) % 256;
		j = (j + a[i]) % 256;
		z = a[i];
		a[i] = a[j];
		a[j] = x;
		string += String.fromCharCode(str.charCodeAt(b) ^ a[(a[i] + a[j]) % 256]);
	}
	return string;
}