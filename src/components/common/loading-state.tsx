import { Loader2 } from "lucide-react";

export default function LoadingState() {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh] gap-8  mt-4">
      <Loader2 className="size-14 animate-spin" />
      <div className="text-center space-y-1">
        <p className="text-muted-foreground text-2xl tracking-tight">
          Loading data...
        </p>
        <p className="text-muted-foreground text-sm">
          Please wait while we load the data.
        </p>
      </div>
    </div>
  );
}
