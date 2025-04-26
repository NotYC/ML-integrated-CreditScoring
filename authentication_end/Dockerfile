FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Expose backend port (5001)
EXPOSE 5001

CMD ["node", "index.js"]
