import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('urls')
class Url {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  original: string;

  @Column()
  shortened: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Url;
