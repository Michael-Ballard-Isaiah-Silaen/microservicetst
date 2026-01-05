# Use Node alpine image which is compatible with ARM/Armbian
FROM node:18-alpine

WORKDIR /app

RUN npm init -y && \
    npm install express cors

COPY Server.js .
COPY job_list.json .
COPY index.html .

EXPOSE 8880

CMD ["node", "Server.js"]
