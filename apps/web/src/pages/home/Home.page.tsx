import { FC } from 'react';

const HomePage: FC = () => {

  return (
    <div className="flex flex-col items-center pt-7 border border-solid border-red-700">
      <img src="/apalomes.png" className="w-44"/>
      <p>Hello! I'm Alejandro Palomes</p>
      <h1>GitHub user search</h1>
    </div>
  )
};

export default HomePage;
