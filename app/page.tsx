import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
      <div className="h-96 flex flex-col items-center justify-center text-center gap-5">
        <h1 className="text-4xl font-bold">Welcome to SnapStacks</h1>
        <p className="text-lg text-gray-600">A place to stack all your amazing snaps.</p>
        <Button asChild>
          <Link href="/gallery">View Gallery</Link>
        </Button>
      </div>
  );
}
