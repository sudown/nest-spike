import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { FeedbacksRepository } from 'src/prisma/repositories/feedbacks.repository';
import { Feedback } from './entities/feedback.entity';

@Injectable()
export class FeedbacksService {
  constructor(private feedbacksRepository: FeedbacksRepository) {}

  create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const feedback = new Feedback(createFeedbackDto);
    return this.feedbacksRepository.create(feedback);
  }

  findAll(): Promise<Feedback[]> {
    return this.feedbacksRepository.findAll();
  }

  findOne(Id: number): Promise<Feedback | null> {
    return this.feedbacksRepository.findOne(Id);
  }

  update(Id: number, updateFeedbackDto: UpdateFeedbackDto): Promise<Feedback> {
    const feedback = new Feedback(updateFeedbackDto);
    return this.feedbacksRepository.update(Id, feedback);
  }

  remove(Id: number): Promise<Feedback> {
    return this.feedbacksRepository.delete(Id);
  }
}
