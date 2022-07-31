import { Module } from '@nestjs/common';
import { GaleryController } from './galery.controller';
import { GaleryService } from './galery.service';
import { PrismaService } from '../prisma.service';
import { MinioClientModule } from 'src/minio-client/minio-client.module';

@Module({
  imports: [MinioClientModule],
  controllers: [GaleryController],
  providers: [PrismaService, GaleryService],
})
export class GaleryModule {}
