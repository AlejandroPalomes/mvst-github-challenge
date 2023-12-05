export const UserQueries = {
	findByName: (username: string) => `
{
	search(query: "${username} type:user", type: USER, first: 5) {
		edges {
			node {
				... on User {
					login
					name
					avatarUrl
					bio
					location
					company
					repositories {
						totalCount
					}
				}
			}
		}
	}
}`
}