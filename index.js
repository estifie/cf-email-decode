"use strict";



function decode(encodedString) {
	let email = "";
	const key = extractKey(encodedString);
	email = encodedString
		.substring(2)
		.match(/.{2}/g)
		.map((char) => String.fromCharCode(parseInt(char, 16) ^ key))
		.join("");

	return email;
}

function encode(email) {
	const [key, keyHex] = generateKey();
	const encodedString =
		keyHex +
		email
			.split("")
			.map((char) => hexEncode(char.charCodeAt(0) ^ key))
			.join("");
	return encodedString;
}

function extractKey(encodedString) {
	return parseInt(encodedString.substring(0, 2), 16);
}

function generateKey() {
	const key = Math.floor(Math.random() * 256);
	return [key, hexEncode(key)];
}

function hexEncode(str) {
	return str.toString(16).padStart(2, "0");
}

module.exports = { decode, encode };
