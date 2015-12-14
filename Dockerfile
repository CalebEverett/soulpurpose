# Trying to invalidate cache
FROM node:onbuild

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD . .

RUN npm run build

CMD [ "npm", "start"]

EXPOSE 80
EXPOSE 3030