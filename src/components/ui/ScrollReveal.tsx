"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
     const pathname = usePathname();

     useEffect(() => {
          const observer = new IntersectionObserver((entries) => {
               entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                         entry.target.classList.add("active");
                         // Optionally unobserve after revealing
                         observer.unobserve(entry.target);
                    }
               });
          }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

          // Wait for DOM to paint Server Components
          const timeout = setTimeout(() => {
               const elements = document.querySelectorAll(".reveal:not(.active)");
               elements.forEach((el) => observer.observe(el));
          }, 150);

          return () => {
               clearTimeout(timeout);
               observer.disconnect();
          };
     }, [pathname]);

     return null;
}
