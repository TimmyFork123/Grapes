"use client";

import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { useSearchParams } from "next/navigation";

// 添加设备检测函数
function isDesktop() {
  // 检查是否为移动设备
  return !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

export function GameSection() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const searchParams = useSearchParams();

  // 处理页面加载完成
  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    if (document.readyState === 'complete') {
      setIsPageLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // 处理 URL 参数
  useEffect(() => {
    if (searchParams.get("play") === "true") {
      setIsIframeLoaded(true);
    }
  }, [searchParams]);

  // 处理用户交互自动加载
  useEffect(() => {
    // 只在桌面设备上启用自动加载
    if (!isIframeLoaded && isPageLoaded && isDesktop()) {
      // 添加5秒延迟
      const timer = setTimeout(() => {
        const handleInteraction = () => {
          setIsIframeLoaded(true);
          // 清除所有事件监听
          cleanup();
        };

        const cleanup = () => {
          window.removeEventListener('mousemove', handleInteraction);
          window.removeEventListener('click', handleInteraction);
          window.removeEventListener('keydown', handleInteraction);
          window.removeEventListener('touchstart', handleInteraction);
          window.removeEventListener('scroll', handleInteraction);
        };

        // 添加事件监听
        window.addEventListener('mousemove', handleInteraction);
        window.addEventListener('click', handleInteraction);
        window.addEventListener('keydown', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);
        window.addEventListener('scroll', handleInteraction);

        return cleanup;
      }, 5000); // 5秒延迟

      // 清理定时器
      return () => clearTimeout(timer);
    }
  }, [isIframeLoaded, isPageLoaded]);

  const handlePlayClick = () => {
    setIsIframeLoaded(true);
    document.getElementById('game')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="game" className="py-6 md:py-6 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className={`mx-auto relative
          w-full
          ${isIframeLoaded ? 'max-h-[85vh]' : 'max-h-[42.5vh]'}
          ${isIframeLoaded ? 'aspect-[9/16]' : 'aspect-[9/8]'}
          ${isIframeLoaded ? 'max-w-[calc(85vh*9/16)]' : 'max-w-[calc(42.5vh*9/8)]'}`}
        >
          {!isIframeLoaded ? (
            <div 
              className="absolute inset-0 flex flex-col items-center cursor-pointer"
              onClick={handlePlayClick}
            >
              <button className="flex items-center gap-2 bg-[#FFD700] hover:bg-[#E67E22] 
                text-[#2C3E50] font-bold px-8 py-4 rounded-full text-xl transition
                mt-[20%]"
              >
                <Play className="w-8 h-8" />
                Play Now
              </button>
            </div>
          ) : (
            <iframe 
              className="w-full h-full"
              src="https://game.iblockblast.com"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
