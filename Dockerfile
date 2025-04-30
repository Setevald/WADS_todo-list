# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the React app for production
RUN npm run build

# Install a simple server to serve the built app
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 5173

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]