FROM node:16.13.0 as builder

WORKDIR /app

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:16.13.0

WORKDIR /app

COPY --from=builder /app  .

EXPOSE 3000

ENV HOST 0.0.0.0
ENV NUXT_PORT=3000


CMD [ "yarn", "start" ]
