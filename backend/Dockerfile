FROM node:12.18.4 AS builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]