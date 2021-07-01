import { Response, Request } from "express";
import { getCustomRepository } from "typeorm";

import { HostelRepository } from "../repositories/HostelsRepository";

class HostelController {
  async create(request: Request, response: Response) {
    const { number_hostel } = request.body;

    const hostelRepository = getCustomRepository(HostelRepository);

    const hostelAlreadyExists = await hostelRepository.findOne({
      number_hostel,
    });

    if (hostelAlreadyExists) {
      return response.status(400).json({
        error: "Hostel already exits",
      });
    }

    const hostelStudenty = hostelRepository.create({
      number_hostel,
    });

    await hostelRepository.save(hostelStudenty);

    return response.send(hostelStudenty);
  }

  async show(request: Request, response: Response) {
    const hostelRepository = getCustomRepository(HostelRepository);

    const allhostels = await hostelRepository.find();

    return response.json(allhostels);
  }
}

export { HostelController };
