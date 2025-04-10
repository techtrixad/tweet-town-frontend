
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TwitterIcon } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <TwitterIcon className="text-primary h-10 w-10" />
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-8">Create your account</h1>
        
        <div className="bg-card rounded-lg shadow-lg p-6 mb-4 text-center">
          <p className="mb-4">This page is under construction</p>
          <Button asChild>
            <Link to="/login">Back to login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
