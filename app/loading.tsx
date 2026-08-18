import Image from "next/image";

export default function Loading() {
  return <main className="grid min-h-screen place-items-center bg-mist"><Image src="/images/avorynai-logo.png" width={120} height={120} alt="avorynai loading" className="h-24 w-24 animate-pulse object-contain" /></main>;
}
