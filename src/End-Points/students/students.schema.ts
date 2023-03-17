import { Schema, Types } from "mongoose";

export const StudentSchema = new Schema({
    name: 'String',
    age: 'Number',
    courses: {
        type: [Types.ObjectId],
        ref: 'Course'
    }
});