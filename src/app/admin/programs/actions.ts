// actions.ts
'use server';

import { AppDataSource, initialize } from "@/lib/db";
import { Program } from "@/entity/Program";

export async function getPrograms(search?: string) {
  try {
    await initialize();
    const programRepository = AppDataSource.getRepository(Program);
    
    let queryBuilder = programRepository.createQueryBuilder("program");
    
    if (search) {
      queryBuilder = queryBuilder.where(
        "LOWER(program.name) LIKE LOWER(:search) OR LOWER(program.code) LIKE LOWER(:search)",
        { search: `%${search}%` }
      );
    }

    const programs = await queryBuilder.getMany();
    
    return programs.map(program => ({
      id: program.id,
      name: program.name,
      code: program.code,
      duration: program.duration,
    }));
  } catch (error) {
    console.error("Error fetching programs:", error);
    throw new Error("Failed to fetch programs");
  }
}

export async function saveProgram(program: Partial<Program>) {
  try {
    await initialize();
    const programRepository = AppDataSource.getRepository(Program);
    const newProgram = programRepository.create(program);
    const savedProgram = await programRepository.save(newProgram);
    
    return {
      id: savedProgram.id,
      name: savedProgram.name,
      code: savedProgram.code,
      duration: savedProgram.duration,
    };
  } catch (error) {
    console.error("Error saving program:", error);
    throw new Error("Failed to save program");
  }
}

export async function updateProgram(id: number, program: Partial<Program>) {
  try {
    await initialize();
    const programRepository = AppDataSource.getRepository(Program);
    await programRepository.update(id, program);
    const updatedProgram = await programRepository.findOne({ where: { id } });
    
    if (!updatedProgram) {
      throw new Error("Program not found");
    }

    return {
      id: updatedProgram.id,
      name: updatedProgram.name,
      code: updatedProgram.code,
      duration: updatedProgram.duration,
    };
  } catch (error) {
    console.error("Error updating program:", error);
    throw new Error("Failed to update program");
  }
}

export async function deleteProgram(id: number) {
  try {
    await initialize();
    const programRepository = AppDataSource.getRepository(Program);
    await programRepository.delete(id);
    return true;
  } catch (error) {
    console.error("Error deleting program:", error);
    throw new Error("Failed to delete program");
  }
}