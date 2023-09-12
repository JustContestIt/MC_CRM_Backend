FROM node:18

WORKDIR /mongo_async_crud/

ENV PATH /mongo_async_crud/node_modules/.bin:$PATH

COPY package.json /mongo_async_crud/

RUN npm install

COPY . .
