import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private repository: Repository<FileEntity>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  create(file: Express.Multer.File, userId: number) {
    return this.repository.save({
      fileName: file.filename,
      originName: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
      user: { id: userId },
    });
  }
}
