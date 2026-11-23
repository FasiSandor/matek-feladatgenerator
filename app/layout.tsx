import type { ReactNode } from "react";
export const metadata={title:"MATEK Feladatgenerátor",description:"7. osztályos matematika feladatlapok"};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="hu"><body style={{margin:0,fontFamily:"Arial, sans-serif"}}>{children}</body></html>}