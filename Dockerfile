FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./
COPY . ./

RUN yarn
RUN lerna bootstrap

EXPOSE 3000

CMD [ "yarn", "start" ]
