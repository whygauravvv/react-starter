import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Unauthorized: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center gap-4 justify-center h-screen max-w-md mx-auto">
        <h1 className="text-9xl font-bold italic text-primary">403</h1>
        <p className="text-lg text-center">
          Oops! You do not have permission to view this page. Click the button
          below to go back to the dashboard.
        </p>
        <Button onClick={() => navigate("/")}>Go to Dashboard</Button>
      </div>
    </>
  );
};

export default Unauthorized;
