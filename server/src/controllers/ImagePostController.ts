import { Response, Request } from "express";
import { getCustomRepository } from "typeorm";

import { ImagePostRepository } from "../repositories/PostImageRepository";

class PostImage {
  async create(request: Request, response: Response) {
    const {
      originalname: name,
      size,
      filename: key,
      path: url = "",
    } = request.file;

    const imagemPostRepository = getCustomRepository(ImagePostRepository);

    const imagemStudenty = imagemPostRepository.create({
      name,
      size,
      key,
      url,
    });

    await imagemPostRepository.save(imagemStudenty);

    return response.send(imagemStudenty);
  }

  async show(request: Request, response: Response) {
    const imageRepository = getCustomRepository(ImagePostRepository);

    const allimage = await imageRepository.find();

    return response.json(allimage);
  }
}

export { PostImage };
