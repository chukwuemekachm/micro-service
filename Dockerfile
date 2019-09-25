FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./
COPY . ./

ENV SENTRY_DSN=$SENTRY_DSN

RUN yarn
RUN yarn bootstrap

EXPOSE 3000

CMD [ "yarn", "start" ]
