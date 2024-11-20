import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Resource } from "./Resource";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  name: string;

  @OneToMany(() => Resource, (resource) => resource.category, { lazy: true })
  resources: Promise<Resource[]>;
}
