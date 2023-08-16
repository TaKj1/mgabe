# Use an official Node.js runtime as a base image
FROM node:latest

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Install serve - this will serve your React app
RUN yarn global add serve

# Copy package.json, package-lock.json, and yarn.lock
COPY package*.json yarn.lock ./

# Install all dependencies
RUN yarn install

# Copy everything over to Docker
COPY . .

# Build the application
RUN yarn run build

# Run the app by serving the static files in the build directory
CMD serve -s build -l 3000

# Expose port 3000 to the Docker host, so we can access it from the outside
EXPOSE 3000

