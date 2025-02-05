"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RouteGuard = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token || !isAuthenticated) {
      router.replace("/"); // Redirect to login if not authenticated
    } else {
      setIsLoading(false);
    }
  }, [router, token, isAuthenticated]);

  if (isLoading) return null; // Show nothing while checking auth

  return <>{children}</>;
};

export default RouteGuard;
