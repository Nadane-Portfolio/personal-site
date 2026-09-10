"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { CaseStudyGallerySlide } from "@/types/content";

type CaseStudyGalleryProps = {
  slides: readonly CaseStudyGallerySlide[];
};

export function CaseStudyGallery({ slides }: CaseStudyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeSlide = slides[activeIndex];

  const selectSlide = (index: number) => {
    setActiveIndex(index);
    setIsZoomed(false);
  };

  const showPrevious = () => {
    selectSlide((activeIndex - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    selectSlide((activeIndex + 1) % slides.length);
  };

  const openLightbox = () => {
    setIsZoomed(false);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsZoomed(false);
    setIsLightboxOpen(false);
  };

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (current) => (current - 1 + slides.length) % slides.length,
        );
        setIsZoomed(false);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % slides.length);
        setIsZoomed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [isLightboxOpen, slides.length]);

  if (!activeSlide) {
    return null;
  }

  const thumbnailStrip = (location: "gallery" | "lightbox") => (
    <nav
      className={`case-study-gallery__thumbnails case-study-gallery__thumbnails--${location}`}
      aria-label={`${location === "lightbox" ? "Image viewer" : "Gallery"} thumbnails`}
    >
      {slides.map((slide, index) => (
        <button
          key={slide.src}
          type="button"
          className="case-study-gallery__thumbnail"
          data-active={index === activeIndex || undefined}
          aria-label={`View image ${index + 1}: ${slide.title}`}
          aria-current={index === activeIndex ? "true" : undefined}
          onClick={() => selectSlide(index)}
        >
          <Image
            src={slide.src}
            alt=""
            width={slide.width}
            height={slide.height}
            sizes="5.5rem"
            className="case-study-gallery__thumbnail-image"
          />
        </button>
      ))}
    </nav>
  );

  return (
    <figure className="case-study-gallery">
      <div className="case-study-gallery__stage">
        <button
          ref={triggerRef}
          type="button"
          className="case-study-gallery__image-button"
          onClick={openLightbox}
          aria-label={`Open ${activeSlide.title} full size`}
        >
          <Image
            src={activeSlide.src}
            alt={activeSlide.alt}
            width={activeSlide.width}
            height={activeSlide.height}
            sizes="(max-width: 768px) calc(100vw - 2rem), 70rem"
            className="case-study-gallery__image"
          />
          <span className="case-study-gallery__expand-hint" aria-hidden="true">
            Click to enlarge ↗
          </span>
        </button>
        <div className="case-study-gallery__stage-controls" aria-label="Gallery controls">
          <button type="button" onClick={showPrevious} aria-label="Previous image">
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" onClick={showNext} aria-label="Next image">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {thumbnailStrip("gallery")}

      <figcaption className="case-study-gallery__details">
        <div>
          <p className="case-study-gallery__count" aria-live="polite">
            {activeIndex + 1} / {slides.length}
          </p>
          <h3>{activeSlide.title}</h3>
          <p>{activeSlide.caption}</p>
        </div>
      </figcaption>

      {isLightboxOpen ? (
        <div
          className="case-study-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeSlide.title} image viewer`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <div className="case-study-lightbox__content">
            <div className="case-study-lightbox__header">
              <p>
                {activeSlide.title} <span aria-hidden="true">·</span> {activeIndex + 1} / {slides.length}
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeLightbox}
                aria-label="Close image viewer"
              >
                Close <span aria-hidden="true">×</span>
              </button>
            </div>
            <div
              className="case-study-lightbox__image-wrap"
              data-zoomed={isZoomed || undefined}
            >
              <button
                type="button"
                className="case-study-lightbox__zoom-button"
                onClick={() => setIsZoomed((zoomed) => !zoomed)}
                aria-label={isZoomed ? "Zoom out" : "Zoom in"}
              >
                <Image
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  width={activeSlide.width}
                  height={activeSlide.height}
                  sizes="100vw"
                  className="case-study-lightbox__image"
                />
              </button>
            </div>
            <div className="case-study-lightbox__footer">
              <div className="case-study-lightbox__controls" aria-label="Image viewer controls">
                <button type="button" onClick={showPrevious} aria-label="Previous image">
                  <span aria-hidden="true">←</span>
                </button>
                <button type="button" onClick={showNext} aria-label="Next image">
                  <span aria-hidden="true">→</span>
                </button>
              </div>
              <a href={activeSlide.src} target="_blank" rel="noreferrer">
                Open full size
              </a>
            </div>
            {thumbnailStrip("lightbox")}
          </div>
        </div>
      ) : null}
    </figure>
  );
}
