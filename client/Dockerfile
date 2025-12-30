#build stage

FROM node:22-alpine as BUILD
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#production stage
FROM node:22-alpine

WORKDIR /app

RUN npm install -g serve
ENV PATH="/user/local/bin:$PATH"
COPY --from=BUILD /app/dist ./dist

EXPOSE 3000
CMD ["serve","-s","dist","-l", "3000"]
   
