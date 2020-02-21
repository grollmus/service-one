FROM node:13.8.0-alpine
WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run test
RUN npm run build

WORKDIR /usr/src/app/dist
EXPOSE 3000
CMD ["node", "main.js"]