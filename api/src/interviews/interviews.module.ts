import { Module } from '@nestjs/common';
import { InterviewsResolver } from './interviews.resolver';

@Module({
  providers: [InterviewsResolver]
})
export class InterviewsModule {}
