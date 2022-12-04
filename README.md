# This repository is for the Semester Project.

## Initializing and starting the project

- Clone the project and initialize git in your code editor.

```
 git init
```

- Install Dependencies.

```
 npm install
```

- Build the project.

```
 npm run build
```

- Start the project with live-server.

```
 npm run start
```

## Project Setup

### Packages and files installed for this project

- Initialized a git repository.

```
git init
```

- Installed and set up node package manager with project name, project description, project type, project keywords, author of the project and license.

```
npm install
```

- Added a repository type and link to package.json.

```
"repository": {
		"type": "git",
		"url": "git+https://github.com/RobertDacian/semester-project.git"
	}
```

- Added README.md file.

```
README.md
```

- Created project folder and file structure for the project.

```
HTML, CSS and JS
```

- Added .gitignore file.

```
.gitignore
```

- Added node_modules and DS_Store to .gitignore.

```
/node_modules
.DS_Store
```

- Installed Bootstrap.

```
npm install bootstrap
```

- Installed SASS Compiler.

```
npm install -D sass
```

- Added the build and watch script commands to scripts in package.json.

```
 "scripts": {
    "build": "sass src/scss:dist/css",
    "watch": "sass --watch src/scss:dist/css"
  }
```

- Installed live-server.

```
npm install -D live-server
```

- Added the live-server extension to the a watch command in the scripts in package.json, if we type npm run watch this will watch SASS and start the project in live server.

```
 "scripts": {
    "build": "sass src/scss:dist/css",
    "watch": "sass --watch src/scss:dist/css & live-server",
  }
```

- Version updated to 1.0.1

```
"version": "1.0.1"
```

- Installed prettier.

```
npm install --save-dev prettier
```

- Added format to scripts in package.json.

```
"scripts": {
    "format": "prettier -w src/js/joker.js"
  },
```

- Installed ESLint.

```
npm install eslint --save-dev
```

- Setting Up ESLint.

```
npx eslint --init
```

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON

- Added lint and lint-fix to scripts in package.json.

```
"scripts": {
  "lint": "eslint src/**/*.js",
  "lint-fix": "eslint src/**/*.js --cache --fix"
},
```

- Automating the workflow with pre-commit by installing lint-staged. This command will examine the existing environmental tooling we have created and generate the appropriate scripts for us using two tools: lint-staged and husky.

```
npx mrm@2 lint-staged
```

- Added and edited lint-staged scripts in package.json.

```
"lint-staged": {
		"*.js": [
			"prettier --write",
			"eslint --fix"
		],
		"*.html": [
			"prettier --write"
		],
		"*.scss": [
			"prettier --write"
		]
	}
```

- Updating the workflow branch with automation for prettier, ESLint, lint-staged and husky. Also configured and reconfigured vscode settings.json and package.json.

- Version updated to 1.0.2

```
"version": "1.0.2"
```

- Finished the homepage structure.

- Deployed to GitHub pages

[![Deploy static content to Pages](https://github.com/RobertDacian/semester-project/actions/workflows/main.yml/badge.svg)](https://github.com/RobertDacian/semester-project/actions/workflows/main.yml)

- Version updated to 1.0.3

```
"version": "1.0.3"
```

- Finished home page, auction-house page structure and styling

- Version updated to 1.0.4

```
"version": "1.0.4"
```

- Finished Sign In and Sign Up page structure and styling

- Version updated to 1.0.5

```
"version": "1.0.5"
```

- Finished profile pages structure and styling

- Version updated to 1.0.6

```
"version": "1.0.6"
```

- Finished sign-in and sign up pages and functionality

- Version updated to 1.0.7

```
"version": "1.0.7"
```

- Created listings structure in js files: create, update, delete and get listings

- Version updated to 1.0.8

```
"version": "1.0.8"
```

- Added fetch auction listings and search auction listings functionalities on both, lending home page and logged in home page.

- Version updated to 1.0.9

```
"version": "1.0.9"
```
