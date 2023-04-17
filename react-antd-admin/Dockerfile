FROM node:16-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 9999
# RUN npm rebuild esbuild
CMD ["npm", "run", "dev"]