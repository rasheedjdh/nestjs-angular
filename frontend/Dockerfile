FROM node:12.18.4-alpine


RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend

COPY package.json /usr/src/frontend/

RUN npm install
RUN npm install -g @angular/cli@10.2.0

COPY . /usr/src/frontend/

EXPOSE 4200

CMD npm start
