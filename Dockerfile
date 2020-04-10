FROM node:alpine
WORKDIR '/rona'

COPY package.json .
RUN npm i
COPY . .
CMD ["npm","run","dev"]