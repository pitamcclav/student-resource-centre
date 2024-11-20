'use client'

import { AddProgramDialog } from "@/components/custom/program/add-program";
import EditProgramDialog from "@/components/custom/program/edit-program";
import DeleteProgramDialog from "@/components/custom/program/delete-alert";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getPrograms, saveProgram, updateProgram, deleteProgram } from "./actions";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";



interface Program {
    id: number;
    name: string;
    code: string;
    duration: number;
  }
export default function ProgramPage() {
    const [programs, setPrograms] = useState<Program[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [programToDelete, setProgramToDelete] = useState<Program | null>(null);
    const [search, setSearch] = useState("");
    const [sortConfig, setSortConfig] = useState<{
      key: keyof Program;
      direction: 'asc' | 'desc';
    } | null>(null);

    useEffect(() => {
        fetchPrograms();
    }, [search]);

    const fetchPrograms = async () => {
        try {
            setLoading(true);
            const fetchedPrograms = await getPrograms(search);
            setPrograms(fetchedPrograms);
            setError(null);
        } catch (err) {
            setError('Failed to fetch programs');
            console.error('Error fetching programs:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSaveProgram = async (program: Partial<Program>) => {
        try {
            const savedProgram = await saveProgram(program);
            await fetchPrograms(); // Refresh the list after saving
        } catch (error) {
            console.error("Failed to save program:", error);
            setError('Failed to save program');
        }
    };

    const handleUpdateProgram = async (id: number, program: Partial<Program>) => {
        try {
            await updateProgram(id, program);
            await fetchPrograms();
        } catch (error) {
            console.error("Failed to update program:", error);
            setError('Failed to update program');
        }
    };


    const handleDeleteProgram = async (id: number) => {
        try {
            await deleteProgram(id);
            await fetchPrograms();
            setDeleteDialogOpen(false);
            setProgramToDelete(null);
        } catch (error) {
            console.error("Failed to delete program:", error);
            setError('Failed to delete program');
        }
    };

    const handleSort = (key: keyof Program) => {
        setSortConfig(current => {
            if (current?.key === key) {
                return {
                    key,
                    direction: current.direction === 'asc' ? 'desc' : 'asc'
                };
            }
            return { key, direction: 'asc' };
        });
    };
    const sortedPrograms = [...programs].sort((a, b) => {
        if (!sortConfig) return 0;

        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });

    if (loading) {
        return (
            <div className="flex-1 overflow-auto p-8">
                <div className="flex items-center justify-center h-full">
                    <div className="text-gray-500">Loading programs...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex-1 overflow-auto p-8">
                <div className="flex items-center justify-center h-full">
                    <div className="text-red-500">{error}</div>
                </div>
            </div>
        );
    };
    return (
        <div className="flex-1 overflow-auto p-8">
            <div className="mt-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-lg font-semibold text-gray-800">Programs</h1>
                    <AddProgramDialog onSave={handleSaveProgram} />
                </div>
                <div className="mb-4">
                    <Input
                        type="search"
                        placeholder="Search programs..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="max-w-sm"
                    />
                </div>
                {error && (
                    <div className="mb-4 p-4 bg-red-50 text-red-500 rounded">
                        {error}
                    </div>
                )}
                <div className="mt-4">
                <Table className="w-full mt-4 border border-gray-200 rounded-lg shadow-sm [&_td]:border-l [&_th]:border-l">
                    <TableCaption>List of all programs</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead 
                                className="font-semibold cursor-pointer hover:bg-gray-50"
                                onClick={() => handleSort('name')}
                            >
                                Name {sortConfig?.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                            </TableHead>
                            <TableHead 
                                className="font-semibold cursor-pointer hover:bg-gray-50"
                                onClick={() => handleSort('code')}
                            >
                                Code {sortConfig?.key === 'code' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                            </TableHead>
                            <TableHead 
                                className="font-semibold cursor-pointer hover:bg-gray-50"
                                onClick={() => handleSort('duration')}
                            >
                                Duration {sortConfig?.key === 'duration' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                            </TableHead>
                            <TableHead className="font-semibold">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sortedPrograms.map((program) => (
                            <TableRow key={program.id}>
                                <TableCell>{program.name}</TableCell>
                                <TableCell>{program.code}</TableCell>
                                <TableCell>{program.duration} years</TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        <EditProgramDialog 
                                            program={program} 
                                            onUpdate={handleUpdateProgram}
                                        />
                                        <DeleteProgramDialog
                                            program={program}
                                            onDelete={handleDeleteProgram}
                                        />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {sortedPrograms.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-gray-500">
                                    No programs found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                </div>
            </div>
        </div>
    );
    }