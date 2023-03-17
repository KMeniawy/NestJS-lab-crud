import { Schema } from "mongoose";

export const CourseSchema = new Schema({
    name: 'String',
    description: 'String',
    duration: 'Number'
});