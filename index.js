import { CronJob } from "cron";

const tasks = new Map();

export const addTask = (name, cronTime, taskFunction) => {
  if (!tasks.has(name)) {
    const job = new CronJob(cronTime, taskFunction, null, false, null);
    tasks.set(name, { job });
  } else {
    throw new Error("Task already exists!");
  }
};

export const removeTask = (name) => {
  const task = tasks.get(name);
  if (!task) {
    throw new Error("no task found");
  } else {
    task.job.stop();
    tasks.delete(name);
  }
};

export const startTask = (name) => {
  const task = tasks.get(name);
  if (!task) {
    throw new Error("no task found");
  } else {
    task.job.start();
  }
};

export const stopTask = (name) => {
  const task = tasks.get(name);
  if (!task) {
    throw new Error("no task found");
  } else {
    task.job.stop();
  }
};

export const startAll = () => {
  tasks.forEach((task) => task.job.start());
};

export const stopAll = () => {
  tasks.forEach((task) => task.job.stop());
};
