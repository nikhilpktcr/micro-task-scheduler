# micro-task-scheduler

micro-task-scheduler is a lightweight package for scheduling and managing background tasks in Node.js applications using cron syntax. It's useful for handling tasks like sending emails or processing data at specific intervals.

## Installation

Install the package using npm:

```bash
npm install microtask-scheduler
```

## Usage

Importing the Scheduler

```bash
import { addTask, removeTask, startTask, stopTask, startAll, stopAll } from 'micro-task-scheduler';

```

### Adding a Task

To add a task, use the addTask function. The function takes three arguments: the task name, the cron time string, and the task function.

```bash
const exampleTask = () => {
  console.log('Example task executed.');
};

addTask('exampleTask', '* * * * *', exampleTask);

```

### Starting a Task

To start a specific task, use the startTask function.

```bash
startTask('exampleTask');

```

### Stopping a Task

To stop a specific task, use the stopTask function.

```bash
stopTask('exampleTask');

```

### Removing a Task

To remove a specific task, use the removeTask function.

```bash
removeTask('exampleTask');

```

### Starting All Tasks

To start all scheduled tasks, use the startAll function.

```bash
startAll();

```

### Stopping All Tasks

To stop all scheduled tasks, use the stopAll function.

```bash
stopAll();

```

### Example

Here's a complete example demonstrating how to use the Micro task Scheduler:

```bash
import { addTask, removeTask, startTask, stopTask, startAll, stopAll } from 'micro-task-scheduler';

function handleTask() {
  console.log(`Task executed at ${Date.now()}`);
}

// Add a task
addTask('my-task', '0 0 * * *', handleTask);

// Start a task
startTask('my-task');

// Stop a task
stopTask('my-task');

// Start all tasks
startAll();

// Stop all tasks
stopAll();

// Remove a task
removeTask('my-task');

```
