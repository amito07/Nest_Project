import { Injectable } from '@nestjs/common';
import { CreatePracticeDto } from './dto/create-practice.dto';
import { UpdatePracticeDto } from './dto/update-practice.dto';

@Injectable()
export class PracticeService {
  create(createPracticeDto: CreatePracticeDto) {
    return {message: 'This action adds a new practice', data: createPracticeDto };
  }

  findAll() {
    return `This action returns all practice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} practice`;
  }

  update(id: number, updatePracticeDto: UpdatePracticeDto) {
    return `This action updates a #${id} practice`;
  }

  remove(id: number) {
    return `This action removes a #${id} practice`;
  }
}
