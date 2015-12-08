FROM node:4.2

RUN mkdir -p /app
WORKDIR /app

RUN git clone https://github.com/CalebEverett/soulpurpose.git

ENV NODE_ENV=production
ENV NODE_PATH=./src
ENV NPM_CONFIG_PRODUCTION=false

RUN npm install
RUN npm run postinstall

EXPOSE 8080

CMD [ "npm", "start" ]