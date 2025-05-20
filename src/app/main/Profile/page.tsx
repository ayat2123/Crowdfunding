import PublicFooter from "@/components/PublicFooter";
import PublicNavbar from "@/components/PublicNavbar";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="overflow-x-hidden">
      <PublicNavbar />

      <div className="w-full">
        <div className="relative w-full h-auto rounded px-4 py-4">
          <Image
            src="/Vector(18).png"
            alt="profile image"
            width={1920}
            height={600}
            className="w-full h-auto rounded"
          />

          <button className="flex items-center absolute top-8 right-8 bg-[#EDE9FE] px-4 py-2 rounded shadow text-sm">
            <Image
              src="/Vector (19).png"
              alt="edit icon"
              width={15}
              height={15}
              className="mr-2 cursor-pointer"
            />
            Edit Cover
          </button>
          <span className="absolute bottom-8 right-8 text-white">  000$  Total contribution</span>
          <div className="absolute top-100 left-50">
            <Image src="/Vector(20).png" width={128} height={128} alt="wish icon" className="rounded-md" />
          </div>
          <div className="absolute top-115 left-55">
            <button className="text-white px-4 py-1 rounded text-xs bg-[rgba(170,153,236,0.15)] backdrop-blur-md border border-[rgba(170,153,236,0.3)] cursor-pointer">
              Edit Cover
            </button>

          </div>
        </div>
        <div>

        </div>
      </div>

      <PublicFooter />
    </div>
  );
}
