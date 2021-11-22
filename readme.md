# Placement cell 
This is an application that can be used by a placement department which handles the interviews of multiplae student in batches and taken by a company.

[Video](youtube.com/wizzenalum) to show [demo](https://placement-cell-application.herokuapp.com/) and setup. 

## How to setup on local machine
To use this repository your machine should have [node](https://nodejs.org/en/), npm, [monogodb](https://docs.mongodb.com/manual/installation/) and [git](https://git-scm.com/downloads). 
1. check pre-requisits by these.
```go
node --version
npm --version
git --version
```
2. Now clone this repository
```go
git clone https://github.com/wizzenalum/placement-cell.git
```
3. Change directory to root folder
```go
cd placement-cell
```

3. Install dependencies
```go
npm i --save
```
4. Start mongo db this command may differ... system to system.
```go
sudo systemctl start mongod
```
5. That's... it  run the application
```go
npm start
```
6. click [here](http://localhost:8000) or link in terminal to access your application.

## To test all the routes you can utilize rest-client.
1. i assume your system has vs-code and rest-client preinstalled
2. this api already contain one file called route-testing which has all the routes that it support.
3. you just have to click on send request only.
4. remember to change the id for different delte and update.

## File structure
here you are looking at directory structure with root level files only.
```sh
placement-cell
├── assets
│   ├── images
│   ├── scripts
│   ├── scss
│   └── styles
├── node-modules
├── configs
├── controllers
├── index.js
├── models
├── package-lock.json
├── package.json
├── readme.md
├── routers
└── views
    ├── authentication
    └── partials
```


