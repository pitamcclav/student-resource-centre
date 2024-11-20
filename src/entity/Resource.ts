import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { Admin } from "./Admin";
  import { Category } from "./Category";
  
  @Entity()
  export class Resource {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: "varchar", length: 255, nullable: false })
    title: string;
  
    @Column({ type: "varchar", length: 255, nullable: true })
    description: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    modifiedAt: Date;
  
    @Column({ type: "varchar", length: 255, nullable: false })
    fileUrl: string;
  
    @Column({ type: "int", nullable: false })
    year: number;
  
    @Column({ type: "int", nullable: false })
    semester: number;
  
    @ManyToOne(() => Admin, (admin) => admin.resources, { nullable: false, lazy: true })
    admin: Promise<Admin>;
  
    @ManyToOne(() => Category, (category) => category.resources, { nullable: false, lazy: true })
    category: Promise<Category>;
  }
  