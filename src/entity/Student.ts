import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { Program } from "./Program";
  
  @Entity()
  export class Student {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: "varchar", nullable: false, unique: true })
    studentNo: string;
  
    @Column({ type: "varchar", length: 255, nullable: false, unique: true })
    email: string;
  
    @Column({ type: "varchar", length: 255, nullable: false })
    password: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @ManyToOne(() => Program, (program) => program.students, { lazy: true, nullable: false })
    program: Promise<Program>;

}
  