# Instalar dependencias solo cuando sea necesario
FROM node:18-alpine3.15 AS deps
# Comprueba por qué podría ser necesario libc6-compat
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Construir la aplicación con dependencias en caché
FROM node:18-alpine3.15 AS builder
RUN npm install -g pnpm
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# Imagen de producción, copiar todos los archivos y ejecutar
FROM node:18-alpine3.15 AS runner

# Instalar pnpm
RUN npm install -g pnpm

# Establecer directorio de trabajo
WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

COPY --from=builder /app/dist ./dist



CMD [ "node", "dist/main" ]