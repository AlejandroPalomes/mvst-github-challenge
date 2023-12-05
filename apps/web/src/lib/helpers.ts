import axios, { AxiosResponse } from "axios";
import { GithubAPIResponse } from "../models/api/GithubAPIResponse.ts";
import { GithubSearchResponse } from "../models/api/GithubSearchResponse.ts";
import { Config } from "./Config.ts";

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

export const doGet = <T>(query: string, parser: (data: GithubAPIResponse<T>) => any): Promise<any> => {
	const url = 'https://api.github.com/graphql';
	const request = { query: query }
	const config = {
		headers: { Authorization: `Bearer ${Config.GITHUB_API_KEY}`, }
	};
	
	return new Promise((resolve, reject) => {
		axios.post(url, request, config)
			.then((response: AxiosResponse<GithubAPIResponse<T>>) => {
				return response; //TODO Error handler
			})
			.then((response: AxiosResponse<GithubAPIResponse<T>>) => {
				resolve(parser(response.data));
			})
			.catch(error => {
				reject(error);
			})
	});
};