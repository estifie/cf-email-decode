declare module "cf-email-decode" {
	export function decode(encodedString: string): string;
	export function encode(email: string): string;
}
