---
authors: enriqueprieto
---

# Create an express project

Hi guys, in this article I'll create a simple express project and share with you each step. Ok, let's see below what you will find in this article.

## Topics

- About express.js
- Project Setup
    - Start
    - Install express and dependencies
    - Creating the server
    - Creating the application
    - Creating first route
- Runing the project
- Github
- The end

---

## About express.js

In my words, the `express.js` is a framework where you can create HTTP server with requests like `GET`, `POST`, `PUT` and `DELETE` using `node.js`. If you want to know more about the `express.js` (click here)[https://expressjs.com] to visit the page, there you will find all resources from the framework.

## Project Setup

### Start

To start our project, let's create our folder.

```
mkdir express-project

cd express-project
```

Now, we need init the npm with the command below.

```
npm init
```

Answner all the npm prompt questions and then our `package.json` will created and look like that.

```JSON
//package.json

{
    "name": "express-project",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC"
}

```

Now we can use the npm to install packages in our project, in this case we will install the `express.js`.

### Install express and dependencies


