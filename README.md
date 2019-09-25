# micro-service

[![CircleCI](https://circleci.com/gh/chukwuemekachm/micro-service.svg?style=svg)](https://circleci.com/gh/chukwuemekachm/micro-service) [![Coverage Status](https://coveralls.io/repos/github/chukwuemekachm/micro-service/badge.svg?branch=master)](https://coveralls.io/github/chukwuemekachm/micro-service?branch=master) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=popout-square&logo=javascript&logoColor=yellow)

A simple stateless microservice in Nodejs, with three major functionalities -

* **Authentication**
* **JSON patching**
* **Image Thumbnail Generation**

## Getting Started
To setup **micro-service**, the following should be installed on your machine.

- [Node.js](https://nodejs.org/en/download/current/) 8 and above
- [Git](https://git-scm.com/downloads)

### Installation

If you have all the prerequisites you can use the steps below to setup **micro-service** locally.

##### Clone visand
- Open your terminal and `cd` to the directory where you will like to download **micro-service**, then run
```sh
git clone https://github.com/chukwuemekachm/micro-service.git
```
- Change to the **micro-service** directory
```sh
cd micro-service
```


##### Install Dependencies
- Run the commands below to install the required `node` dependencies
```bash
npm install yarn -g
yarn install
yarn bootstrap
```

### Usage
- To start up your newly installed **micro-service** run
```sh
yarn start
```
- You should see an output similar this on the terminal
```
info: 'Identity service listening on port ' 3001 {"service":"identity-service"}
info: 'Json service listening on port ' 3002 {"service":"json-service"}
2019-09-25T11:56:46.214Z [EG:gateway] info: gateway http server listening on :::3000
info: 'Image service listening3 on port ' 3003 {"service":"image-service"}
```

### Running Tests
- To run the automated tests on your newly installed **micro-service** run
```bashsh
yarn test
```

## Built With
- [express](https://expressjs.com/)
- [express-gateway](https://www.express-gateway.io/)
- [lerna](https://lerna.js.org/)
- [sharp](https://sharp.pixelplumbing.com/en/stable/)
- [fast-json-patch](https://github.com/Starcounter-Jack/JSON-Patch)
- [json-web-token](https://jwt.io/)

## API Docs
- [Postman](https://documenter.getpostman.com/view/3397523/SVn2PFma?version=latest)

## Author

* **Chima Chukwuemeka** [@chukwuemekachm](https://github.com/chukwuemekachm)


## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/chukwuemekachm/gridly_random_number_generator/blob/develop/LICENSE) file for details
