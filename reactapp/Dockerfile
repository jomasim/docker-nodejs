FROM node:latest
WORKDIR /reactapp
COPY package.json /reactapp
RUN npm install
COPY . /reactapp
RUN npm run build
CMD [ "npm", "start" ]