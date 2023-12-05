export interface GithubError {
	type: "NOT_FOUND",
	path: string[],
	locations: GithubErrorLocation[],
	message: string
}

interface GithubErrorLocation {
	line: number,
	column: number
}