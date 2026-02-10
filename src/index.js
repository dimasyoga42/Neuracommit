import { Command } from "commander";
import chalk from "chalk";
import { loadConfig } from "./config.js";
import { commit, getstageAll, stageAll, push } from "./git.js";
import { generateCommitia } from "./groq.js";

export const run = async () => {
  const cmd = new Command();

  cmd
    .name("Naura-commit")
    .description("Generate Commit from IA")
    .option("--key <apikey>", "Groq API Key Override")
    .option("--dry-run", "Only show commit, do not commit")
    .option("--push", "auto push after commit")
    .option("--help", "help menu")

  await cmd.parseAsync(process.argv);
  const options = cmd.opts();

  try {
    const config = await loadConfig(options);

    await stageAll();
    const diff = await getstageAll();

    if (!diff.trim()) {
      console.log(chalk.yellow("No staged changes"));
      return;
    }

    const message = await generateCommitia(diff, config);

    console.log(chalk.green("\nGenerated commit message:"));
    console.log(chalk.white(message));

    if (options.help) {
      console.log(chalk.blue(`
        --dry-run  Only show commit, do not Commit
        --key <apiKey>  Groq API Key Override
        --push auto push after commit
        `))
    }

    if (options.dryRun) {
      console.log(chalk.red("Dry-run mode active, commit skipped"));
      return;
    }

    await commit(message);
    console.log(chalk.green("Commit created"));

    if (options.push) {
      await push();
      console.log(chalk.cyan("Pushed to remote"));
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};
