import Link from "next/link";
import Image from "next/image";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <Link href="/">To home...</Link>
      <div>
        <Image
          src="/images/photo.jpeg" // Route of the image file
          height={320} // Desired size with correct aspect ratio
          width={240} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
    </>
  );
}
