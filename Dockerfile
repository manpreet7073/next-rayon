# Use the official Node.js image
FROM node:21-slim AS production

# Set working directory
WORKDIR /app
# Copy the rest of the app source
ADD . /app
RUN npm install
RUN NODE_OPTIONS="--max-old-space-size=9096" 
RUN npm run build

# Expose Next.js default port
EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "start"]
