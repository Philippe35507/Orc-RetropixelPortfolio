import Image from "next/image";

export default function SubscribeOrc() {
  return (
    <div className="fixed bottom-0 right-0">
      <div className="nes-balloon from-right w-44">
        <p className="text-xs">Subscribe!</p>
      </div>
      <Image src={"/pixel-orc.webp"} width={300} height={300} alt="Orc" />
    </div>
  );
}
