FROM node:21.6.2-alpine3.18

WORKDIR frontend
COPY package*.json ./
RUN npm --version
RUN npm install
COPY . ./

CMD ["npm", "start"]

# Expose port
EXPOSE 3000
