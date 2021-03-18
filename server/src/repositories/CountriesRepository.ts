import { EntityRepository, Repository } from "typeorm";
import {Country} from "../models/Country";

@EntityRepository(Country)
class  CountriesRepository extends Repository<Country> {

}

export {CountriesRepository}