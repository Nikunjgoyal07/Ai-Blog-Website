import Image from "next/image";

export default function OurTeam() {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
      <div class="max-w-2xl mx-auto text-center mb-40 lg:mb-14 ">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">
          Meet the crew
        </h2>
        <p class="mt-1 text-gray-600">Creative people</p>
      </div>

      <div class="lg:grid-cols-3 md:gap-12">
        <div class="grid sm:flex items-center gap-y-3 gap-x-4 ">
          <Image
            class="rounded-lg lg:w-1/6 lg:h-1/6"
            src="/photo1.jpg"
            width={400}
            height={400}
            alt="Image Description"
          />
          <div class="sm:flex sm:flex-col sm:h-full">
            <div>
              <h3 class="font-medium text-gray-800 lg:text-left text-center">
                David Forren
              </h3>
              <p class="mt-1 text-xs uppercase text-gray-500 lg:text-left text-center">Founder / CEO</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
