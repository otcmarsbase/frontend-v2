FROM node:18 as builder-image

WORKDIR /usr/project/

COPY package*.json ./
RUN yarn install

COPY .env craco.config.js tsconfig.json .eslintrc.json ./
COPY ./public/ ./public/
COPY ./src/ ./src/
RUN yarn run build

FROM nginx:alpine

COPY ./docker/entrypoint.sh ./docker/generate-js-env.sh ./
RUN chmod +x ./entrypoint.sh ./generate-js-env.sh
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder-image /usr/project/build/ /usr/share/nginx/project/

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]
