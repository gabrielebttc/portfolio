# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Final
FROM alpine:latest
RUN mkdir -p /var/www/gabrielebuttice.com
# Next.js con 'output: export' genera la cartella 'out'
COPY --from=build /app/out /var/www/gabrielebuttice.com