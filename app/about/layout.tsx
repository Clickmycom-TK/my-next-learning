import React from 'react'

export default function AboutLayout( {children} : {children: React.ReactNode}) {
  return (
    <>
        <div>AboutLayout</div>
        {children}
    </>
    
  )
}

// Path: /about
{/* 
<RootLayout>
  <AboutLayout/>
</RootLayout> 
*/}