import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  originName: string;

  @Column()
  size: string;

  @Column()
  mimetype: string;

  @DeleteDateColumn()
  detecteAt?: Date;
}
