import axios, { AxiosResponse } from "axios";
import { GithubAPIResponse } from "../models/api/GithubAPIResponse.ts";
import { GithubSearchResponse } from "../models/api/GithubSearchResponse.ts";
import { Config } from "./Config.ts";
import { GithubModelType } from "../models/api/GithubGetResponse.ts";

export const extractAxiosResponse = <T>(response: AxiosResponse<GithubAPIResponse<T>>) => {
	if (isGithubSearchResponse<T>(response.data)) {
		return response.data.data.search.edges.map((edge: any) => edge.node);
	}

	return response.data.data
}

const isGithubSearchResponse = <T>(data: GithubAPIResponse<T>): data is GithubSearchResponse<T> =>
	'search' in data.data;

export const githubSearchResponseParser = <T>(response: GithubAPIResponse<T>) => {
	if (isGithubSearchResponse(response)) {
		return response.data.search.edges.map((edge: any) => edge.node);
	} 
	throw new Error('Use githubSearchResponseParser only with search calls')
}

export const githubGetResponseParser = (model: GithubModelType) => <T>(response: GithubAPIResponse<T>) => {
	if (!isGithubSearchResponse(response)) {
		return response.data[model];
	} 
	throw new Error('Use githubGetResponseParser only with specific model get calls')
}

export interface GraphQLVariables {
  [key: string]: string
}

export const doGet = <T>(query: string, parser: (data: GithubAPIResponse<T>) => any, variables: GraphQLVariables = {}): Promise<any> => {
	const url = 'https://api.github.com/graphql';
	const request = { query, variables }
	const config = {
		headers: { Authorization: `Bearer ${Config.GITHUB_API_KEY}`, }
	};

	return new Promise((resolve, reject) => {
		axios.post(url, request, config)
			.then((response: AxiosResponse<GithubAPIResponse<T>>) => {
				if (response.data.errors) {
					reject(response.data.errors);
				}
				return response;
			})
			.then((response: AxiosResponse<GithubAPIResponse<T>>) => {
				resolve(parser(response.data));
			})
			.catch(error => {
				reject(error);
			})
	});
};