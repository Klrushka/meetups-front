FROM node:16.17.0

WORKDIR /app

COPY . .

RUN npm install --force
RUN npm run build

EXPOSE 3001

CMD [ "npm", "run",  "start:prod"]


