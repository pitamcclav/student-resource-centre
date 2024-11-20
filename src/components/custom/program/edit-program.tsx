import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";

const EditProgramDialog = ({ program, onUpdate }) => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: program.name,
    code: program.code,
    duration: program.duration.toString(),
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValues.name && formValues.code && formValues.duration) {
      try {
        setLoading(true);
        await onUpdate(program.id, {
          name: formValues.name,
          code: formValues.code,
          duration: parseInt(formValues.duration, 10),
        });
        setOpen(false);
      } catch (error) {
        console.error("Failed to update program:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-blue-500 hover:text-blue-700 p-2">
          <Edit className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Program</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Program Name
            </label>
            <Input
              id="name"
              value={formValues.name}
              onChange={handleInputChange}
              className="w-full"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="code" className="text-sm font-medium">
              Program Code
            </label>
            <Input
              id="code"
              value={formValues.code}
              onChange={handleInputChange}
              className="w-full"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="duration" className="text-sm font-medium">
              Duration (weeks)
            </label>
            <Input
              id="duration"
              type="number"
              value={formValues.duration}
              onChange={handleInputChange}
              className="w-full"
              required
              min="1"
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProgramDialog;