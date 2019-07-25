# Product as Cards Exercise with React and Redux

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## About

This is an exercise to build an interface to display a list of products and details as cards using ReactJS and Redux. The mock was put at mockable.io.

To run this project first install dependencies:

```
]$ yarn install
```

Then run in a develop mode:

```
]$ yarn start
```

## Technologies

For this exercise I used:

 - ReactJS
 - Redux-Saga
 - React-Router
 - Materializecss
 - Webpack

### Prettier

To keep code formated, will be executed every time you runs:

```
]$ yarn commit
```

### ESLint

"Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn’t adhere to certain style guidelines."
(https://eslint.org/docs/about/)

ESLint is a JavaScript open source linting, and here we user airbnb styleguide (https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

### Commits

To keeping commits messages standardized and facilitate the generation of semantic release was implemented commitizen(https://github.com/commitizen/cz-cli) with AngularJS's commit message convention(https://github.com/commitizen/cz-conventional-changelog).

So after you run:

```
]$ git add .
```

Instead of runs 'git commit' runs this:

```
]$ yarn commit
```

This command will execute first prettier and eslint with fix parameter after the commit.

P.S.: if your code has any lint error the commit will be not executed.


### Webpack commands

This project has implemented 3 webpack configurations:

- webpack.config.dev.js: has development configuration and is executed with yarn start
- webpack.config.stats.js: has stats configuration for analyse package and is executed with yarn stats
- webpack.config.prod.js: has production configuration and is executed with yarn build

### Code splitting

This project brings code splitting implemented in webpack configurations for stats and production. For these configuration besides code splitting was implemented compressions and minimizing solutions to improve quality.


