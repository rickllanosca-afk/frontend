import Image from "next/image";

export default function Loading() {
  return <main className="grid min-h-screen place-items-center bg-mist"><Image src="/images/ntonyxai-logo-clean.png" width={120} height={120} alt="Ntonyxai loading" className="h-24 w-24 animate-pulse object-contain" /></main>;
}
