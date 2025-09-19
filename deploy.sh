#!/bin/bash

# Production deployment script for Chidanandan's Portfolio

set -e  # Exit on any error

echo "🚀 Starting production deployment..."

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "❌ Error: .env file not found!"
    echo "Please create a .env file based on env.example"
    exit 1
fi

# Check for required environment variables
source .env

if [ -z "$SENDGRID_API_KEY" ] || [ "$SENDGRID_API_KEY" = "your_sendgrid_api_key_here" ]; then
    echo "⚠️  Warning: SENDGRID_API_KEY not properly configured. Email functionality will be disabled."
fi

# Install dependencies
echo "📦 Installing dependencies..."
yarn install --frozen-lockfile

# Run type checking
echo "🔍 Running type checks..."
yarn check

# Build the application
echo "🏗️  Building application..."
yarn build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed! dist directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"

# Option to start production server
read -p "Start production server? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌟 Starting production server..."
    NODE_ENV=production yarn start
else
    echo "📝 To start the production server later, run: NODE_ENV=production yarn start"
fi

echo "🎉 Deployment complete!"
