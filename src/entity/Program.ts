import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Student } from "./Student";

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 255, nullable: false, unique: true })
  code: string;

  @Column({ type: "int", nullable: false })
  duration: number;

  @OneToMany(() => Student, (student) => student.program, { lazy: true })
  students: Promise<Student[]>;

}
