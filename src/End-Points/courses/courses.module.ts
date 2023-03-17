import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Course } from './entities/course.entity';
import { CourseSchema } from './courses.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Course.name,schema:CourseSchema}])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
