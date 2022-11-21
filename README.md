# React Getting Started Tutorial
This repository contains a set of example React programs.
The example1 folder is a minimal sized React program.

Each other folder is a set of examples with
gradually increasing complexity showing new features.

Each example folder is stand alone. It can be built and run independently. 

### Pre-Requisites
It is a pre-requisite that you already have nodejs and npm installed.

    https://nodejs.org/en/download


### Example1 - Hello World
This is a simple hello world program. 
Install and run this with the following commands:

    cd example1
    npm install
    npm run dev
Open a web browser and browse to http://localhost:3000

The source code consists of just 2 files:


|File|Purpose|
|---|---|
|package.json|Contains npm packages to install.|
|src/pages/index.js|Contains the starting page React component.|

### Example 2 - Material Design
This demonstrates how to install and use google material design components.
This shows how you can use material design react components to create professional looking web sites.

### Example 3 - External Components
One of the key benefits of React is the rich ecosystem of external components.
This demonstrates how to install and use an external component that must be dynamically installed.
The external component displays a world map that can
be zoomed and panned.

### Example 4 - State Changes
React is named because the view reacts to state changes.

This demonstrates how to handle click events to change state and how to render information from state.

This shows examples of both local and global state.

### Example 5 - Api
This example shows how to make API calls and bring in data from a remote server into react state.


# Other Commands
There are various other commands provided in the package.json scripts.

### Build Static Web Page
You can build a folder of static HTML files from the react code using the command:

    npm run build

This create a directory called 'out' containing static files that can be open locally
or deployed to a web server to host your application.

### Pretty Print
You can pretty print your javascript using the command:

    npm run format

This updates your code using a javascript pretty printer and an HTML pretty printer.

# Slides
This repo contains powerpoint slides providing an overview of the material used in the examples.

    Powe

