FROM node:12.16.3
WORKDIR /app
COPY package.json .
RUN npm install
COPY . /app 
EXPOSE 4005
CMD "npm" "run" "start" 
