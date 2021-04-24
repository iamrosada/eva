import { EntityRepository, Repository } from "typeorm";
import {ImageStudenty} from "../models/Post";

@EntityRepository(ImageStudenty)
class  ImagePostRepository extends Repository<ImageStudenty> {

}

export {ImagePostRepository}