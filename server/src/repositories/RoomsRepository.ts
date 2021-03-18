import { EntityRepository, Repository } from "typeorm";
import {Room} from "../models/Room";

@EntityRepository(Room)
class  RoomsRepository extends Repository<Room> {

}

export {RoomsRepository}