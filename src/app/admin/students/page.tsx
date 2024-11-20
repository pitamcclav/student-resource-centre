import {  Edit, PlusIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ProgramPage() {
    return (
        <div className="flex-1 overflow-auto p-8">
            
            <div className="mt-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-lg font-semibold text-gray-800">Students</h1>
                    <Link href="/admin/student/new" className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        <PlusIcon className="h-5 w-5" />
                        <span>New Student</span>
                    </Link>
                </div>
                <div className="mt-4">
                <Table className="w-full mt-4 border border-gray-200 rounded-lg shadow-sm [&_td]:border-l [&_th]:border-l">
                    <TableCaption>Students</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-semibold">Student No</TableHead>
                            <TableHead className="font-semibold">Program</TableHead>
                            <TableHead className="font-semibold">Email</TableHead>
                            <TableHead className="font-semibold">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>2100706919</TableCell>
                            <TableCell>FSWD</TableCell>
                            <TableCell>student@example.com</TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <Link href="/admin/student/1" className="text-blue-500 hover:text-blue-700">
                                        <Edit className="h-5 w-5" />
                                    </Link>
                                    <Link href="/admin/student/1" className="text-red-500 hover:text-red-700">
                                        <Trash2Icon className="h-5 w-5" />
                                    </Link>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                 
                </div>
            </div>
        </div>
    );
    }