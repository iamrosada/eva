import { EntityRepository, Repository } from "typeorm";
import { Student } from "../models/Student";

@EntityRepository(Student)
class  StudentsRepository extends Repository<Student> {
}

export {StudentsRepository}