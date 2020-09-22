# app will run on 192.168.99.100:5000
# Build with: docker build build -t andreas/visits .
# base image
FROM node:alpine
# set working dir, all following commands are relative to this
# will be created if it doesn't exist
WORKDIR /app
# add build directories
COPY ./package.json ./
# install dependencies
RUN npm install
# copy modified files in the end to avoid cache misses
COPY ./ ./
# default command
CMD ["npm", "start"]