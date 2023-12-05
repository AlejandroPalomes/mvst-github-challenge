import axios from 'axios';
import { Config } from '../../lib/Config.ts';
import { useState } from 'react';
import { useEffect } from 'react';

// const GTIHUB_BASE_URL = 'https://api.github.com/graphql';

export type Fetcher<T> = () => Promise<T>;

// export interface UseGetOptions {};

export interface UseGetResult<T> {
  data?: T;
  isLoading: boolean;
  error: any;
  refetch: () => void;
}

interface TempGithubResponse {}

// export const useGet = <T extends any>(uniqueKey: QueryKey, fetcher: Fetcher<T>, options?: UseGetOptions): UseGetResult<T> => {
export const useGet = <T extends TempGithubResponse>(): UseGetResult<T> => {

  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //TODO Move this to a file named API > API.users.find, and both variables need to be params from that
  const username = 'AlejandroPalomes';
  const partialString = 're'
  const query = `
{
  search(query: "user:${username} ${partialString}", type: REPOSITORY, first: 5) {
    edges {
      node {
        ... on Repository {
          name
          owner {
            login
          }
          description
          createdAt
        }
      }
    }
  }
}
`;

  useEffect(() => {
    const getUserRepositories = async () => {
      axios.post('https://api.github.com/graphql', {
        query: query
      }, {
        headers: {
          Authorization: `Bearer ${Config.GITHUB_API_KEY}`, //TODO Fix process.env, not working with turborepo, but the useGet hook works if this is replaces with a valid token \,,/
        },
      })
        .then(response => {
          const repositories = response.data.data.search.edges.map((edge: any) => edge.node); //TODO Remove any type
          setData(repositories);
          console.log(repositories, response);
        })
        .catch(error => {
          console.error('Error:', error.response ? error.response.data : error.message);
          setError(error.response ? error.response.data : error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getUserRepositories();
  }, [username, partialString, query]);

  const refetch = () => {
    //TODO Fix this repeated code, move call inside a callback????
    axios.post('https://api.github.com/graphql', {
      query: query
    }, {
      headers: {
        Authorization: `Bearer ${Config.GITHUB_API_KEY}`, //TODO Fix process.env, not working with turborepo, but the useGet hook works if this is replaces with a valid token \,,/
      },
    })
      .then(response => {
        const repositories = response.data.data.search.edges.map((edge: any) => edge.node); //TODO Remove any type
        setData(repositories);
        console.log(repositories, response);
      })
      .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
        setError(error.response ? error.response.data : error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { data, isLoading, error, refetch };
};
