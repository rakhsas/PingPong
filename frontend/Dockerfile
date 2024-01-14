FROM node:20.10.0

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install Next.js and other dependencies
# RUN npm install
RUN npm install -g @angular/cli
RUN npm install fs-extra
COPY . .
EXPOSE 4200
WORKDIR /app/app
RUN npm install
# CMD ["ls", "-l"]
# CMD ["pwd"]
CMD ["ng", "serve", "--host", "0.0.0.0"]
# CMD ["npm", "run", "build:serverless"]
# CMD ["tail", "-f", "/dev/null"]

