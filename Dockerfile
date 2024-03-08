FROM node:20-alpine

WORKDIR /app

COPY /my-portfolio/package.json .
COPY /my-portfolio/postcss.config.js .
COPY /my-portfolio/tailwind.config.js .
COPY /my-portfolio/tsconfig.json .


COPY /my-portfolio/public ./public
COPY /my-portfolio/src ./src

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
