import { EntityRepository, Repository } from "typeorm";
import { Manager } from "../models/Manager";

@EntityRepository(Manager)
class ManagersRepository extends Repository<Manager>{

}

export {ManagersRepository}