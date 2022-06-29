FROM node:16.15.1-buster-slim

RUN npm install --location=global node-sass

USER node
RUN mkdir --parents /home/node/ascender
WORKDIR /home/node/ascender

ENTRYPOINT ["node-sass"]
CMD ["src/sass/main.scss", "--output-style", "compressed", "--output", "build"]
