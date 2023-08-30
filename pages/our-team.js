import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from 'framer-motion';

export default function OurTeam() {
  return (
    <section class="bg-white dark:bg-gray-900 lg:mx-24">
        
        <Head>
        <title>Technitós: Our Team</title>
      </Head>
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our <span class="text-blue-500">Talented Team</span></h1>
        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
        Our team is a dynamic blend of AI enthusiasts, content creators, and technical wizards, all driven by a shared passion for demystifying the world of artificial intelligence. Together, we&apos;ve created a hub that celebrates the marvels of AI, offering insightful articles, thought-provoking discussions, and practical applications that cater to both novices and experts.
        </p>


        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">



        {/* Nikunj */}
        <motion.div
           whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: [1, 1.05],
            transition: {
              duration: .3
            }
          }}>
        <div class="px-12 py-8 transition-colors duration-300 transform border rounded-xl md:hover:border-transparent group md:hover:bg-blue-600 dark:border-gray-700 dark:md:hover:border-transparent hover:border-transparent ">
                <div class="flex flex-col sm:-mx-4 sm:flex-row">
                    <Image class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://cdn.sanity.io/images/7nf84oj6/production/dc4a58ccc6ffc0623010afc98a26bd1a64f2354c-900x900.jpg" height={1000} width={1000} alt=""/>

                    <div class="mt-4 sm:mx-4 sm:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white md:group-hover:text-white">Nikunj Goyal</h1>

                        <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 md:group-hover:text-gray-300">Developer</p>
                    </div>
                </div>

                <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 md:group-hover:text-gray-300">As the lead developer, He has meticulously crafted the technical foundation of the platform, ensuring its seamless functionality and optimal performance.</p>

                <div class="flex mt-4 -mx-2">
                    <a href="https://github.com/nikunjthebest" target="_blank" class="mx-2 text-gray-600 dark:text-gray-300 md:hover:text-gray-500 dark:md:hover:text-gray-300 md:group-hover:text-white" aria-label="Github">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
            </motion.div>


        {/* Arhaan */}
        <motion.div
           whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: [1, 1.05],
            transition: {
              duration: .3
            }
          }}>
        <div class="px-12 py-8 transition-colors duration-300 transform border rounded-xl md:hover:border-transparent group md:hover:bg-blue-600 dark:border-gray-700 dark:md:hover:border-transparent">
                <div class="flex flex-col sm:-mx-4 sm:flex-row">
                    <Image class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://cdn.sanity.io/images/7nf84oj6/production/58df641b4db86e24610e8c01349ae24730c99145-540x360.jpg" width={1000} height={1000} alt=""/>

                    <div class="mt-4 sm:mx-4 sm:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white md:group-hover:text-white">Arhaan Khan</h1>

                        <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 md:group-hover:text-gray-300">Co-Developer</p>
                    </div>
                </div>

                <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 md:group-hover:text-gray-300">Passionate co-developer with a knack for crafting seamless web experiences. Adept at turning design visions into functional code and collaborating with precision.</p>

                <div class="flex mt-4 -mx-2">

                    <Link href="https://github.com/Arhaaxxx" target="_blank" class="mx-2 text-gray-600 dark:text-gray-300 md:hover:text-gray-500 dark:md:hover:text-gray-300 md:group-hover:text-white" aria-label="Github">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                            </path>
                        </svg>
                    </Link>
                </div>
            </div>
            </motion.div>


        {/* Ali */}
        <motion.div
           whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: [1, 1.05],
            transition: {
              duration: .3
            }
          }}>
            <div class="px-12 py-8 transition-colors duration-300 transform border rounded-xl md:hover:border-transparent group md:hover:bg-blue-600 dark:border-gray-700 dark:md:hover:border-transparent">
                <div class="flex flex-col sm:-mx-4 sm:flex-row">
                    <Image class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://cdn.sanity.io/images/7nf84oj6/production/6d35b9c3cb2f99fe2a527289bdb480074d211bc2-1217x1600.jpg" width={1000} height={1000} alt=""/>
                    <div class="mt-4 sm:mx-4 sm:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white md:group-hover:text-white">Ali Atiyab Husain</h1>

                        <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 md:group-hover:text-gray-300">Content Writer</p>
                    </div>
                </div>

                <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 md:group-hover:text-gray-300">Innovative AI content writer generating dynamic and relevant articles with precision. Seamlessly integrates data-driven insights into captivating narratives.</p>

            </div>
            </motion.div>




        {/* Hrishit */}
        <motion.div
           whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: [1, 1.05],
            transition: {
              duration: .3
            }
          }}>
            <div class="px-12 py-8 transition-colors duration-300 transform border rounded-xl md:hover:border-transparent group md:hover:bg-blue-600 dark:border-gray-700 dark:md:hover:border-transparent">
                <div class="flex flex-col sm:-mx-4 sm:flex-row">
                    <Image class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://cdn.sanity.io/images/7nf84oj6/production/262f2f7cc9eaf8e0843308a643d1b8f9ccc46f47-220x286.jpg" height={1000} width={1000} alt=""/>

                    <div class="mt-4 sm:mx-4 sm:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white md:group-hover:text-white">Hrishit S</h1>

                        <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 md:group-hover:text-gray-300">Content Writer</p>
                    </div>
                </div>


                <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 md:group-hover:text-gray-300">AI content writer here to help you on various topics - with the emerging advancements and constant breakthroughs, his blogs provide much needed information and updates.</p>

            </div>
            </motion.div>





        {/* Utkarsh */}
        <motion.div
           whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: [1, 1.05],
            transition: {
              duration: .3
            }
          }}>
            <div class="px-12 py-8 transition-colors duration-300 transform border rounded-xl md:hover:border-transparent group md:hover:bg-blue-600 dark:border-gray-700 dark:md:hover:border-transparent">
                <div class="flex flex-col sm:-mx-4 sm:flex-row">
                    <Image class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://cdn.sanity.io/images/7nf84oj6/production/214b077ded383ac7a2dbf1d845a4d27c365b44de-180x281.jpg" width={1000} height={1000} alt=""/>

                    <div class="mt-4 sm:mx-4 sm:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white md:group-hover:text-white">Utkarsh Rawat</h1>

                        <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 md:group-hover:text-gray-300">Content Writer</p>
                    </div>
                </div>

                <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 md:group-hover:text-gray-300">Creative content writer skilled in weaving words that captivate and inform. Expert at tailoring engaging narratives to diverse audiences. Committed to delivering compelling stories that resonate and enrich the blogging platform.</p>
            </div>
            </motion.div>










            
        </div>
    </div>
</section>
  );
}
