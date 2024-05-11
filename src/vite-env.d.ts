/// <reference types="vite/client" />

declare type btnType = "solid" | "secondary" | "trans" | "outline" | "solid-acc" | "out-acc" | "trans-acc";
declare type Social = "Facebook"|"Twitter"|"Whatsapp"|"Instagram";
// interface PhotoUrl extends Promise<unknown> {
//     default: string;
// }
declare interface NavigationContext {
    pathname: string;
    hash?: string;
    current?: string;
    // setPathname: (path?:string)=>void;
}