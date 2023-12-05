import { Button, Input } from '@mvst-ui';
import { FC, useEffect, useState } from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { useGet } from '../hooks/api/useGet.tsx';

// const temporal_demo_query = {
//   user(login:"AlejandroPalomes") {
//   repositories(first: 3, orderBy: {field: CREATED_AT, direction: DESC}) {
//     edges {
//       node {
//         name,
//         owner {
//           login,
//           avatarUrl,
//           id
//         },
//         forks {
//           totalCount
//         },
//         createdAt
//       }
//     }
//   }
// }
// }

/** Query to return users given a partial string of the name
{
  search(query: "AlejandroPal type:user", type: USER, first: 5) {
    edges {
      node {
        ... on User {
          login
          name
        }
      }
    }
  }
}
 */

/** Query to search repositories given a specific user an a partial string of the repo name
 {
  search(query: "user:AlejandroPalomes re", type: REPOSITORY, first: 5) {
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
 */

const HomePage: FC = () => {
  const [count, setCount] = useState(0)

  const [typingTimeout, setTypingTimeout] = useState<any>(null);

  const { data } = useGet();

  console.log({data});

  useEffect(() => {
    return () => typingTimeout && clearTimeout(typingTimeout);
  });

  const startTimeout = (value: string) => {
    return setTimeout(() => {
      console.log('set value: ', value);
      setTypingTimeout(null);
    }, 500);
  };

  const inputHandler = ({ target }: any) => {
    typingTimeout && clearTimeout(typingTimeout);
    setTypingTimeout(startTimeout(target.value));
  };

  return (
    <>
      <Button>Look at this button \,,/</Button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Input name="testing"/>
      </div>
      <div className="card">
        <input type="text" onChange={inputHandler}/>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
};

export default HomePage;
