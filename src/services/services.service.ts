import { Injectable } from '@nestjs/common';
import { service as ServicesModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { servicesData as CreateServicesDto } from '../dtos/createServicesDto';
import { MinioClientService } from 'src/minio-client/minio-client.service';
import { BufferedFile } from 'src/minio-client/file.model';

@Injectable()
export class ServicesService {
  constructor(
    private prisma: PrismaService,
    private minioClientService: MinioClientService,
  ) {}

  async findAll(): Promise<ServicesModel[]> {
    return this.prisma.service.findMany();
  }

  async createServices(
    servicesData: CreateServicesDto,
  ): Promise<ServicesModel> {
    return this.prisma.service.create({
      data: servicesData,
    });
  }

  async deleteServices(
    where: Prisma.serviceWhereUniqueInput,
  ): Promise<ServicesModel> {
    return this.prisma.service.delete({
      where,
    });
  }
  //minio
  async uploadSingle(image: BufferedFile) {
    const uploaded_image = await this.minioClientService.upload(image);

    return {
      image_url: uploaded_image.url,
      message: 'Successfully uploaded to MinIO',
    };
  }
}
