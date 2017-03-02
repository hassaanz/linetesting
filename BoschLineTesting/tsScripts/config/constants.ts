export class Constants {
	private static SERVER_URL_BASE: string = 'http://localhost:26486/api/';
	private static PRODUCTS_PATH: string = 'products';
	private static USERS_PATH: string = 'users';

	public static productsPath() {
		return this.SERVER_URL_BASE.concat(this.PRODUCTS_PATH);
	}
	public static usersPath() {
		return this.SERVER_URL_BASE.concat(this.USERS_PATH);
	}
} 