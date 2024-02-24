FROM node:21.6.2-alpine3.18

WORKDIR backend
COPY package*.json ./
RUN npm install
COPY . ./

CMD ["npm", "start"]

# Expose port
EXPOSE 4000
