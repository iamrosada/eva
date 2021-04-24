import { EntityRepository, Repository } from "typeorm";
import {HostelStudenty} from "../models/Hostel";

@EntityRepository(HostelStudenty)
class  HostelRepository extends Repository<HostelStudenty> {

}

export {HostelRepository}