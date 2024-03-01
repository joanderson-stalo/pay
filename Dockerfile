FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g vite && npm install && \
    npm install vite-plugin-pwa

COPY . .

RUN npm run build

EXPOSE 80

CMD ["npm", "run", "dev"]

