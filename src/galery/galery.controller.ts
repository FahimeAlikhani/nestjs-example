import {
  Controller,
  Post,
  Param,
  Body,
  Delete,
  Get,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import {
  FileInterceptor,
  FileFieldsInterceptor,
} from '@nestjs/platform-express';
import { GaleryService } from './galery.service';
import { galery as GaleryModel } from '@prisma/client';
import { galeryData as CreateGaleryDto } from '../dtos/createGaleryDto';
import { BufferedFile } from 'src/minio-client/file.model';

@Controller('galery')
export class GaleryController {
  constructor(private galeryService: GaleryService) {}

  @Get()
  async getAllGalery(): Promise<GaleryModel[]> {
    return this.galeryService.findAll();
  }

  @Post('')
  async enterGalery(
    @Body()
    galeryData: CreateGaleryDto,
  ): Promise<GaleryModel> {
    return this.galeryService.createGalery(galeryData);
  }
  @Delete('/:id')
  async deleteGalery(@Param('id') id: string): Promise<GaleryModel> {
    return this.galeryService.deleteGalery({ id: Number(id) });
  }
  //minio
  @Post('single')
  @UseInterceptors(FileInterceptor('image'))
  async uploadSingle(@UploadedFile() image: BufferedFile) {
    return await this.galeryService.uploadSingle(image);
  }
  @Post('many')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image1', maxCount: 1 },
      { name: 'image2', maxCount: 1 },
    ]),
  )
  async uploadMany(@UploadedFiles() files: BufferedFile) {
    return this.galeryService.uploadMany(files);
  }
}
