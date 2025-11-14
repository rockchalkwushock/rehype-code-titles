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

Please keep in mind that I spend my free time trying to help you. You can make it easier for me if you provide versions of the relevant libraries and a runnable small project reproducing your issue. Make sure all the necessary dependencies are declared in `package.json` so anyone can run `bun install && bun test` and reproduce your issue.

## Development

Visit the [issue tracker](https://github.com/rockchalkwushock/rehype-code-titles/issues) to find a list of open issues that need attention.

Fork, then clone the repo:

```shell
git clone https://github.com/{{ your username }}/rehype-code-titles.git
```

### Installing Dependencies

This project uses [Bun](https://bun.sh) for package management and testing.

```shell
bun install
```

### Building

**Building `rehype-code-titles`**

Running the build script generates both the JavaScript output and TypeScript definitions:

```shell
bun run build
```

This will:

1. Run TypeScript compiler to generate type definitions
2. Copy the source file to the root directory

### Testing

To run tests:

```shell
bun test                # Run all tests
bun test --coverage     # Run tests with coverage
bun test --watch        # Run tests in watch mode
```

### Linting

To run ESLint:

```shell
bun run lint
```

### Type Checking

To run TypeScript type checking without emitting files:

```shell
bun run type-check
```

### Formatting

To format code with Prettier:

```shell
bun run format
```

## Development Workflow

This repository has a streamlined development workflow:

1. **No Pre-commit Hooks**: We've removed automated git hooks for a simpler workflow
2. **Manual Quality Checks**: Run linting, type-checking, and tests manually before committing
3. **CI/CD Validation**: GitHub Actions will run all checks on pull requests

### Recommended Workflow

```shell
# Make your changes
# ...

# Before committing, run:
bun run type-check    # Verify types
bun run lint          # Check code style
bun test              # Run tests
bun run build         # Verify it builds
```

## Version Management

This project uses [Changesets](https://github.com/changesets/changesets) for version management.

When making changes that should be included in the changelog:

```shell
bun changeset
```

This will prompt you to describe your changes and select the appropriate version bump (patch, minor, or major).

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
- Make your changes.
- Run `bun run type-check`, `bun run lint`, and `bun test` to ensure quality.
- If adding a feature or fix that should be in the changelog, run `bun changeset`.
- Submit a pull request, referencing any issues it addresses.

Please try to keep your pull request focused in scope and avoid including unrelated commits.

After you have submitted your pull request, I'll try to get back to you as soon as possible. I may suggest some changes or improvements.

Thank you for contributing!
