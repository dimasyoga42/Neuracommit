# Neuracommit

A smart CLI tool that generates professional Git commit messages using AI. Neuracommit analyzes your staged changes and creates meaningful, conventional commit messages automatically.

## Features

- **AI-Powered Commits**: Generates semantic commit messages using Groq AI
- **Conventional Commits**: Follows industry-standard commit conventions (feat, fix, chore, refactor, docs, test)
- **Dry Run Mode**: Preview generated messages before committing
- **Flexible Configuration**: Support for environment variables and CLI arguments
- **Fast & Lightweight**: Built for speed with minimal dependencies
- **Multiple File Support**: Handles commits across multiple files intelligently

## Installation

### Global Installation

```bash
npm install -g neuracommit
```

### Using npx (No Installation Required)

```bash
npx neuracommit
```

## Quick Start

1. **Set up your API Key**

   Create a `.env` file in your project root:

   ```bash
   GROQ_API_KEY=your_api_key_here
   ```

   Or set it via CLI:

   ```bash
   neuracommit --key YOUR_API_KEY
   ```

2. **Stage your changes**

   ```bash
   git add .
   ```

3. **Generate and commit**

   ```bash
   neuracommit
   ```

## Usage

### Basic Usage

```bash
# Generate and commit automatically
npx neuracommit

# Preview without committing (dry run)
npx neuracommit --dry-run

# Set API key
npx neuracommit --key YOUR_API_KEY
```

### Configuration Options

| Option | Description |
|--------|-------------|
| `--dry-run` | Preview the generated commit message without creating a commit |
| `--key <API_KEY>` | Set or override the Groq API key |
| `--help` | Display help information |

## Commit Message Formats

Neuracommit generates commit messages following the Conventional Commits specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `chore:` - Maintenance tasks
- `refactor:` - Code restructuring without changing functionality
- `docs:` - Documentation updates
- `test:` - Test additions or modifications

### Example Output

```
feat: add user authentication middleware
fix: resolve memory leak in data processing
docs: update installation instructions
refactor: simplify error handling logic
```

## Getting Your Groq API Key

1. Visit [Groq Console](https://console.groq.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Generate a new API key
5. Copy and save it securely

## Configuration

### Environment Variables

Create a `.env` file:

```env
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxx
```

### Runtime Configuration

```bash
# Set key for current session
export GROQ_API_KEY=your_api_key_here

# Or use the CLI option
neuracommit --key your_api_key_here
```

## Requirements

- Node.js 14.x or higher
- Git installed and configured
- Valid Groq API key
- Active Git repository

## Troubleshooting

### "No API key found"

Make sure you've set the `GROQ_API_KEY` either in your `.env` file or via the `--key` option.

### "No staged changes"

Run `git add` to stage your changes before using Neuracommit.

### "API request failed"

Check your internet connection and verify your API key is valid and has sufficient quota.

## Development

```bash
# Clone the repository
git clone https://github.com/dimasyoga42/Neuracommit.git

# Install dependencies
cd Neuracommit
npm install

# Link locally
npm link

# Test
neuracommit --dry-run
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Powered by [Groq](https://groq.com/) AI
- Follows [Conventional Commits](https://www.conventionalcommits.org/) specification

## Support

If you encounter any issues or have questions:

- Open an issue on [GitHub](https://github.com/dimasyoga42/Neuracommit/issues)
- Check existing issues for solutions

---

Made with ❤️ by the Neuracommit team
