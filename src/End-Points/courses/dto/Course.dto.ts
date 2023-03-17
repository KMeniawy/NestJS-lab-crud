import { IsInt, IsNotEmpty, IsString} from "class-validator";

export class CourseDto{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    description:string;

    @IsNotEmpty()
    @IsInt()
    duration:number;

}