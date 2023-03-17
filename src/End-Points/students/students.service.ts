import { Injectable } from '@nestjs/common';
import { StudentDto } from './dto/students.dto';
import { IStudent } from './students.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

const Projection = {
  _id:false,
  _v:false
}


@Injectable()
export class StudentsService {
  constructor(@InjectModel('Student') private StudentModel: Model<IStudent>){}
  async create(createStudentDto:StudentDto) {
    const student = new this.StudentModel(createStudentDto);
    await student.save();
    return {message: "student created", data: student}
  }

  async findAll() {
    const students = await this.StudentModel.find({}, Projection);
    return students;
  }

  async findOne(id: string) {
    const student = await this.StudentModel.findById(id,Projection).populate("courses");
    const {courses} = student;
    return {student,courses};
  }

  async update(id: string, updateStudentDto: StudentDto) {
    await this.StudentModel.findByIdAndUpdate(id, updateStudentDto);
    return `student with id ${id} is updated`;
}

  async remove(id: string) {
    await this.StudentModel.findByIdAndRemove(id);
    return `student with id ${id} is removed`;
}
}