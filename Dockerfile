# Use the official Node.js image
FROM node:21-slim AS production

# Set working directory
WORKDIR /app

# Copy only necessary files for the build
COPY package.json ./

# Clear npm cache, set faster registry, and install dependencies
RUN npm cache clean --force && \
    npm config set registry https://registry.yarnpkg.com && \
    npm install --production --loglevel verbose

# Copy the rest of the app source
COPY . .

# Build the Next.js app
RUN npm run build

# Expose Next.js default port
EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "start"]
