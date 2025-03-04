import { AlertCircle } from "lucide-react";
import { Button } from "../ui/button";

export default function ErrorState() {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh] gap-8 bg-gradient-to-tr from-muted to-background rounded-lg p-8 mt-4">
      <AlertCircle className="size-14 text-destructive" />
      <div className="text-center space-y-1">
        <p className="text-muted-foreground text-2xl tracking-tight">
          Error loading data
        </p>
        <p className="text-muted-foreground text-sm">
          An error occured while loading this page, please refresh or try again
          later.
        </p>
      </div>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => {
          window.location.reload();
        }}
      >
        Refresh Page
      </Button>
    </div>
  );
}
