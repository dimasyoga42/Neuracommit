import simpleGit from "simple-git";

export const git = simpleGit();

export const stageAll = async () => {
  await git.add(".");
};

export const getstageAll = async () => {
  return await git.diff(["--staged"]);
};

export const commit = async (message) => {
  return await git.commit(message);
};

export const push = async () => {
  await git.push();
};
