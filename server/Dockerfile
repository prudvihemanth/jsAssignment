FROM node:8.9.0


# use nodemon for development
RUN npm install --global nodemon


# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .
COPY package-lock.json .

# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8000