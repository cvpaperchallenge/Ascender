FROM node:16.15.1-buster-slim

USER node
RUN mkdir --parents /home/node/ascender
WORKDIR /home/node/ascender

ENTRYPOINT ["npm"]
CMD ["install"]
