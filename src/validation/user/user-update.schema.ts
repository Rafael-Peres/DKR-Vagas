import * as Joi from 'joi';
import { Gender } from '../../enums/gender.enum';

export default class UpdateUserValidation {
  private schema = Joi.object().keys({
    username: Joi.string()
      .min(3)
      .max(30)
      .optional(),
    fullName: Joi.string()
      .min(3)
      .max(50)
      .allow('', null)
      .optional(),
    document: Joi.string()
      .min(11)
      .max(14)
      .optional(),
    email: Joi.string()
      .email()
      .optional(),
    birthDate: Joi.string()
      .min(6)
      .max(12)
      .optional(),
    password: Joi.string()
      .min(6)
      .max(12)
      .optional(),
    gender: Joi.string()
      .valid(Gender.Female, Gender.Male, Gender.Others)
      .allow('', null)
      .optional(),
    city: Joi.string()
      .min(3)
      .max(30)
      .optional(),
    state: Joi.string()
      .min(3)
      .max(30)
      .optional(),
  });

  public async validate(body): Promise<any> {
    return Joi.validate(body, this.schema);
  }
}