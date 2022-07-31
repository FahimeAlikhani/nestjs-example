import { Injectable } from '@nestjs/common';
import { galery as GaleryModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { galeryData as CreateGaleryDto } from '../dtos/createGaleryDto';
import { MinioClientService } from 'src/minio-client/minio-client.service';
import { BufferedFile } from 'src/minio-client/file.model';

@Injectable()
export class GaleryService {
  constructor(
    private prisma: PrismaService,
       private minioClientService: MinioClientService,
  ) {}

  async findAll(): Promise<GaleryModel[]> {
    return this.prisma.galery.findMany();
  }

  async createGalery(galeryData: CreateGaleryDto): Promise<GaleryModel> {
    return this.prisma.galery.create({
      data: galeryData,
    });
  }

  async deleteGalery(
    where: Prisma.galeryWhereUniqueInput,
  ): Promise<GaleryModel> {
    return this.prisma.galery.delete({
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
  async uploadMany(files: BufferedFile) {
    const image1 = files['image1'][0];
    const uploaded_image1 = await this.minioClientService.upload(image1);

    const image2 = files['image2'][0];
    const uploaded_image2 = await this.minioClientService.upload(image2);

    return {
      image1_url: uploaded_image1.url,
      image2_url: uploaded_image2.url,
      message: 'Successfully uploaded mutiple image on MinioS3',
    };
  }
}
