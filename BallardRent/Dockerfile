# Use Node alpine image which is compatible with ARM/Armbian
FROM node:18-alpine

WORKDIR /app

RUN npm init -y && \
    npm install express cors

COPY Server.js .
COPY rent_price.json .
COPY index.html .

EXPOSE 8881

CMD ["node", "Server.js"]