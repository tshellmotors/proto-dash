#Stage 1
FROM node:18.15-buster

WORKDIR /app2

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

CMD ["npm", "start"]