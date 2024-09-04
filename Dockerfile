# Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript files (if applicable)
RUN npm run build

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
