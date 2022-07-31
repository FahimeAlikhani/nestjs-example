import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestController } from './request/request.controller';
import { RequestService } from './request/request.service';
import { RequestModule } from './request/request.module';
import { ServicesController } from './services/services.controller';
import { ServicesService } from './services/services.service';
import { ServicesModule } from './services/services.module';
import { GaleryController } from './galery/galery.controller';
import { GaleryService } from './galery/galery.service';
import { GaleryModule } from './galery/galery.module';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';
import { ProjectModule } from './project/project.module';
import { PrismaService } from './prisma.service';
import { MinioModule } from 'nestjs-minio-client';
import { MinioClientModule } from './minio-client/minio-client.module';

@Module({
  imports: [
    RequestModule,
    ServicesModule,
    GaleryModule,
    ProjectModule,
    MinioModule.register({
      endPoint: 'storage-api.jadee.org',
      port: 9000,
      useSSL: true,
      accessKey: '94TWG9URYZLIW4SVKG73',
      secretKey: 'VBiNXLp4igiZ6dAdOFezzPJyYOybx8Ox+8KdgZYE',
    }),
    MinioClientModule,
  ],
  controllers: [
    AppController,
    RequestController,
    ServicesController,
    GaleryController,
    ProjectController,
  ],
  providers: [
    AppService,
    PrismaService,
    RequestService,
    ServicesService,
    GaleryService,
    ProjectService,
  ],
})
export class AppModule {}
