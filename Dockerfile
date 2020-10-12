FROM node:12-alpine

WORKDIR /src

COPY package.json .

COPY yarn.lock .

RUN yarn

ADD . /src

EXPOSE 3333

ENTRYPOINT ["node","/src/server.js"]
