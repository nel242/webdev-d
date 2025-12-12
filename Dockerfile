# Simple web-dev environment
FROM node:20-alpine

# Install useful tools
RUN apk add --no-cache git bash

# Create app directory
WORKDIR /usr/src/app

# Default command is just a shell
CMD ["bash"]

