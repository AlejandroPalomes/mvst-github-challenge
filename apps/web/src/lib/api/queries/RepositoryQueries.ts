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
								}
								owner {
									login
								}
								description
								createdAt
							}
						}
					}
				}
			}`,
		parseVariables: (variables: { username: string, partialName: string, language?: string }): string =>
			`user:${variables.username} ${variables.partialName} ${variables.language ? 'language:' + variables.language : ''}`
	},
	findAllLanguages: {
		query: `
			query GetUserRepositories($username: String!) {
				user(login: $username) {
					repositories(first: 100) {
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