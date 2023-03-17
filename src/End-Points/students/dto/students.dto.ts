import { IsArray, IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class StudentDto{
    @IsNotEmpty()
    @IsString()
    // @Min(3,{message: "Student name must be at least 3 characters"})
    name:string;

    @IsNotEmpty()
    @IsInt()
    @Min(20,{message: "Student must be at least 20 years old"})
    @Max(40,{message: "Student must be younger than 41 years old"})
    age:number;

    @IsArray()
    courses:string[];
}