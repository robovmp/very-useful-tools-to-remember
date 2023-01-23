FROM node:18.13.0

WORKDIR /usr/src/api

COPY . .
COPY ./.env.prod ./.env

RUN npm install --quiet --no-optional --no-fund --loglevel-error

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]