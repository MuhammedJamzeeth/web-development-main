import {FC} from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
    id: string;
    title: string;
    image: string;
};

const getProjects = async (): Promise<Project[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/works`,
        {
            next: {revalidate: 60}
        });

    if (!res.ok) {
        return [];
    }

    return await res.json();

};

const Projects: FC = async () => {
    const projects = await getProjects();

    return (
        <section className="section" id="projects">
            <div className="container">
                <h2 className="text-4xl md:text-7xl lg:text-8xl">Our Selected Work</h2>
                <div className="mt-10 md:mt-16 lg:mt-20">
                    {projects.map(({id, title, image}) => (
                        <Link
                            href={`/project/${id}`}
                            key={id}
                            className="border-t last:border-b py-6 md:py-8 lg:py-10 border-stone-400 border-dotted flex flex-col relative group/project"
                        >
                            <div
                                className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-stone-200"></div>
                            <div className="relative">
                                {/* Mobile Image */}
                                <div className="aspect-video md:hidden">
                                    <Image
                                        src={image}
                                        alt={`${title} image`}
                                        className="size-full object-cover"
                                        width={1080}
                                        height={720}
                                    />
                                </div>

                                {/* Title and Arrow */}
                                <div
                                    className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
                                    <div className="lg:group-hover/project:pl-8 transition-all duration-700">
                                        <h3 className="text-xl md:text-3xl lg:text-4xl">{title}</h3>
                                    </div>

                                    <div className="relative hidden md:block">
                                        <div
                                            className="absolute aspect-video w-full top-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 lg:group-hover/project:scale-110 transition-all duration-500 z-10">
                                            <Image
                                                src={image}
                                                alt={`${title} image`}
                                                className="size-full object-cover"
                                                width={300}
                                                height={169}
                                            />
                                        </div>
                                    </div>

                                    <div className="lg:group-hover/project:pr-8 transition-all duration-700">
                                        <div className="size-6 overflow-hidden">
                                            <div
                                                className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-500">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-6 shrink-0"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                                    />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-6 shrink-0"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;


// import { FC } from "react";
// import Image from "next/image";
// import image1 from "@/assets/images/project-1.jpg";
// import image2 from "@/assets/images/project-2.jpg";
// import image3 from "@/assets/images/project-3.jpg";
// import image4 from "@/assets/images/project-4.jpg";
// import image5 from "@/assets/images/project-5.jpg";

// /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
// const projects = [
//   {
//     name: "Ocellux - Eye Screening Anywhere",
//     image: image1,
//   },
//   {
//     name: "Slit Pal - Digitise your Microscopes On-the-Go",
//     image: image2,
//   },
//   {
//     name: "ThermaLook - AI Based Thermal Imaging",
//     image: image3,
//   },
//   {
//     name: "DigiMach - AI Microscope Camera System",
//     image: image4,
//   },
//   {
//     name: "KneeScope - AI Based Acoustical Analysis of OA",
//     image: image5,
//   },
// ];

// const Projects: FC = () => {
//   return (
//     <section className="py-24 md:py-32 lg:py-40">
//       <div className="container">
//         <h2 className="text-4xl md:text-7xl lg:text-8xl">Our Selected Work</h2>
//         <div className="mt-10 md:mt-16 lg:mt-20">
//           {projects.map(({name, image}) => (
//             <a href="#" key={name} className="border-t last:border-b py-6 md:py-8 lg:py-10 border-stone-400 border-dotted flex flex-col">
//               <div className="">
//                 <div className="aspect-video md:hidden">
//                 <Image src={image} alt={`${name} image`} className="size-full object-cover"/>
//                 </div>
//                 <div className="mt-8 md:mt-0 flex justify-between items-center">
//                   <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
//                   </svg>

//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
