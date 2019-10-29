FROM node:10-alpine

WORKDIR /react
RUN apk update
RUN apk add --no-cache \
    autoconf \
    automake \
    bash \
    g++ \
    make
COPY ./react/package.json* /react/
#COPY ./react/webpack* /react/
RUN more /react/package*
#RUN more /react/webpack*
RUN yarn install
COPY ./react /react