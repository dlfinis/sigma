#Sigma Application

![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# Requirements

- Sails.js >= 0.11.0
- Node.js >= 4.4.5
- MysqlDB

# Quick start

- Download / Clone the repository `git clone https://github.com/dlfinis/sigma.git`
- Navigate into your project directory 'cd sigma'
- Run 'git submodule update --init --recursive' for load modules
- If you want get the loading of `all` dependecies and files of Sigma `npm run-script load` 

- Navigate into your project directory 'cd sigma/api/'
- Run 'npm install' to install backend-end packages
- Run 'git submodule update --init --recursive' for load modules
- Start / Install / Config connections to MYSQL
- Setup your MySQL DB settings in `config/env/development.js` or `config/env/production.js`
- Start Sails.js API application with `node app.js`
- Open `http://localhost:1337`

- Navigate into your project directory 'cd sigma/frontend/'
- Run 'npm install' to install backend-end packages
- Run 'bower install' to install frond-end packages
- Start application frontend in development with `grunt serve`

- #Frontend in Production
- Navigate into your project directory 'cd sigma/frontend/'
- Run 'grunt build' to prepare files for deployment in production
- Navigate into your project directory 'cd sigma/dist/'
- Run 'npm install' to install backend-end packages
- Start application frontend in production with `node index.js`

# More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Node.js Development and Consulting](http://icenodes.com)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ)
- [Sails.js](http://sailsjs.org/)
