# Set-up
This file contains a barebones walkthrough using React 16 and Express using Webpack 4 and Babel 7.

## Getting Started

### Installation

**You’ll need to have Node >= 6 on your machine**. You can use [nvm](https://github.com/creationix/nvm#installation) to easily switch Node versions between different projects.

### make folders and files
.vscode
client
/dist
//index.html
/src
//index.jsx
//components
///App.jsx
public
server
db
.gitignore
README.md
.eslistrc.js
.nvmrc


### install npm packages

```sh
npm init
npm install react react-dom
npm install express morgan body-parser
npm install mysql
npm install axios
npm install underscore lodash
npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/cli
npm install -D webpack webpack-cli
npm install -D nodemon
```

### Configure package.json

```
  "scripts": {
    "start": "node ./server/index.js",
    "server-dev": "nodemon ./server/index.js",
    "react-dev": "webpack -d --watch",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel ./client/src/ --out-dir compiled --presets @babel/preset-react --source-maps inline --watch"
  },
```

### Configure webpack.config.js

TODO [grab from react express starter]

```
"babel": {
    "presets": [
      "@babel/env",
      "@babel/react"
    ]
  }
```

### Display Hello world

```sh
npm install
```

```sh
npm run react-dev
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

### Connect database

Server-side
- Server index.js 
  - Apply middleware
  - route the requests and handle by db query
  - respond to the client
- routes.js 
- controllers
- models

Client-side
- Event handler
- HTTP request handler
- State change function

### Set up Jest and Enzyme

#### Sideproject A: Same environment


[Adeel Imran Tutorial](https://www.freecodecamp.org/news/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff/)




<br>