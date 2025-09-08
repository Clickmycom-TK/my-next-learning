import React from 'react'

type ProductIdPageProps = { 
  params: { productId: string }; //params ตั้งใช้คำนี้เท่านั้นแล้วจะสามารถรับค่าจาก URL ได้
  searchParams?: Record<string, string | string[] | undefined>;
  children: {children: React.ReactNode};
};

export default function ProductIdLayout({children,params,searchParams}: ProductIdPageProps) {
  const { productId } = params;

  return (
    <>
    <div>ProductIdLayout {productId}</div>
    {children}
    </>
    
  )
}
