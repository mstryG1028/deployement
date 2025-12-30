############################
# 1️⃣ Build React (Client)
############################
FROM node:22-alpine AS client-build

WORKDIR /app/client

COPY client/package*.json ./
RUN npm install

COPY client .
RUN npm run build


############################
# 2️⃣ Backend (Server)
############################
FROM node:22-alpine

WORKDIR /app

# Install server dependencies
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm install

# Copy server code
COPY server .

# Copy built frontend from client stage
COPY --from=client-build /app/client/dist ../client/dist

# Expose Render port
EXPOSE 3000

# Start backend
CMD ["npm", "start"]
