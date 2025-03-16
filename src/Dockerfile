# Stage 1: Build Stage
FROM node:20-alpine AS build
LABEL maintainer="Pablo Hassan <sesmanovic@gmail.com>"

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Set build-time arguments and environment variables
# Removed Clerk environment variables

# Build the application
RUN pnpm run build

# Stage 2: Production Stage
FROM nginx:alpine
LABEL maintainer="Pablo Hassan <sesmanovic@gmail.com>"

# Copy the built static files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom nginx configuration that handles client-side routing
COPY ./src/nginx_frontend.conf /etc/nginx/conf.d/default.conf

# Expose port 5173
EXPOSE 5173

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
