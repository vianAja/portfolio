"use client";

import { useEffect } from "react";

type Bubble = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  alpha: number;
  color: string;
};

declare global {
  interface Window {
    __portfolioBubbleCursorMounted?: boolean;
  }
}

export default function SnowflakeCursor() {
  useEffect(() => {
    // Keep desktop-only and respect reduced motion users.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isCoarsePointer || window.__portfolioBubbleCursorMounted) return;
    window.__portfolioBubbleCursorMounted = true;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      window.__portfolioBubbleCursorMounted = false;
      return;
    }

    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "70";
    document.body.appendChild(canvas);

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const bubbles: Bubble[] = [];
    const bubbleColors = ["#AEEFF3", "#7DECEF", "#5ED0D3"];
    let frameId = 0;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let spawnCooldown = 0;
    let rafPending = false;

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const nextDpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * nextDpr);
      canvas.height = Math.floor(height * nextDpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(nextDpr, 0, 0, nextDpr, 0, 0);
    };

    const spawnBubble = () => {
      const maxLife = 45 + Math.random() * 35;
      bubbles.push({
        x: mouseX + (Math.random() - 0.5) * 10,
        y: mouseY + (Math.random() - 0.5) * 10,
        r: 2.2 + Math.random() * 4.2,
        vx: (Math.random() - 0.5) * 0.55,
        vy: -(0.45 + Math.random() * 0.8),
        life: maxLife,
        maxLife,
        alpha: 0.8 + Math.random() * 0.2,
        color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
      });
    };

    const onPointerMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(() => {
          rafPending = false;
          if (spawnCooldown <= 0) {
            spawnBubble();
            spawnCooldown = 1;
          }
        });
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      mouseX = touch.clientX;
      mouseY = touch.clientY;
      if (spawnCooldown <= 0) {
        spawnBubble();
        spawnCooldown = 2;
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      if (spawnCooldown > 0) spawnCooldown -= 1;
      if (bubbles.length > 140) bubbles.splice(0, bubbles.length - 140);

      for (let i = bubbles.length - 1; i >= 0; i -= 1) {
        const b = bubbles[i];
        b.life -= 1;
        if (b.life <= 0) {
          bubbles.splice(i, 1);
          continue;
        }

        b.x += b.vx;
        b.y += b.vy;
        b.vy -= 0.003;

        const lifeRatio = b.life / b.maxLife;
        const alpha = Math.max(0, lifeRatio * b.alpha);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = b.color;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r * (0.85 + lifeRatio * 0.25), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      frameId = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onPointerMove, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("resize", onResize);
    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
      canvas.remove();
      window.__portfolioBubbleCursorMounted = false;
    };
  }, []);

  return null;
}
