# Contributing

I am open to, and grateful for, any contributions made by the community. By contributing to `rehype-code-titles`, you agree to abide by the [code of conduct](https://github.com/rockchalkwushock/rehype-code-titles/blob/master/CODE_OF_CONDUCT.md).

## Reporting Issues & Asking Questions

Before opening an issue, please search the [issue tracker](https://github.com/rockchalkwushock/rehype-code-titles/issues) to make sure your issue hasn't already been reported.

### Bugs & Improvements

I use the issue tracker to keep track of bugs and improvements to `rehype-code-titles`. I encourage you to open issues to discuss improvements, architecture, theory, internal implementation, etc. If a topic has been discussed before, I will ask you to join the previous discussion.

### Getting Help

If you are just asking a question about 'How to ...' please start the title of your issue as: `[Question]`.

### I'm not scalable, so help me out!

Please structure questions and issues in a manner that uses syntax highlighting, indentation, & split text into paragraphs. Try to state your question/issue as concisely as possible.

Please keep in mind that I spend my free time trying to help you. You can make it easier for me if you provide versions of the relevant libraries and a runnable small project reproducing your issue. Make sure all the necessary dependencies are declared in `package.json` so anyone can run `npm install && npm start` and reproduce your issue.

## Development

Visit the [issue tracker](https://github.com/rockchalkwushock/rehype-code-titles/issues) to find a list of open issues that need attention.

Fork, then clone the repo:

```shell
git clone https://github.com/{{ your username }}/rehype-code-titles.git
```

### Building

**Building `rehype-code-titles`**

Running the build script:

```shell
npm run build
yarn build
```

### Pre Commit Checks

This repository makes use of [`@commitlint`](https://commitlint.js.org/#/) and requires you to write your commits following this [guideline](https://www.conventionalcommits.org/en/v1.0.0/). It also makes use of [`lint-staged`](https://github.com/okonet/lint-staged) & [`husky`](https://typicode.github.io/husky/#/) to check your code in the _pre-commit_ hook. On commit your code will be linted, type checked, and should any of the code touch test suites those suites will be ran.

```shell
# Do stuff
yarn commit
# eslint --fix
# tsc --esModuleInterop --noEmit
# jest --lastCommit --maxWorkers=25% --passWithNoTests
```

To run only tests:

```shell
npm test
npm run test:ci
npm run test:coverage
npm run test:watch

yarn test
yarn test:ci
yarn test:coverage
yarn test:watch
```

To run only linting:

```shell
npm run lint
yarn lint
```

To run only type-checking:

```shell
npm run type-check
yarn type-check
```

## Docs

Improvements to the documentation are always welcome.

## Examples

I have not made any examples since the code base is so small, but as this grows if anyone would like to run examples of what they have added as features feel free to do so!

## Sending a Pull Request

The whole purpose behind this project is to get people contributing however large or small the contribution. Whether it be _fixing a bug_ or _adding a feature_ submit changes via a Pull Request.

In general, the contribution workflow looks like this:

- Open an issue in the [issue tracker](https://github.com/rockchalkwushock/rehype-code-titles/issues).
- Fork the repo.
- Create a new feature branch based off the `production` branch.
- Make sure all tests, linting, and type-checking pass.
- Submit a pull request, referencing any issues it addresses.

Please try to keep your pull request focused in scope and avoid including unrelated commits.

After you have submitted your pull request, I'll try to get back to you as soon as possible. I may suggest some changes or improvements.

Thank you for contributing!
