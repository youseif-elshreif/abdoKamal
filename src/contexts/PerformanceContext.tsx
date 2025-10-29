"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface PerformanceState {
  isLowEndDevice: boolean;
  prefersReducedMotion: boolean;
  enableAnimations: boolean;
  deviceType: "mobile" | "tablet" | "desktop";
  connectionType: "slow" | "fast";
}

const PerformanceContext = createContext<PerformanceState>({
  isLowEndDevice: false,
  prefersReducedMotion: false,
  enableAnimations: true,
  deviceType: "desktop",
  connectionType: "fast",
});

export function PerformanceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [performanceState, setPerformanceState] = useState<PerformanceState>({
    isLowEndDevice: false,
    prefersReducedMotion: false,
    enableAnimations: true,
    deviceType: "desktop",
    connectionType: "fast",
  });

  useEffect(() => {
    // فحص نوع الجهاز
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent);

    // فحص قوة الجهاز
    const cores = navigator.hardwareConcurrency || 2;
    const memory = (navigator as any).deviceMemory || 4; //eslint-disable-line

    // فحص سرعة الاتصال
    const connection = (navigator as any).connection; //eslint-disable-line
    const isSlowConnection =
      connection && ["2g", "3g", "slow-2g"].includes(connection.effectiveType);

    // فحص إعدادات المستخدم
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // تحديد إذا كان الجهاز ضعيف
    const isLowEndDevice =
      cores <= 2 || memory <= 2 || isSlowConnection || isMobile;

    const deviceType = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";
    const connectionType = isSlowConnection ? "slow" : "fast";

    setPerformanceState({
      isLowEndDevice,
      prefersReducedMotion,
      enableAnimations: !isLowEndDevice && !prefersReducedMotion,
      deviceType,
      connectionType,
    });
  }, []);

  return (
    <PerformanceContext.Provider value={performanceState}>
      {children}
    </PerformanceContext.Provider>
  );
}

export function usePerformance(): PerformanceState {
  return useContext(PerformanceContext);
}
