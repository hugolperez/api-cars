FROM node:lts-alpine
ENV NODE_ENV=production
ENV PORT=80
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN yarn install --silent
COPY . .
EXPOSE 80
CMD ["yarn", "start"]
