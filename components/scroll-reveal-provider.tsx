"use client";

import React, { useEffect } from "react";

/**
 * ScrollRevealProvider
 * High-performance hardware-accelerated entrance reveal system.
 * Uses lightweight IntersectionObserver with zero scroll jank or main-thread blocking.
 */
export const ScrollRevealProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    // Respect user's accessibility reduced motion setting
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document
        .querySelectorAll(".reveal-element, .reveal-scale, .reveal-slide-left")
        .forEach((el) => {
          el.classList.add("is-revealed");
        });
      return;
    }

    // Auto-tag elements once cleanly without layout thrashing
    const tagElements = () => {
      const sections = document.querySelectorAll("section, header, footer");

      sections.forEach((section) => {
        // Tag headings
        section.querySelectorAll("h1, h2, h3").forEach((heading) => {
          if (!heading.classList.contains("reveal-element") && !heading.classList.contains("is-revealed")) {
            heading.classList.add("reveal-element");
          }
        });

        // Tag eyebrow badges & pills
        section
          .querySelectorAll('[class*="tracking-[0.25em]"], [class*="tracking-widest"], .eyebrow')
          .forEach((eyebrow) => {
            const parent = eyebrow.closest("div") || eyebrow;
            if (!parent.classList.contains("reveal-slide-left") && !parent.classList.contains("is-revealed")) {
              parent.classList.add("reveal-slide-left");
            }
          });

        // Tag descriptive paragraphs (avoiding small button/card metadata)
        section.querySelectorAll("p").forEach((p) => {
          if (
            !p.closest("button") &&
            !p.closest("a") &&
            !p.classList.contains("reveal-element") &&
            !p.classList.contains("is-revealed")
          ) {
            p.classList.add("reveal-element");
          }
        });

        // Tag cards inside grids
        section.querySelectorAll('[class*="grid"], [class*="auto-cols-"]').forEach((container) => {
          Array.from(container.children).forEach((child) => {
            const htmlChild = child as HTMLElement;
            if (
              htmlChild.classList.contains("group") ||
              htmlChild.getAttribute("class")?.includes("rounded-") ||
              htmlChild.getAttribute("class")?.includes("bg-")
            ) {
              if (
                !htmlChild.classList.contains("reveal-element") &&
                !htmlChild.classList.contains("is-revealed")
              ) {
                htmlChild.classList.add("reveal-element");
              }
            }
          });
        });
      });
    };

    tagElements();

    // IntersectionObserver runs off the main thread for 60fps scrolling
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -30px 0px",
        threshold: 0.05,
      }
    );

    const elements = document.querySelectorAll(
      ".reveal-element:not(.is-revealed), .reveal-scale:not(.is-revealed), .reveal-slide-left:not(.is-revealed)"
    );
    elements.forEach((el) => observer.observe(el));

    // Reveal hero section immediately on mount without delay
    const heroElements = document.querySelectorAll(
      "#hero .reveal-element, #hero .reveal-slide-left, #hero .reveal-scale"
    );
    heroElements.forEach((el) => el.classList.add("is-revealed"));

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};
