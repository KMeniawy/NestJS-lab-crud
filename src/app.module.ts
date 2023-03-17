import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './End-Points/courses/courses.module';
import { StudentsModule } from './End-Points/students/students.module';

@Module({
  imports: [CoursesModule, StudentsModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/StudentsNestLabDay2')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
