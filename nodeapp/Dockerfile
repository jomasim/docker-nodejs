FROM node:7-alpine
WORKDIR /nodeapp
COPY package.json /nodeapp
RUN npm install
COPY . /nodeapp
CMD node index.js
# EXPOSE 8080