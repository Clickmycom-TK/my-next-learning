import React from 'react'

type ProductIdPageProps = { 
  productIdParam: { productId: string }; //params ตั้งใช้คำนี้เท่านั้นแล้วจะสามารถรับค่าจาก URL ได้
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function ProductIdPage({ productIdParam, searchParams }: ProductIdPageProps) {
    const { productId } = productIdParam;
    const search = searchParams?.search;
    const page = searchParams?.page;

    console.log("productId: "+productId);
    console.log("search: "+search);
    console.log("page: "+page);
    
  return (
    <>
        <div>ProductIdPage</div>
        
        <p>productId: {productId}</p>
        <p>search: {search}</p>
        <p>page: {page}</p>
        <hr></hr>
        <p>ส่ง props ชื่อ params ไปให้ component ProductionChild ค่าที่ส่งไปก็คือ object ที่ชื่อว่า params จาก parent (ProductIdPage)</p>
        <ProductionChild params={productIdParam}/> 
        
    </>
    
  )

}


function ProductionChild({params}: {params: { productId: string }}){
    const { productId } = params;
    return (
        <>
            <div>ProductChild</div>
            <p>productId-Child: {productId}</p>
        </>
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