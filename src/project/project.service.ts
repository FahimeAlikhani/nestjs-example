import { Injectable } from '@nestjs/common';
import { service as ProjectModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { projectData as CreateProjectDto } from '../dtos/createProjectDto';
import { MinioClientService } from 'src/minio-client/minio-client.service';
import { BufferedFile } from 'src/minio-client/file.model';

@Injectable()
export class ProjectService {
  constructor(
    private prisma: PrismaService,
    private minioClientService: MinioClientService,
  ) {}

  async findAll(): Promise<ProjectModel[]> {
    return this.prisma.project.findMany();
  }

  async createProject(projectData: CreateProjectDto): Promise<ProjectModel> {
    return this.prisma.project.create({
      data: projectData,
    });
  }

  async deleteProject(
    where: Prisma.projectWhereUniqueInput,
  ): Promise<ProjectModel> {
    return this.prisma.project.delete({
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
