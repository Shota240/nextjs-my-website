import { useRouter } from "next/router";
import { useEffect } from "react";

export const useBgColor = () => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.backgroundColor = router.pathname === "/" ? "lightblue": "beige";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [router.pathname]);
};
