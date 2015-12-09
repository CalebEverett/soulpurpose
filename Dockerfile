FROM node:onbuild

ADD package.json package.json
RUN npm install

ADD . .

RUN npm run build

CMD [ "npm", "start"]

EXPOSE 80
EXPOSE 3030