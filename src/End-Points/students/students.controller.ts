import { Controller, Get, Post, Body, Patch, Param, Delete,UsePipes,ValidationPipe } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentDto } from './dto/students.dto';

@Controller('/students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createStudentDto: StudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @UsePipes(ValidationPipe)
  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @UsePipes(ValidationPipe)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: StudentDto) {
    return this.studentsService.update(id, updateStudentDto);
  }

  @UsePipes(ValidationPipe)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
}
