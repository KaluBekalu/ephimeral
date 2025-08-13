# Stage 1: Build the React application
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx (or a simple web server)
FROM nginx:alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]