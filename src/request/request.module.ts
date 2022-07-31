import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { PrismaService } from '../prisma.service';

@Module({
    imports: [],
    controllers: [RequestController],
    providers: [PrismaService,RequestService],

})
export class RequestModule {}
