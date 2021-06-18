FROM node:14-buster-slim
ARG NPM_REGISTRY=https://registry.npmjs.org

# Fix openjdk-11-jdk-headless error
RUN mkdir -p /usr/share/man/man1

RUN apt-get update && apt-get install -y python3 python3-dev python3-pip openjdk-11-jdk-headless

WORKDIR /app
COPY package.json /app

RUN yarn config set registry ${NPM_REGISTRY} \
    && yarn config set strict-ssl false

RUN cd /app && yarn install --frozen-lockfile

COPY . /app

EXPOSE 3000 8083

# Configure the entrypoint script.
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["yarn", "offline"]
