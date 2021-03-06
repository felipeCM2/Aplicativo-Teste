import { startOfHour } from "date-fns";
import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Appointment from "../infra/typeorm/entities/Appointment";
import IAppointmentsRepository from "../repositories/IAppointmentsRepository";

interface Request {
  provider_id: string;
  date: Date;
}

@injectable()
class CreateAppoinmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository
    ){}

  public async execute({ date, provider_id}: Request): Promise<Appointment> {

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(appointmentDate);

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked.');
    }

    const appointment = this.appointmentsRepository.create({
      provider_id,
      date,
    });

    return appointment;
  }
}

export default CreateAppoinmentService
