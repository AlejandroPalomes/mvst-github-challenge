export const UserQueries = {
	findByName: () => `
	query SearchUsers($query: String!) {
		search(query: $query, type: USER, first: 5) {
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
	}`,
	getInfoById: () => `
	query GetUser($username: String!) {
		user(login: $username) {
			login
			name
			avatarUrl
			bio
			location
			company
			repositories(first: 5, orderBy: { field: UPDATED_AT, direction: DESC }) {
				totalCount
				nodes {
					name
					description
					createdAt
				}
			}
		}
	}`
}