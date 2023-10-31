import { ObjectId } from "mongodb";

export class studentModel {
  public _id: ObjectId;
  public name: string;
  public course: string;
  public Department: string;
  public regnum: number;
  public scores: number;

  constructor(
    name: string,
    course: string,
    Department: string,
    regnum: number,
    scores: number,

  ) {
    this._id = new ObjectId();
    this.name = name;
    this.course = course;
    this.Department = Department;
    this.regnum = regnum;
    this.scores = scores;

  }
}
