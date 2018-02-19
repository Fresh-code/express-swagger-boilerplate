FROM node:8-alpine

RUN apk add --update \
    python \
    python-dev \
    py-pip \
    build-base \
  && pip install virtualenv \
  && rm -rf /var/cache/apk/*

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
COPY ./backend/package.json /tmp/package.json
RUN cd /tmp && mkdir node_modules && npm install --loglevel warn

RUN mkdir -p /opt/backend
RUN cp -R /tmp/node_modules /opt/backend/node_modules

WORKDIR /opt/backend

COPY ./backend /opt/backend
