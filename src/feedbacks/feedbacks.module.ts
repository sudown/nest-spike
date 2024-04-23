import { Module } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksController } from './feedbacks.controller';
import { FeedbacksRepository } from 'src/prisma/repositories/feedbacks.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FeedbacksController],
  providers: [FeedbacksService, PrismaService, FeedbacksRepository],
})
export class FeedbacksModule {}
