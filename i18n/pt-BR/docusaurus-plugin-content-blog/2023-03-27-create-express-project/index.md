---
authors: enriqueprieto
slug: criar-projeto-express
---

# Criar um projeto express

Olá pessoal, neste artigo eu vou criar um simples projeto express e compartilhar com você cada passo.

<!--truncate-->

## Sobre o express.js {#sobre-express}

In my words, the `express.js` is a framework where you can create HTTP server with requests like `GET`, `POST`, `PUT` and `DELETE` using `node.js`. If you want to know more about the `express.js` (click here)[https://expressjs.com] to visit the page, there you will find all resources from the framework.

## Project Setup {#project-setup}

### Start {#project-setup-start}

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

### Install express and dependencies {#project-setup-install-express-dependencies}

Inside our project let's install the express.

```
npm install express --save
```


