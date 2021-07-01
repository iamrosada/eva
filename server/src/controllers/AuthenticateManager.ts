import { Response, Request } from "express";
import { getCustomRepository } from "typeorm";
import { compare, hash } from "bcryptjs";
import jwt from "jsonwebtoken";
import { ManagersRepository } from "../repositories/ManagersRepository";

class AuthenticateManager {
  async authenticate(request: Request, response: Response) {
    const { email, password } = request.body;

    const managersRepository = getCustomRepository(ManagersRepository);

    const checkManegerExists = await managersRepository.findOne({
      where: { email },
    });

    if (!checkManegerExists) {
      return response.status(400).json({
        error: "Incorrect email/password combination",
      });
    }
    const passwordMatched = await compare(
      password,
      checkManegerExists.password
    );

    if (!passwordMatched) {
      return response.status(400).json({
        error: "Incorrect email/password combination",
      });
    }

    const token = jwt.sign({ id: checkManegerExists.id }, "secret", {
      expiresIn: "1d",
    });

    delete checkManegerExists.password;
    return response.json({
      checkManegerExists,
      token,
    });
  }
}

export { AuthenticateManager };
