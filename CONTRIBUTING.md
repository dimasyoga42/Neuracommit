# Contributing to Neuracommit

Thank you for considering contributing to Neuracommit! We welcome contributions from the community and appreciate your effort to make this project better.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Environment details** (OS, Node.js version, Git version)
- **Error messages** or screenshots if applicable

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear use case** - why would this be useful?
- **Detailed description** of the proposed functionality
- **Possible implementation** approach (if you have ideas)

### Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Make your changes** with clear, focused commits
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Follow the coding style** used in the project
6. **Submit a pull request**

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Neuracommit.git

cd Neuracommit

# Install dependencies
npm install
# Test your changes
npm run start --options
```

## Coding Guidelines

### JavaScript Style

- Use modern ES6+ syntax
- Follow consistent indentation (2 spaces)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Commit Messages

We use Conventional Commits. Your commit messages should follow this format:

```
<type>: <description>

[optional body]

[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```
feat: add support for custom commit templates
fix: handle API timeout errors gracefully
docs: update installation instructions for Windows
```

### Testing

Before submitting a PR:

1. Test the CLI with various scenarios
2. Verify it works with different types of changes
3. Test dry-run mode
4. Check API key validation

## Project Structure

```
Neuracommit/
├── bin/           # CLI entry point
├── src/           # Source code
│   ├── api/       # API integration
│   ├── git/       # Git operations
│   └── utils/     # Utility functions
├── package.json
└── README.md
```

## Review Process

1. Maintainers will review your PR
2. Address any feedback or requested changes
3. Once approved, your PR will be merged
4. Your contribution will be credited in the release notes

## Questions?

Feel free to open an issue for questions or join discussions in existing issues.

Thank you for contributing to Neuracommit! 🚀
