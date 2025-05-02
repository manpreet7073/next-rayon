# Use the official Node.js image from Docker Hub
FROM node:21-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the Next.js app (necessary for production)
RUN npm run build

# Expose the app port (Next.js default is 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
