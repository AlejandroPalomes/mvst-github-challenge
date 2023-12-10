# MVST x Alejandro Palomes (Github Searcher)

Hello world! And welcome to this challenge, MVST x Alejandro Palomes.

## Briefing

The task is to allow the user to type in the name of a github user and display his/her repositories in a list. The user is allowed to filter through the repositories by name and/or programming language.

### Requirements

- The application must be written using React
- Use typescript
- You are required to use git for versioning
- Feel free to use any additional plugin/module to help you get the task done more effectively
- Google Chrome is the testing browser

### Bonus

- ✅ Add storybook and divide the components
- ✅ Write tests
- ⭕️ Deploy it somewhere (like [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/))
- ✅ Document [code](https://google.github.io/styleguide/jsguide.html#jsdoc)
- ✅ Use the [v4 API](https://docs.github.com/en/graphql), which is built using GraphQL.
- ✅ Write a README that includes
    - A short description about the project
    - Instructions on how to run it
    - Instructions on how to run the test suite
    - Future improvements



## How did I solve the challenge? 🕵️‍♂️

I created a monorepo with Turborepo build system, which allowed me to develop a UI library, consumed by both an app and a storybook.

- 🏎 [Turborepo](https://turbo.build/repo) — It is a high-performance build system for JavaScript and TypeScript codebases. It was designed after the workflows used by massive software engineering organizations to ship code at scale. Turborepo abstracts the complex configuration needed for monorepos and provides fast, incremental builds with zero-configuration remote caching.
- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces
- 🛠 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite

As well as a few others tools:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting



## How to run the project 🏃‍♂️

The first thing to do is to obtain your very own GitHub API key. In order to achieve that, you must follow the steps in "[Creating a fine-grained personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)", to get a fine-grained personal access token. The default permissions are enough to grant access through all the app requests. 

Once you have your key, you must add it to a `.env` file, in `./apps/web` directory, under the name `VITE_GITHUB_TOKEN`. There is a `.env.template` file for you to follow through. Do not use `.env.template` directly, rename it to `.env`.

Remember to install dependencies in the root:
```sh
pnpm install
```

By installing dependencies in the root, the config is propagated through all apps and packages in the monorepo.

That's all you need to do. Now you are good to go! 🤘

### Useful Commands

- `pnpm build` - Build all packages, including the Storybook site
- `pnpm dev` - Run all packages locally and preview with Storybook
- `pnpm test` - Run test suite
- `pnpm test:coverage` - Run test suite and generates coverage report
- `pnpm test:watch` - Run test suite in watch mode



### Apps & Packages

This Turborepo includes the following packages and applications:

- `apps/docs`: Component documentation site with Storybook
- `apps/web`: Web Application - GitHub Searcher
- `packages/ui`: Core React components
- `packages/tailwind-config`: Shared `tailwind.config.ts`s used throughout the Turborepo
- `packages/typescript-config`: Shared `tsconfig.json`s used throughout the Turborepo
- `packages/eslint-config`: ESLint preset



## What's next? 🏗

- Deploy monorepo to Vercel
- Improve performance:
    - Reduce calls to API by implementing React Query, which cache request responses.
- Add Styled Components
- Improve test coverage
- Migrate more components to the UI library, and create new stories for them.
- Add more code documention (JSDocs)