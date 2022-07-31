import { Injectable } from '@nestjs/common';
import { request as RequestModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { requestData as CreateRequestDto } from '../dtos/createRequestDto';

@Injectable()
export class RequestService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<RequestModel[]> {
    return this.prisma.request.findMany();
  }

  async createRequest(requestData: CreateRequestDto): Promise<RequestModel> {
    return this.prisma.request.create({
      data: requestData,
    });
  }

  async deleteRequest(
    where: Prisma.requestWhereUniqueInput,
  ): Promise<RequestModel> {
    return this.prisma.request.delete({
      where,
    });
  }
}
