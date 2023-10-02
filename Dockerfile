FROM node:18 as build-stage
WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn run build

FROM nginx
COPY --from=build-stage /app/build /usr/share/nginx/html