import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert, BeforeUpdate } from "typeorm";
import { Resource } from "./Resource";
import { Program } from "./Program";
import { hash } from "bcrypt";

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 255, nullable: false, unique: true })
  email: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  password: string;

  @OneToMany(() => Resource, (resource) => resource.admin, { lazy: true })
  resources: Promise<Resource[]>;

  @OneToMany(() => Program, (program) => program.admin, { lazy: true })
  programs: Promise<Program[]>;

}
