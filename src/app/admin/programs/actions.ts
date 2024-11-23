// actions.ts
'use server';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


interface Program {
  id: number;
  name: string;
  code: string;
  duration: number;
}

export async function getPrograms(search?: string) {
  try {

    const programs = await prisma.program.findMany({
      where: {
        OR: [
          { name: { contains: search } },
          { code: { contains: search } }
        ]
      }
    });
    
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

    const savedProgram = await prisma.program.create({
      data: {
        name: program.name!,
        code: program.code!,
        duration: program.duration!
      }
    });
 
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

    const updatedProgram = await prisma.program.update({
      where: { id },
      data: {
        name: program.name!,
        code: program.code!,
        duration: program.duration!
      }
    });
    
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

    await prisma.program.delete({
      where: { id: id }
    });
    
    return true;
  } catch (error) {
    console.error("Error deleting program:", error);
    throw new Error("Failed to delete program");
  }
}