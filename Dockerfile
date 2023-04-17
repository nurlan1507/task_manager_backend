FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . /usr/src/app/
EXPOSE 3000

CMD [ "node", "index.js" ]