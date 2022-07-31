import {
  Controller,
  Post,
  Param,
  Body,
  Delete,
  Get,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProjectService } from './project.service';
import { service as ProjectModel } from '@prisma/client';
import { projectData as CreateProjectDto } from '../dtos/createProjectDto';
import { BufferedFile } from 'src/minio-client/file.model';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  async getAllProject(): Promise<ProjectModel[]> {
    return this.projectService.findAll();
  }

  @Post('')
  async enterServices(
    @Body()
    projectData: CreateProjectDto,
  ): Promise<ProjectModel> {
    return this.projectService.createProject(projectData);
  }

  @Delete('/:id')
  async deleteProject(@Param('id') id: string): Promise<ProjectModel> {
    return this.projectService.deleteProject({ id: Number(id) });
  }
  //minio
  @Post('single')
  @UseInterceptors(FileInterceptor('image'))
  async uploadSingle(@UploadedFile() image: BufferedFile) {
    return await this.projectService.uploadSingle(image);
  }
}
