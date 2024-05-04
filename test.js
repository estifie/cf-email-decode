const { decode, encode } = require("./");

describe("decode function", () => {
	it("should decode the encoded email address", () => {
		const encodedString = "5b3e233a362b373e1b3e233a362b373e75383436"; // Example encoded email address
		const decodedEmail = decode(encodedString);
		expect(decodedEmail).toBe("example@example.com");
	});
});

describe("encode function", () => {
	it("should encode the email address", () => {
		const email = "another@example.com"; // Example email address
		const encodedString = encode(email); // Encode the email address
		expect(encodedString).toMatch(/^[0-9a-f]{2,}[0-9a-f]$/); // Check if the encoded string is in the correct format
		const decodedEmail = decode(encodedString); // Decode the encoded email address
		expect(decodedEmail).toBe(email); // Check if the decoded email address is the same as the original email address
	});
});
