import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICourse } from './courses.interface';
import { CourseDto } from './dto/Course.dto';


@Injectable()
export class CoursesService {
  constructor(@InjectModel('Course') private CourseModel: Model<ICourse>){}
  async create(createCourseDto: CourseDto) {
    const course = new this.CourseModel(createCourseDto);
    await course.save();
    return {message: 'course created successfully', data: course};
  }

  async findAll() {
    const courses = await this.CourseModel.find({});
    return courses;
  }

  async findOne(id: string) {
    const course = await this.CourseModel.findById(id);
    return course;
  }

  async update(id: string, updateCourseDto: CourseDto) {
    await this.CourseModel.findByIdAndUpdate(id,updateCourseDto);
    return `course with id ${id} is updated`;
  }

  async remove(id: string) {
    await this.CourseModel.findByIdAndRemove(id);
    return `course with id ${id} is removed`
  }
}
