FROM node:14-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8080
# CMD ["/app/node_modules/.bin/nodemon", "index.js"]
CMD [ "node", "index.js" ]