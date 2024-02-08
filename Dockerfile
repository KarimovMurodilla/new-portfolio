FROM node:14-alpine

WORKDIR /src/app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

RUN npm install -g next

EXPOSE 3000

CMD [ "next", "start", "-p", "3000" ]