'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation";

export function LoginComponent() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/documents');
  };

  return (
    (<div className="min-h-screen login flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex just mb-8 justify-center">
          <img src="/images/Logo-Thien-Su-original-expand.png" className="w-32 " alt="" /></div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Username</Label>
            <Input id="email" type="email" placeholder="Enter your username" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>)
  );
}