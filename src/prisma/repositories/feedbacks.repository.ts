import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma } from '@prisma/client';
import { Feedback } from 'src/feedbacks/entities/feedback.entity';
import { PrismaFeedbackMapper } from 'src/prisma/mappers/prisma-feedback-mapper';
import { CreateFeedbackDto } from 'src/feedbacks/dto/create-feedback.dto';

interface IFeedbacksRepository {
  create(data: CreateFeedbackDto): Promise<Feedback>;
  findAll(): Promise<Feedback[]>;
  findOne(Id: number): Promise<Feedback | null>;
  update(Id: number, data: Prisma.FeedbackUpdateInput): Promise<Feedback>;
  delete(Id: number): Promise<Feedback>;
}

@Injectable()
export class FeedbacksRepository implements IFeedbacksRepository {
  constructor(private prisma: PrismaService) {}

  async create(feedback: CreateFeedbackDto): Promise<Feedback> {
    const raw = PrismaFeedbackMapper.toPersistence(feedback);
    const response = await this.prisma.feedback.create({
      data: raw,
    });

    return PrismaFeedbackMapper.toDomain(response);
  }

  async findAll(): Promise<Feedback[]> {
    const feedbacks = await this.prisma.feedback.findMany();

    return feedbacks.map(PrismaFeedbackMapper.toDomain);
  }

  async findOne(Id: number): Promise<Feedback> {
    const feedback = await this.prisma.feedback.findFirst({
      where: { Id },
    });

    if (!feedback) {
      throw new Error('Feedback não encontrado');
    }

    return PrismaFeedbackMapper.toDomain(feedback);
  }

  async update(Id: number, feedback: Feedback): Promise<Feedback> {
    const raw = PrismaFeedbackMapper.toPersistence(feedback);
    const response = await this.prisma.feedback.update({
      where: { Id },
      data: raw,
    });

    return PrismaFeedbackMapper.toDomain(response);
  }

  async delete(Id: number): Promise<Feedback> {
    const response = await this.prisma.feedback.delete({
      where: {
        Id,
      },
    });
    return PrismaFeedbackMapper.toDomain(response);
  }
}
