FROM node:18.13.0 AS builder

WORKDIR /app

COPY prisma ./prisma/
COPY package*.json ./
COPY ./.env.prod ./.env

RUN npm install --quiet --no-optional --no-fund --loglevel-error

COPY . .

RUN npm run build

FROM node:18.13.0

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

CMD ["npm", "run", "start:migrate:prod"]