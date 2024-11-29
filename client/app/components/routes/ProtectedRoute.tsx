"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && pathname === "/login" || pathname === "/register") {
      router.push("/"); // إعادة التوجيه إلى الصفحة الرئيسية
    } else if (!token && pathname !== "/login") {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;
