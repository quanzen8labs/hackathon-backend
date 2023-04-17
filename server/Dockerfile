FROM node:16-alpine
WORKDIR /usr/src/app
ENV NODE_ENV=development
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]