import { EntityRepository, Repository } from "typeorm";
import {CollegeStudenty} from "../models/College";

@EntityRepository(CollegeStudenty)
class  CollegeRepository extends Repository<CollegeStudenty> {

}

export {CollegeRepository}