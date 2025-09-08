import React from 'react'

type ProductIdPageProps = { 
  params: { productId: string }; //params ตั้งใช้คำนี้เท่านั้นแล้วจะสามารถรับค่าจาก URL ได้
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function ProductIdPage({ params, searchParams }: ProductIdPageProps) {
    const { productId } = params;
    const search = searchParams?.search;
    const page = searchParams?.page;

    console.log("productId: "+productId);
    console.log("search: "+search);
    console.log("page: "+page);
    
  return (
    <div>ProductIdPage</div>
  )

}

//route: product/1

// searchParams: Promise<{ [k: string]:string | string[] | undefined }>; //จะสามารถรับค่า product/14878?search=go ได้ (ดึงค่าหลัง search คือ go)
// Record<string, string | string[] | undefined>
// คือการบอกว่า:
// key: เป็น string อะไรก็ได้ (เช่น search, category, page)
// value: เป็นได้ 3 แบบ
// string → เช่น "go"
// string[] → เช่น ["go", "stop"] (กรณี query มีหลายค่า)
// undefined → เผื่อ key ไม่มีค่า