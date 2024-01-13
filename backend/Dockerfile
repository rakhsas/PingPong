FROM node:20.10.0

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install Next.js and other dependencies
# RUN npm install
RUN npm install -g @nestjs/cli
RUN npm install fs-extra
RUN npm install
COPY . .
EXPOSE 4200
# CMD ["npm", "run", "start"]
CMD ["npm", "run", "start:dev"]
# WORKDIR /app/app
# CMD ["tail", "-f", "/dev/null"]
# CMD ["ls", "-l"]
# CMD ["pwd"]

