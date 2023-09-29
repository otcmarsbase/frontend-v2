FROM node:18 as build-stage
WORKDIR /app

COPY . .

RUN yarn install

RUN yarn run build

FROM nginx
COPY --from=build-stage /app/build /usr/share/nginx/html