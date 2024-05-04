"use strict";

/**
 * Decodes the email address.
 * @param {string} encodedString The encoded email address.
 * @returns {string} The decoded email address.
 */
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

/**
 * Encodes the email address.
 * @param {string} email The email address.
 * @returns {string} The encoded email address.
 */
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

/**
 * Extracts the key from the encoded string.
 * @param {string} encodedString The encoded string.
 * @returns {number} The key.
 * @private
 */
function extractKey(encodedString) {
	return parseInt(encodedString.substring(0, 2), 16);
}

/**
 * Generates a key for encoding.
 * @returns {[number, string]} The key and the key in hexadecimal format.
 * @private
 */
function generateKey() {
	const key = Math.floor(Math.random() * 256) + 1;
	return [key, hexEncode(key)];
}

/**
 * Encodes a number to hexadecimal format.
 * @param {number} str The number to encode.
 * @returns {string} The hexadecimal representation of the number.
 * @private
 */
function hexEncode(str) {
	return str.toString(16).padStart(2, "0");
}

module.exports = { decode, encode };
