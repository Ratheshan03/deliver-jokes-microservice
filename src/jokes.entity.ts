import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Jokes' })
export class Jokes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column('text')
  content: string;

  @Column({ default: false })
  is_moderated: boolean;
}
