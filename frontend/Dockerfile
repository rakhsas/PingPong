# Use the official Node image as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Expose port 3000 (or the port your NestJS app is running on)
EXPOSE 3000

# Start the NestJS app
CMD ["npm", "run", "start"]
