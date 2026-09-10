"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { CaseStudyGallerySlide } from "@/types/content";

type CaseStudyGalleryProps = {
  slides: readonly CaseStudyGallerySlide[];
};

const MIN_ZOOM = 100;
const MAX_ZOOM = 250;
const ZOOM_STEP = 12;

export function CaseStudyGallery({ slides }: CaseStudyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomPercent, setZoomPercent] = useState(MIN_ZOOM);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const activeSlide = slides[activeIndex];
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const imageStageRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    panX: number;
    panY: number;
  } | null>(null);

  const resetView = () => {
    setZoomPercent(MIN_ZOOM);
    setPan({ x: 0, y: 0 });
    setIsDragging(false);
    dragRef.current = null;
  };

  const constrainPan = (nextPan: { x: number; y: number }, zoom: number) => {
    const stage = imageStageRef.current;

    if (!stage || !activeSlide || zoom <= MIN_ZOOM) {
      return { x: 0, y: 0 };
    }

    const scale = zoom / MIN_ZOOM;
    const stageAspect = stage.clientWidth / stage.clientHeight;
    const imageAspect = activeSlide.width / activeSlide.height;
    const fittedWidth =
      imageAspect > stageAspect
        ? stage.clientWidth
        : stage.clientHeight * imageAspect;
    const fittedHeight =
      imageAspect > stageAspect
        ? stage.clientWidth / imageAspect
        : stage.clientHeight;
    const maxX = (fittedWidth * (scale - 1)) / 2;
    const maxY = (fittedHeight * (scale - 1)) / 2;

    return {
      x: Math.min(Math.max(nextPan.x, -maxX), maxX),
      y: Math.min(Math.max(nextPan.y, -maxY), maxY),
    };
  };

  const adjustZoom = (
    direction: 1 | -1,
    anchor?: { x: number; y: number },
  ) => {
    setZoomPercent((current) => {
      const next = Math.min(
        Math.max(current + direction * ZOOM_STEP, MIN_ZOOM),
        MAX_ZOOM,
      );

      setPan((currentPan) => {
        const stage = imageStageRef.current;

        if (!stage || !anchor || next === MIN_ZOOM) {
          return constrainPan(currentPan, next);
        }

        const currentScale = current / MIN_ZOOM;
        const nextScale = next / MIN_ZOOM;
        const relativeX = anchor.x - stage.clientWidth / 2;
        const relativeY = anchor.y - stage.clientHeight / 2;
        const nextPan = {
          x:
            relativeX -
            (nextScale / currentScale) * (relativeX - currentPan.x),
          y:
            relativeY -
            (nextScale / currentScale) * (relativeY - currentPan.y),
        };

        return constrainPan(nextPan, next);
      });
      return next;
    });
  };

  const selectSlide = (index: number) => {
    setActiveIndex(index);
    resetView();
  };

  const showPrevious = () => {
    selectSlide((activeIndex - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    selectSlide((activeIndex + 1) % slides.length);
  };

  const openLightbox = () => {
    resetView();
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    resetView();
    setIsLightboxOpen(false);
  };

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const previousOverflow = document.body.style.getPropertyValue("overflow");
    const trigger = triggerRef.current;
    document.body.style.setProperty("overflow", "hidden");
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setZoomPercent(MIN_ZOOM);
        setPan({ x: 0, y: 0 });
        setIsDragging(false);
        dragRef.current = null;
        setIsLightboxOpen(false);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (current) => (current - 1 + slides.length) % slides.length,
        );
        resetView();
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % slides.length);
        resetView();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.setProperty("overflow", previousOverflow);
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
              ref={imageStageRef}
              className="case-study-lightbox__image-wrap"
              data-zoomed={zoomPercent > MIN_ZOOM || undefined}
              data-dragging={isDragging || undefined}
              onWheel={(event) => {
                if (event.deltaY === 0) {
                  return;
                }

                event.preventDefault();
                const bounds = event.currentTarget.getBoundingClientRect();
                adjustZoom(event.deltaY < 0 ? 1 : -1, {
                  x: event.clientX - bounds.left,
                  y: event.clientY - bounds.top,
                });
              }}
              onPointerDown={(event) => {
                if (zoomPercent <= MIN_ZOOM) {
                  return;
                }

                event.preventDefault();
                event.currentTarget.setPointerCapture(event.pointerId);
                dragRef.current = {
                  pointerId: event.pointerId,
                  startX: event.clientX,
                  startY: event.clientY,
                  panX: pan.x,
                  panY: pan.y,
                };
                setIsDragging(true);
              }}
              onPointerMove={(event) => {
                const drag = dragRef.current;

                if (!drag || drag.pointerId !== event.pointerId) {
                  return;
                }

                setPan(
                  constrainPan(
                    {
                      x: drag.panX + event.clientX - drag.startX,
                      y: drag.panY + event.clientY - drag.startY,
                    },
                    zoomPercent,
                  ),
                );
              }}
              onPointerUp={(event) => {
                if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                  event.currentTarget.releasePointerCapture(event.pointerId);
                }

                dragRef.current = null;
                setIsDragging(false);
              }}
              onPointerCancel={(event) => {
                if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                  event.currentTarget.releasePointerCapture(event.pointerId);
                }

                dragRef.current = null;
                setIsDragging(false);
              }}
              onLostPointerCapture={(event) => {
                if (dragRef.current?.pointerId === event.pointerId) {
                  dragRef.current = null;
                  setIsDragging(false);
                }
              }}
            >
              <div
                className="case-study-lightbox__image-transform"
                style={{
                  transform: `translate3d(${pan.x}px, ${pan.y}px, 0)`,
                }}
              >
                <Image
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  width={activeSlide.width}
                  height={activeSlide.height}
                  sizes="100vw"
                  className="case-study-lightbox__image"
                  style={{
                    transform: `scale(${zoomPercent / MIN_ZOOM})`,
                  }}
                />
              </div>
              <div
                className="case-study-lightbox__zoom-controls"
                aria-label="Image zoom controls"
                onPointerDown={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => adjustZoom(-1)}
                  aria-label="Zoom out"
                  disabled={zoomPercent === MIN_ZOOM}
                >
                  <span aria-hidden="true">−</span>
                </button>
                <output aria-live="polite">{zoomPercent}%</output>
                <button
                  type="button"
                  onClick={() => adjustZoom(1)}
                  aria-label="Zoom in"
                  disabled={zoomPercent === MAX_ZOOM}
                >
                  <span aria-hidden="true">+</span>
                </button>
              </div>
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
