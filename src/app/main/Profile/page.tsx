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
          <div className="absolute top-100 left-50  flex flex-col items-center">
            <Image src="/Vector(20).png" width={128} height={128} alt="wish icon" className="rounded-md" />
            <span className="text-center mt-2 font-medium">Wish Work</span>
          </div>
          <div className="absolute top-115 left-55">
            <button className="text-white px-4 py-1 rounded text-xs bg-[rgba(170,153,236,0.15)] backdrop-blur-md border border-[rgba(170,153,236,0.3)] cursor-pointer">
              Edit Cover
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-32 mt-28 border-b border-gray-200 text-sm text-gray-700 font-medium m-8">
          <button className="pb-2 border-b-2 border-[#7C3AED] text-[#7C3AED]">CONTRIBUTION TIER</button>
          <button className="pb-2 hover:text-[#7C3AED]">ABOUT</button>
          <button className="pb-2 hover:text-[#7C3AED]">TEAM</button>
          <button className="pb-2 hover:text-[#7C3AED]">TOP BACKERS & CONTRIBUTORS</button>
          <button className="pb-2 hover:text-[#7C3AED]">FAQ</button>
          <button className="pb-2 hover:text-[#7C3AED]">UPDATES</button>
        </div>
        <div className="flex flex-col gap-6 justify-center px-4 md:px-16 mt-10 mx-32">
          <div>
            <ul className="list-square list-inside">
              <li className="text-xl font-semibold text-gray-800">Contribution Tier</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-lg font-medium text-gray-700">
              Recurring Or One-time
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Donation */}
            <div className="border border-gray-300 rounded-md shadow-sm flex flex-col justify-between max-w-xs overflow-hidden">
              <div className="bg-[#644FC1] text-white text-center py-2 text-sm font-medium">
                Donation
              </div>
              <div className="px-8 py-3 flex flex-col items-center gap-3">
                <p className="text-sm md:text-xl font-medium text-gray-800 leading-snug">
                  Make a custom one-time or recurring contribution.
                </p>
                <div className="w-full h-28 border-2 border-gray-200 rounded-md bg-[#f2f0ff] text-[#d2c7f6] flex items-center justify-center text-base font-medium">
                  Donation
                </div>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[230px]">
                  You can make a donation at any amount that feels right to you. Every
                  contribution helps and is greatly appreciated!
                </p>

              </div>
              <div className="px-4 py-3">
                <button
                  disabled
                  className="w-full bg-[#644FC1] text-white text-xs font-semibold py-2 rounded"
                >
                  This tier cannot be edited
                </button>
              </div>
            </div>

            {/* Card 2 - Bronze Sponsor */}
            <div className="border border-gray-300 rounded-md shadow-sm flex flex-col justify-between w-full max-w-xs overflow-hidden">
              <div className="bg-[#644FC1] text-white text-center py-2 text-sm font-medium">
                Bronze Sponsor
              </div>
              <div className="px-8 py-3 flex flex-col items-center gap-3">
                <p className="text-sm md:text-xl font-medium text-gray-800">You are on the list</p>
                <div className="w-full h-28 bg-[#f2f0ff] text-[#d2c7f6] border-2 border-gray-200 rounded-md flex items-center justify-center font-medium">
                  Bronze Sponsor
                </div>
                <p className="text-sm  text-gray-700 leading-snug">
                  Start at <span className="text-[#7C3AED] font-semibold">20$</span>
                </p>

                <p className="text-xs text-gray-500 leading-relaxed max-w-[230px]">
                  Join the guest list and be the first to know major updates about our project.
                  Plus, enjoy some digital gift cards to get invited to events.
                </p>


              </div>
              <div className="px-4 py-3">
                <button className="w-full bg-[#644FC1] text-white text-xs font-semibold py-2 rounded"
                >
                  Edit Tier
                </button>
              </div>
            </div>

            {/* Card 3 - Add Tier */}
            <div className="border border-gray-300 rounded-md shadow-sm flex flex-col gap-16 w-full max-w-xs overflow-hidden">
              <div className="bg-[#644FC1] text-white text-center py-2 text-sm font-medium">
                &nbsp;
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 text-gray-500 hover:text-[#7C3AED] transition">
                <span className="text-sx md:text-lg font-medium">Add Tier</span>
                <div className="w-10 h-10 rounded-full bg-[#7C3AED] text-white text-2xl flex items-center justify-center">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PublicFooter />
    </div>
  );
}
