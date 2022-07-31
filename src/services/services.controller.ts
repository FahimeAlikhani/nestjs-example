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
import { ServicesService } from './services.service';
import { service as ServicesModel } from '@prisma/client';
import { servicesData as CreateServicesDto } from '../dtos/createServicesDto';
import { BufferedFile } from 'src/minio-client/file.model';

@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @Get()
  async getAllRequests(): Promise<ServicesModel[]> {
    return this.servicesService.findAll();
  }

  @Post('')
  async enterServices(
    @Body()
    servicesData: CreateServicesDto,
  ): Promise<ServicesModel> {
    return this.servicesService.createServices(servicesData);
  }

  @Delete('/:id')
  async deleteServices(@Param('id') id: string): Promise<ServicesModel> {
    return this.servicesService.deleteServices({ id: Number(id) });
  }
  //minio
  @Post('single')
  @UseInterceptors(FileInterceptor('image'))
  async uploadSingle(@UploadedFile() image: BufferedFile) {
    return await this.servicesService.uploadSingle(image);
  }
}
