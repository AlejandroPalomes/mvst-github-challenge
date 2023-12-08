export const RepositoryQueries = {
	findBy: {
		query: `
			query GetUserRepositories($query: String!) {
				search(query: $query, type: REPOSITORY, first: 5) {
					edges {
						node {
							... on Repository {
								name
								primaryLanguage {
									id
									name
									color
								}
								owner {
									login
								}
								description
								createdAt
								updatedAt
							}
						}
					}
				}
			}`,
		parseVariables: (variables: { username: string, repoName: string, language?: string }): string =>
			`user:${variables.username} ${variables.repoName} ${variables.language ? 'language:' + variables.language : ''}`
	},
	findAllLanguages: {
		query: `
			query GetUserRepositories($username: String!) {
				user(login: $username) {
					repositories(first: 50) {
						nodes {
							languages(first: 10) {
								nodes {
									name
								}
							}
						}
					}
				}
			}
		`
	}
}