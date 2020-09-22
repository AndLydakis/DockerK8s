# Goal: Create an Image that runs redis-server
# Specify base image
FROM alpine
# Install additional packages
RUN apk add --update gcc
RUN apk add --update redis
# Specify command to run on startup
CMD ["redis-server"]