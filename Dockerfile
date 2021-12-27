FROM node:16.13.1
WORKDIR /app
COPY package.json ./
RUN yarn set version berry
COPY .yarnrc.yml ./
RUN yarn install
COPY . .
CMD ["yarn", "start"]