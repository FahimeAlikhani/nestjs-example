# start nestjs project 

npm install -g @nestjs/cli
nest new peak-backend
npm install prisma --save-dev        ****** npm install --save @nestjs/mongoose mongoose
npx prisma
npx prisma init


# prisma
npx prisma migrate dev --name init
npm install @prisma/client

# module
nest g controller test
nest g service test
nest g module test

# minIO

npm install nestjs-minio-client --save

nest g module minio-client
nest g service minio-client

then create a config file  = touch src/minio-client/config.ts
then                       = touch src/minio-client/file.model.ts