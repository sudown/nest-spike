// feedbacks.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FeedbacksService } from './feedbacks.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { Feedback } from './entities/feedback.entity';

@ApiTags('Feedbacks')
@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) {}

  @Post()
  create(@Body() createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return this.feedbacksService.create(createFeedbackDto);
  }

  @Get()
  findAll(): Promise<Feedback[]> {
    return this.feedbacksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Feedback | null> {
    return this.feedbacksService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFeedbackDto: UpdateFeedbackDto,
  ): Promise<Feedback> {
    return this.feedbacksService.update(+id, updateFeedbackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Feedback> {
    return this.feedbacksService.remove(+id);
  }
}
