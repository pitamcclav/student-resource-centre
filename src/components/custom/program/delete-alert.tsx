import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
  import { Button } from "@/components/ui/button";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
  import { Trash2Icon } from "lucide-react";
import { useState } from "react";
  
  const DeleteProgramDialog = ({ program, onDelete }) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                variant="ghost"
                className="text-red-500 hover:text-red-700 p-2" >
                <Trash2Icon className="h-5 w-5" />
                </Button>
            </AlertDialogTrigger>
  
       
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete the program "{program.name}" ({program.code}). 
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel type="button"onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-red-500 hover:bg-red-600"onClick={() => onDelete(program.id)}>
                Delete Program
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      
    );
  };
  
  export default DeleteProgramDialog;