import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { PrismaService } from '../prisma.service';
import { MinioClientModule } from 'src/minio-client/minio-client.module';
@Module({
  imports: [MinioClientModule],
  controllers: [ServicesController],
  providers: [PrismaService, ServicesService],
})
export class ServicesModule {}
