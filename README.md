# cf-email-reader

## Description

Email addresses on some websites are obfuscated by Cloudflare's Email Address Obfuscation Technique to prevent bots from scraping them while keeping them visible to humans. Any text that has been obfuscated using this method may be deobfuscated and returned to a human-readable format with the use of the `cf-email-decoder` module.

The encoded text is contained in HTML elements tagged with Cloudflare's email obfuscation attributes.
Examples of encoded texts are shown below.

```html
<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="8be8e4e5ecf9eafff8a7abf2e4feabede4fee5efabeae5abeeeaf8ffeef9abeeececaa">[email protected]</a>

<a href="/cdn-cgi/l/email-protection#43263b222e332f2603263b222e332f266d202c2e"></a>
```

## Usage

To decode an encoded email address:

```javascript
const { decode } = require("cf-email-decoder");

const decodedEmail = decode("43263b222e332f2603263b222e332f266d202c2e");
console.log(decodedEmail);
```

To encode an email address:

```javascript
const { encode } = require("cf-email-decoder");

const encodedEmail = encode("email@example.com");
console.log(encodedEmail);
```

## Encoding and Decoding Process

Caution: This algorithm is not suitable for cryptographic purposes as it is reversible. 
It is a basic algorithm used for simple obfuscation and should not be relied upon for secure encryption.

### Encoding

- The first two characters of the encoded string represent the key in hexadecimal format.
- Each subsequent pair of characters in the encoded string corresponds to a character in the input text, obtained by performing an XOR operation with the key.
- The result of the XOR operation is converted to hexadecimal and then concatenated to form the encoded text.

### Decoding

- The first two characters of the encoded string represent the key in hexadecimal format, ranging from 1 to 256.
- Starting from the third character, which is the first character containing data after separating the key, each pair of characters in the encoded string represents a character in the original text.
- Each pair of characters is converted from hexadecimal to decimal, then an XOR operation is performed with the extracted key to obtain the original ASCII value.- The ASCII values obtained from decoding are concatenated to reconstruct the original text.
