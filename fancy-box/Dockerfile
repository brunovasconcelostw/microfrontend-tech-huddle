FROM node as build

WORKDIR /

COPY . .

RUN npm ci
RUN npm run build

FROM nginx:alpine as server

WORKDIR /build

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /build /usr/share/nginx/www
