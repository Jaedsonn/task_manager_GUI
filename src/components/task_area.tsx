import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Task } from "@/lib/definitions";

export function SheetDemo({ task }: { task: Task }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className={"border-0 shadow-transparent p-0"}>
          View Task Details
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Task</SheetTitle>
          <SheetDescription>{task.task_description}</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right font-bold w-full">
              Username:
            </Label>
            {task.username}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right font-bold">
              Status:
            </Label>
            {task.status}
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
