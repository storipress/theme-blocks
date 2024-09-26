import inquirer from 'inquirer'
import chalk from 'chalk'
import fs from 'fs-extra'
import path from 'path'

const projectRoot = path.resolve(__dirname, '..')

async function main() {
  const blockPath = path.resolve(projectRoot, 'src/block')
  console.log(chalk.green('Welcome to Storipress SDK!'))
  const blockExist = await fs.pathExists(path.join(blockPath, 'index.js'))
  if (blockExist) {
    const { clean } = await inquirer.prompt({
      name: 'clean',
      type: 'confirm',
      message: `Look like 'src/block' is already existed. ${chalk.red(
        'This will remove it. Are you sure to continue?'
      )}`,
      default: false,
    })
    if (!clean) {
      console.log(chalk.red('User abort!'))
      process.exit(1)
    } else {
      await fs.emptyDir(blockPath)
    }
  }
  const projects = await fs.readJSON(path.resolve(__dirname, 'projects.json'))
  const { project } = await inquirer.prompt({
    type: 'list',
    name: 'project',
    message: 'What are you going to develop?',
    choices: projects,
  })
  await fs.ensureDir(blockPath)
  await fs.copy(path.resolve(__dirname, project.dir), blockPath)
  console.log(chalk.green('Done'))
}

main()
