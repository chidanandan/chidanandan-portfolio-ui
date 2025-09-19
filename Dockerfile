# Use Node.js 18 LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --production=false

# Copy source code
COPY . .

# Build the application
RUN yarn build

# Remove dev dependencies to reduce image size
RUN yarn install --frozen-lockfile --production=true && yarn cache clean

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S portfolio -u 1001

# Change ownership of app directory
RUN chown -R portfolio:nodejs /app
USER portfolio

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start the application
CMD ["yarn", "start"]
