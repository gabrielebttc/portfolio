# Stage 1: Build
FROM node:20-alpine AS build

# Imposta la cartella di lavoro
WORKDIR /app

# Copia i file dei pacchetti e installa le dipendenze
COPY package*.json ./
RUN npm install

# Copia il resto del codice e compila
COPY . .
RUN npm run build

# Stage 2: Final
FROM alpine:latest

# Crea la directory di destinazione
RUN mkdir -p /var/www/gabrielebuttice.com

# Copia solo la cartella dist dallo stage di build alla cartella finale
COPY --from=build /app/dist /var/www/gabrielebuttice.com


