import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { StudentSchema } from './students.schema';
import { Student } from './entities/student.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:Student.name,schema:StudentSchema}])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
