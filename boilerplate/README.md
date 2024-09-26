# Block Boilerplate

## Project Structure

There are some important directories/files you should know before you get started:

- `src/block`: This is where your block should live
- `src/block/block.jsonc`: This is the metadata for your block, please fill it out before submitting it
  It's format is `json with comment`, so you can treat it as normal json file.
- `src/data.js`: The source of the mocking data for the block. You can edit it for better data

## Get Started

This boilerplate is setup using [Yarn v2](https://yarnpkg.com). But it's ok if you prefer npm. I'll explain how to use npm later.

### Yarn Setup

You can find the installation instructions [here](https://yarnpkg.com/getting-started/install). Just make sure you have a global `yarn` installed by running below command **outside** of this project:

```shell
$ yarn --version
1.22.5
```

If you see version `1.x.x`, then you are ready. Yarn v2 is already included in this boilerplate. Please try to run the same command **under** this project:

```shell
$ yarn --version
2.4.0
```

After this, you can install the dependencies by running:

```shell
$ yarn install
```

### NPM Setup

Just use the follow command to install dependencies:

```shell
$ npm install
```

## Development Server

To start the development server for **Yarn**, execute:

```shell
$ yarn serve
```

For **NPM**, execute:

```shell
$ npm run serve
```

It already has HMR (Hot Module Replacement) supporting, now you can start coding and preview the result.

## Lint

Before you submit your block, please make sure your code passes the linter check. To run your code through the linter, run the following command:

```shell
$ yarn lint
```

Or for **NPM**:

```shell
$ npm run lint
```

The linter will try to fix any problems for you. However if you still see any errors, please fix it before submitting.

## Dependencies Policies

You can use follow packages without any permit:

- [lodash](https://lodash.com): Utilities functions
- [date-fns](https://date-fns.org): Date manipulating and formatting
- [tailwindcss](https://tailwindcss.com): Utilities-first style framework

And of course `Vue.js`, but **NO** `Vuex` or `vue-router`

If you want to add any packages other then above, please go through the follow checklist:

1. It **must** have an Open Source License and it must **not be GPL-like**
2. It **must** not register anything to global (You don't need to use `Vue.use`)
3. If it includes css, it **must** not pollute global css (It uses scope css, css module or including prefix for class names) (This also mean you can't include any other css framework)
4. The package **must** be Vanilla Javascript (a package that isn't based on other js framework) or based on Vue.js
5. Prefer to use packages that is not bundle by webpack.
6. The package must be maintained
7. We'd prefer if it reused the existing packages

After running through the above rules, please send David Peng a message include the package url (Github or NPM), and if it's a Vue component, please also include a screenshot to show where you want to use it

The package will only be rejected under the following situations:

1. Somebody has already used a similar package and it would be best if you used it too.
2. It is unmaintained.
3. It is a huge package, e.g. [`moment`](https://www.npmjs.com/package/moment)

## VSCode

This boilerplate includes the config files for [Visual Studio Code](https://code.visualstudio.com). It may be easier for you if you use VSCode; but it fine to use your favorite tools.

In the config, there are some recommended extensions:

- [bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Integrates with tailwindcss and provides auto completion.
- [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Integrates eslint into VSCode. With this extension, you can see eslint check result in your editor
- [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Integrates prettier into VSCode. It will format your code when you save a file.
- [stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint): Integrates stylelint into VSCode. It will help you check your styles

## Checklist before you submit your work

1. Run `yarn lint` (or `npm run lint`) and make sure you pass the check
2. Make sure you have fill out the meta in the `src/block/block.jsonc`
