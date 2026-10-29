"use client";

import React, { useEffect } from "react";

/**
 * ScrollRevealProvider
 * Smoothly animates every element, text, heading, card, and image as it enters the viewport.
 * Works across desktop, tablet, and mobile devices with zero scroll-jacking.
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
      document.querySelectorAll(".reveal-element, .reveal-scale, .reveal-slide-left").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const observedElements = new WeakSet<Element>();

    // Intelligent auto-tagging of key content elements across sections
    const autoTagElements = () => {
      // Find all sections on the page
      const sections = document.querySelectorAll("section, header, footer");

      sections.forEach((section) => {
        // Tag headings
        const headings = section.querySelectorAll("h1, h2, h3");
        headings.forEach((heading) => {
          if (!heading.classList.contains("reveal-element") && !heading.classList.contains("is-revealed")) {
            heading.classList.add("reveal-element");
          }
        });

        // Tag eyebrow badges & pills
        const eyebrows = section.querySelectorAll(
          '[class*="tracking-[0.25em]"], [class*="tracking-widest"], .eyebrow'
        );
        eyebrows.forEach((eyebrow) => {
          const parent = eyebrow.closest("div") || eyebrow;
          if (!parent.classList.contains("reveal-slide-left") && !parent.classList.contains("is-revealed")) {
            parent.classList.add("reveal-slide-left");
          }
        });

        // Tag descriptive paragraphs
        const paragraphs = section.querySelectorAll("p");
        paragraphs.forEach((p) => {
          // Avoid tiny metadata inside buttons or badges
          if (
            !p.closest("button") &&
            !p.classList.contains("reveal-element") &&
            !p.classList.contains("is-revealed")
          ) {
            p.classList.add("reveal-element");
            // Gentle stagger after heading
            if (!p.style.transitionDelay) {
              p.style.transitionDelay = "120ms";
            }
          }
        });

        // Tag cards inside grids & carousels
        const cardContainers = section.querySelectorAll(
          '[class*="grid"], [class*="auto-cols-"], [class*="space-y-"]'
        );

        cardContainers.forEach((container) => {
          const childrenList = Array.from(container.children);
          childrenList.forEach((child, index) => {
            const htmlChild = child as HTMLElement;
            // Check if it looks like a card or item (has border, background, or rounded)
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
                // Stagger delay between sibling cards
                const stagger = Math.min((index % 6) * 110, 550);
                htmlChild.style.transitionDelay = `${stagger}ms`;
              }
            }
          });
        });

        // Tag primary CTA buttons
        const ctaButtons = section.querySelectorAll('button[class*="rounded-full"], a[class*="rounded-full"]');
        ctaButtons.forEach((btn) => {
          const htmlBtn = btn as HTMLElement;
          if (
            !htmlBtn.closest('[class*="group"]') &&
            !htmlBtn.classList.contains("reveal-element") &&
            !htmlBtn.classList.contains("is-revealed")
          ) {
            htmlBtn.classList.add("reveal-element");
            if (!htmlBtn.style.transitionDelay) {
              htmlBtn.style.transitionDelay = "180ms";
            }
          }
        });

        // Tag featured stamps & arched image cards
        const visualCards = section.querySelectorAll('[class*="rounded-tr-"]');
        visualCards.forEach((card) => {
          const htmlCard = card as HTMLElement;
          if (!htmlCard.classList.contains("reveal-scale") && !htmlCard.classList.contains("is-revealed")) {
            htmlCard.classList.add("reveal-scale");
          }
        });
      });
    };

    // Run auto-tagging
    autoTagElements();

    // Create IntersectionObserver with responsive margins
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
        // Trigger slightly before element enters to feel completely natural
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.05,
      }
    );

    // Observe all tagged elements
    const observeAll = () => {
      const elements = document.querySelectorAll(
        ".reveal-element:not(.is-revealed), .reveal-scale:not(.is-revealed), .reveal-slide-left:not(.is-revealed)"
      );

      elements.forEach((el) => {
        if (!observedElements.has(el)) {
          observedElements.add(el);
          observer.observe(el);
        }
      });
    };

    observeAll();

    // Reveal above-the-fold elements gracefully after initial mount
    const timer = setTimeout(() => {
      const topElements = document.querySelectorAll(
        "#hero .reveal-element, #hero .reveal-slide-left, #hero .reveal-scale"
      );
      topElements.forEach((el, i) => {
        const htmlEl = el as HTMLElement;
        if (!htmlEl.style.transitionDelay) {
          htmlEl.style.transitionDelay = `${i * 120}ms`;
        }
        htmlEl.classList.add("is-revealed");
      });
    }, 100);

    // MutationObserver to capture dynamic tab switching or new sections
    const mutationObserver = new MutationObserver(() => {
      autoTagElements();
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
};
