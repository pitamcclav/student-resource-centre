'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddProgramDialog({ onSave }) {
  const [formValues, setFormValues] = useState({
    name: "",
    code: "",
    duration: "",
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
        await onSave({
          name: formValues.name,
          code: formValues.code,
          duration: parseInt(formValues.duration, 10), // Convert to number
        });
        setFormValues({ name: "", code: "", duration: "" }); // Reset form
      } catch (error) {
        console.error("Failed to save program:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Program
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Program</DialogTitle>
          <DialogDescription>
            Add New Program. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={formValues.name}
                onChange={handleInputChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="code" className="text-right">
                Code
              </Label>
              <Input
                id="code"
                value={formValues.code}
                onChange={handleInputChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="duration" className="text-right">
                Duration (years)
              </Label>
              <Input
                id="duration"
                type="number"
                value={formValues.duration}
                onChange={handleInputChange}
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Program</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
