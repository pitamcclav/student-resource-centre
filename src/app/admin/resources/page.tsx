import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PlusIcon, Edit, Trash2Icon } from "lucide-react";
import { Table } from "@/components/ui/table";
import Link from "next/link";


export default function ResourcePage() {
    return (
        <div className="flex-1 overflow-auto p-8">
                
                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-lg font-semibold text-gray-800">Resources</h1>
                        <Link href="/admin/resources/new" className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            <PlusIcon className="h-5 w-5" />
                            <span>New Resource</span>
                        </Link>
                    </div>
                    <div className="mt-4">
                    <Table className="w-full mt-4 border border-gray-200 rounded-lg shadow-sm [&_td]:border-l [&_th]:border-l">
                        <TableCaption>Resources</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-semibold">Title</TableHead>
                                <TableHead className="font-semibold">Type</TableHead>
                                <TableHead className="font-semibold">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Introduction to Programming</TableCell>
                                <TableCell>Video</TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        <Link href="/admin/resources/1" className="text-blue-500 hover:text-blue-700">
                                            <Edit className="h-5 w-5" />
                                        </Link>
                                        <Link href="/admin/resources/1" className="text-red-500 hover:text-red-700">
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