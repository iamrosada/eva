import { EntityRepository, Repository } from "typeorm";
import {Course} from "../models/Course";

@EntityRepository(Course)
class  CoursesRepository extends Repository<Course> {

}

export {CoursesRepository}