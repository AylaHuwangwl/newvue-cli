#!/usr/bin/env node

import { Command } from "commander";
const program = new Command();
program.version("1.0.0");
program
  .command("create")
  .option("-n --name <projectName>", "your projectName")
  .option("-v2 --vue2", "create a vue2 project")
  .option("-v3 --vue3", "create a vue3 project")
  .description("create a new vue project")
  .action(async (option) => {
    const { createProject } = await import("./core/actions.js");
    return createProject(option);
  });
program.parse();
