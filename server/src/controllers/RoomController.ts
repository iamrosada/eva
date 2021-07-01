import { Response, Request } from "express";
import { getCustomRepository } from "typeorm";
import { RoomsRepository } from "../repositories/RoomsRepository";

class RoomController {
  async create(request: Request, response: Response) {
    const { numberofRoom } = request.body;

    const roomsRepository = getCustomRepository(RoomsRepository);

    const roomAlreadyExists = await roomsRepository.findOne({
      numberofRoom,
    });

    if (roomAlreadyExists) {
      return response.status(400).json({
        error: "Room already exits",
      });
    }

    const Roomstudent = roomsRepository.create({
      numberofRoom,
    });

    await roomsRepository.save(Roomstudent);

    return response.send(Roomstudent);
  }
  async show(request: Request, response: Response) {
    const roomsRepository = getCustomRepository(RoomsRepository);

    const allrooms = await roomsRepository.find();

    return response.json(allrooms);
  }
  async update(request: Request, response: Response) {
    const roomsRepository = getCustomRepository(RoomsRepository);
    const allrooms = await roomsRepository.findOne(request.params.id);

    if (allrooms) {
      getCustomRepository(RoomsRepository).merge(allrooms, request.body);
      const results = await getCustomRepository(RoomsRepository).save(allrooms);
      return response.json(results);
    }

    return response.json({ error: "Not Room found" });
  }
}

export { RoomController };
