# -------- BUILD STAGE --------
    FROM node:21-slim AS builder

    # Set working directory
    WORKDIR /app
    
    # Install dependencies
    COPY package.json package-lock.json ./
    RUN npm install
    
    # Copy the rest of the app source
    COPY . .
    
    # Build the Next.js app
    RUN npm run build
    
    # -------- RUNTIME STAGE --------
    FROM node:21-slim AS runner
    
    # Set working directory
    WORKDIR /app
    
    # Install only production dependencies
    COPY package.json package-lock.json ./
    RUN npm install --omit=dev
    
    # Copy built assets and other required files
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/package.json ./package.json
    COPY --from=builder /app/next.config.js ./next.config.js
    COPY --from=builder /app/tsconfig.json ./tsconfig.json
    
    # Expose Next.js default port
    EXPOSE 3000
    
    # Run the production server
    CMD ["npm", "start"]
    