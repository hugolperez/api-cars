FROM node:lts-alpine
ENV NODE_ENV=production
ENV PORT=4000
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN yarn install --silent
COPY . .
EXPOSE 4000
CMD ["yarn", "start"]
