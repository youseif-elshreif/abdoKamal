'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CatchAllPage() {
  const router = useRouter();

  useEffect(() => {
    // إعادة توجيه فورية إلى الصفحة الرئيسية
    router.replace('/');
  }, [router]);

  // لا نعرض أي محتوى، فقط إعادة توجيه
  return null;
}