FROM node:14-alpine
WORKDIR /app
ADD package*.json ./
RUN yarn config set network-timeout 600000 -g
RUN yarn install
ADD . .
ARG PORT
EXPOSE $PORT
CMD yarn start