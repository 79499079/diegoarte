import { Inter } from "@next/font/google";
import Video from "@/components/Video";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Video />
    </>
  );
}
