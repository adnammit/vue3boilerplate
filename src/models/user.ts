export interface User {
	email: string,
	username: string,
	fullName: string,
	password: string
}

export type UserList = Array<User & { password: string }>
