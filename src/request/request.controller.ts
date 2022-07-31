import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { RequestService } from './request.service';
import { request as RequestModel } from '@prisma/client';
import { requestData as CreateRequestDto } from '../dtos/createRequestDto';

@Controller('request')
export class RequestController {
  constructor(private requestService: RequestService) {}

  @Get()
  async getAllRequests(): Promise<RequestModel[]> {
    return this.requestService.findAll();
  }

  @Post('')
  async enterRequest(
    @Body()
    requestData: CreateRequestDto,
  ): Promise<RequestModel> {
    return this.requestService.createRequest(requestData);
  }

  @Delete('/:id')
  async deleteRequest(@Param('id') id: string): Promise<RequestModel> {
    return this.requestService.deleteRequest({ id: Number(id) });
  }
}
