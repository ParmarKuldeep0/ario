'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function DelicateLoaderContent({ children }) {
  const [showLoader, setShowLoader] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      setShowLoader(true);
      setIsLoading(true);
      setProgress(0);
      
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLoading(false);
            return 100;
          }
          return prev + 10;
        });
      }, 300);

      return () => clearInterval(interval);
    }
  }, [pathname, searchParams]);

  if (!showLoader) {
    return children;
  }

  if (!isLoading) {
    return children;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[999] backdrop-blur-sm">
      <div className="text-center space-y-8 w-full max-w-md px-4">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/logo.png"
            alt="Loading"
            width={140}
            height={140}
            className="mx-auto bg-white rounded-lg"
            style={{ height: '200px', width: '540px' }}
          />
        </motion.div>

        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gray-400 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DelicateLoader({ children }) {
  return (
    <Suspense fallback={children}>
      <DelicateLoaderContent children={children} />
    </Suspense>
  );
}