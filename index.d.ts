declare module "cf-email-decoder" {
	export function decode(encodedString: string): string;
	export function encode(email: string): string;
}
