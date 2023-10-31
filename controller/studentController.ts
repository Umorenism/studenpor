import { Request, Response } from "express";
import { statusCode } from "../utils/statusCode";
import { client, db } from "../utils/dbConfig";
import { studentModel } from "../model/studentModel";
import { ObjectId } from "mongodb";

export const createStudentAccount = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const { name, course, Department, regnum, scores } =
      req.body;

    const studentPortal = new studentModel(
      name,
      course,
      Department,
      regnum,
      scores,

    );

    await db.insertOne(studentPortal);

    return res.status(statusCode.CREATED).json({
      message: "student portal created",
      data: studentPortal,
    });
  } catch (error) {
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Error occured",
    });
  }
};

export const readStudentAccount = async (req: Request, res: Response) => {
  try {
    await client.connect();

    const studentPortal = await db.find().toArray();

    return res.status(statusCode.OK).json({
      message: "student portal info found",
      data: studentPortal,
    });
  } catch (error) {
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Error",
    });
  }
};

export const readStudentAccountByID = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const { studentPortalID } = req.params;

    const studentPortal = await db.findOne({ _id: new ObjectId(studentPortalID) });

    return res.status(statusCode.OK).json({
      message: "student portal info found by ID",
      data: studentPortal,
    });
  } catch (error) {
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Error",
    });
  }
};

export const readStudentAccountByCategory = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const { category } = req.body;

    const studentPortal = await db.find({ category }).toArray();

    return res.status(statusCode.OK).json({
      message: "student portal info found by category",
      data: studentPortal,
    });
  } catch (error) {
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Error",
    });
  }
};

export const updateStudentAccount = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const { studentPortalID } = req.params;
    const { name } = req.body;

    const studentPortal = await db.updateOne(
      { _id: new ObjectId(studentPortalID) },
      { $set: { name } }
    );

    return res.status(statusCode.CREATED).json({
      message: "student port info updated...",
      data: studentPortal,
    });
  } catch (error) {
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Error",
    });
  }
};

export const deleteStudentAccount = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const { studentPortalID } = req.params;

    await db.deleteOne({ _id: new ObjectId(studentPortalID) });

    return res.status(statusCode.CREATED).json({
      message: "studuent portal info delete",
    });
  } catch (error) {
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Error",
    });
  }
};
