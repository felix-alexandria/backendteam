import mongoose, { Date, Schema, model } from "mongoose";

interface iTodo {
  taskName: string;
  description: string;
  dueDate?: Date;
}

interface iTodoData extends iTodo, Document {}

const TodoModel = new Schema<iTodoData>(
  {
    taskName: {
      type: String,
    },
    description: {
      type: String,
    },
    dueDate: {
      type: new Date(),
    },
  },
  { timestamps: true }
);

export default model<iTodoData>("todos", TodoModel);
