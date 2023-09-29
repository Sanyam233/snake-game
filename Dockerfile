#STAGE 0
FROM node:20-alpine3.17 AS build

WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

#STAGE 1
FROM nginx:1.25.2-alpine

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 443

#turning on our nginx 
CMD ["nginx", "-g", "daemon off;"]