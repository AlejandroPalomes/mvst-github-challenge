import { Divider, GithubIcon, LinkedinIcon } from '@mvst/ui';
import { FC } from 'react';

const HomePage: FC = () => {

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center pt-7 w-full max-w-2xl gap-6 px-6">
        <img src="/apalomes.png" className="w-36"/>
        <h1 className="text-4xl">Alejandro Palomes x MVST</h1>
        <div className="flex flex-col gap-3 text-customGray-400">
          <p>Hello! I'm Alejandro Palomes, and this is my MVST Challenge task home page.</p>
          <p>In this page you'll find
            useful information about my persona, like a short description or some links to social networks.</p>
          <p> To check the task iteself, just search for a user name at the navar.</p>
        </div>
        <div className="max-w-xs w-full">
          <Divider color={600}/>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-3">
            <p>
              With over 5 years in the filmmaking industry, I transitioned to software development in pursuit of new challenges.
              This shift not only broadened my professional horizons but ignited a new passion.
            </p>
            <p>
              In the dynamic world of coding, I found a realm where personal growth aligns with my career, helping me to evolve both my technical skills and personal development
              That creates a harmonious synergy between my past experiences and present endeavours.
            </p>
          </div>
          <div className="flex flex-row justify-center gap-6 max-w-xs">
            <a href="https://github.com/AlejandroPalomes" target="_blank">
              <GithubIcon/>
            </a>
            <a href="https://es.linkedin.com/in/alejandropalomes" target="_blank">
              <LinkedinIcon/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomePage;
