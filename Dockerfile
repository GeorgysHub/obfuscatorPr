FROM node:latest
COPY ./obfuscator/package*.json ./
RUN npm install
COPY ./obfuscator ./
CMD ["npm", "run", "obfuscator"]