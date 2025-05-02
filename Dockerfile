# -------- BUILD STAGE --------
    FROM node:21-alpine AS builder

    # Set working directory
    WORKDIR /app
    
    # Install dependencies
    COPY package.json package-lock.json ./
    RUN npm install
    
    # Copy app source
    COPY . .
    
    # Build the Next.js app
    RUN npm run build
    
    # -------- RUNTIME STAGE --------
    FROM node:21-alpine AS runner
    
    WORKDIR /app
    
    # Install only production dependencies
    COPY package.json package-lock.json ./
    RUN npm install --omit=dev
    
    # Copy built assets from builder stage
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/package.json ./package.json
    
    # Expose Next.js default port
    EXPOSE 3000
    
    # Run the production server
    CMD ["npm", "start"]
    