'use client';

import React, {useRef} from 'react';
import {motion, useInView} from "framer-motion";
import {ArrowLeft} from "lucide-react";
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const titleVariants = {
    hidden: {opacity: 0, y: 50, scale: 0.8},
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

const projectVariants = {
    hidden: {opacity: 0, y: 60},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

const imageVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const textVariants = {
    hidden: {opacity: 0, x: -30},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.1
        }
    }
};

const tagVariants = {
    hidden: {opacity: 0, scale: 0.8, y: 10},
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

const backButtonVariants = {
    hidden: {opacity: 0, x: -20},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

interface ProjectProps {
    title: string;
    subtitle: string;
    description: string;
    subDescription?: string;
    image: string;
    conclusionTitle: string;
    conclusion: string;
    conclusionPoints?: string[];
    conclusionTitleTwo?: string;
    conclusionThree?: string;
    questionAndAnswers?: {
        question: string;
        answer: string;
    }[]
}

const ProjectSection = ({
                            title,
                            description,
                            subDescription,
                            conclusionTitle,
                            conclusionTitleTwo,
                            image,
                            conclusion,
                            conclusionPoints,
                            conclusionThree,
                            questionAndAnswers
                        }: ProjectProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-100px"});

    return (
        <div className="mx-auto w-full font-segoe" ref={ref}>
            <motion.div
                className="flex flex-col items-start justify-center mt-6 sm:mt-10 mb-20 sm:mb-40 gap-6 sm:gap-12"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Back Button */}
                <motion.button
                    className="flex container items-center gap-2 hover:text-gray-500 transition-colors duration-200 group"
                    variants={backButtonVariants}
                    whileHover={{x: -4}}
                    whileTap={{scale: 0.95}}
                    onClick={() => window.history.back()}
                >
                    <ArrowLeft size={12} className="group-hover:translate-x-[-2px] transition-transform duration-200"/>
                    <span className="text-sm sm:text-[12px] font-bold">Back to Works</span>
                </motion.button>

                {/*Date and Category*/}
                <div className={"container flex items-center justify-between"}>
                    <div className={"uppercase text-[14px] sm:text-[16px] tracking-widest"}>
                        HEALTHCARE
                    </div>

                    <div className={"text-[14px] sm:text-[16px] "}>
                        July 18, 2025
                    </div>
                </div>

                {/* Title */}
                <div className={"container flex items-center justify-between"}>
                    <motion.h1 className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-segoe italic"
                               variants={titleVariants}>
                        {title}
                    </motion.h1>
                    <div className={"text-[12px] font-bold"}>
                        By john doe
                    </div>
                </div>


                {/* Full Width Image */}
                <motion.div className="w-full aspect-video  overflow-hidden" variants={imageVariants}>
                    <Image
                        src={image}
                        alt="Project Image"
                        width={1920}
                        height={1080}
                        className="object-cover w-full h-full border border-stone-400 border-dotted"
                    />
                </motion.div>

                <div className={"w-full flex items-center justify-center"}>
                    <div className={"w-2/4"}>

                    </div>

                    {/* Subtitle & Description */}
                    <motion.div className="container flex flex-col items-start justify-center gap-3 sm:gap-4 w-full"
                                variants={textVariants}>

                        {/*<motion.h2 className="rounded font-semibold text-lg sm:text-xl" variants={tagVariants}>*/}
                        {/*    {subtitle}*/}
                        {/*</motion.h2>*/}
                        <motion.div className="space-y-4 text-justify" variants={projectVariants}>
                            {description.split("\n").map((para, i) => (
                                <p key={i} className="text-sm sm:text-[18px] text-gray-700 leading-relaxed">
                                    {para}
                                </p>
                            ))}

                            <h2 className={"text-[32px] font-medium"}>Medical Case Challenges and Benchmarks</h2>

                            {subDescription?.split("\n").map((para, i) => (
                                <p key={i} className="text-sm sm:text-[18px] text-gray-700 leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </motion.div>
                        {/* <motion.p className="text-sm sm:text-base text-gray-700 leading-relaxed" variants={projectVariants}>
                        {description}
                    </motion.p> */}
                    </motion.div>
                </div>

                <div className={"w-full flex items-center justify-center"}>
                    <VideoPlayer/>
                </div>

                <div className={"w-full flex items-center justify-center"}>
                    <div className={"w-2/4"}></div>
                    {/* Conclusion */}
                    <motion.div className="container flex flex-col gap-3 sm:gap-4 w-full" variants={textVariants}>
                        <motion.h2 className="text-lg sm:text-[33px] font-medium" variants={tagVariants}>
                            {conclusionTitle}
                        </motion.h2>
                        <motion.p className="text-sm sm:text-[18px] text-gray-700 leading-relaxed"
                                  variants={projectVariants}>
                            {conclusion.split("\n").map((para, i) => (
                                <span key={i}>
                                    {para}
                                    {i < conclusion.split("\n").length - 1 && <br/>}
                                </span>
                            ))}
                        </motion.p>

                        <motion.ul>
                            {conclusionPoints?.map((c, i) => (
                                <motion.li
                                    key={i}
                                    className="text-sm sm:text-base text-gray-700 leading-relaxed"
                                    variants={tagVariants}
                                >
                                    <span className="mr-2">✨</span>{c}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>

                <div className={"w-full flex flex-col items-center justify-center gap-8"}>
                    <div className={"w-[60%] flex flex-col items-center justify-center gap-5"}>
                        <Image src={"/images/works/MAI-Dx-Orchestrator-v3-1-1920x1997.jpg"} alt={"img2"}
                               className={"w-full"} width={800} height={400}/>

                        <div className={"text-base italic"}>
                            The MAI-Dx Orchestrator turns any language model into a virtual panel of clinicians: it can
                            ask
                            follow-up questions, order tests, or deliver a diagnosis, then run a cost check and verify
                            its
                            own reasoning before deciding whether to proceed.
                        </div>
                    </div>
                </div>


                <div className={"w-full flex items-center justify-center"}>
                    <div className={"w-2/4"}></div>
                    {/* Conclusion */}
                    <motion.div className="container flex flex-col gap-3 sm:gap-4 w-full" variants={textVariants}>
                        <motion.p className="text-sm sm:text-[18px] text-gray-700 leading-relaxed"
                                  variants={projectVariants}>
                            {conclusion.split("\n").map((para, i) => (
                                <span key={i}>
                                    {para}
                                    {i < conclusion.split("\n").length - 1 && <br/>}
                                </span>
                            ))}
                        </motion.p>
                    </motion.div>
                </div>

                <div className={"w-full flex flex-col items-center justify-center gap-8"}>
                    <div className={"w-[60%] flex flex-col items-center justify-center gap-5"}>
                        <Image src={"/images/works/Pareto-Chart-v3-1-1536x1523.jpg"} alt={"img2"}
                               className={"w-full"} width={800} height={400}/>

                        <div className={"text-base italic"}>
                            Comparison of AI powered diagnostic agents by accuracy and average diagnostic test cost per
                            case. Top performing agents appear toward the top left quadrant, reflecting higher accuracy
                            and lower cost. The lower dotted line represents the performance range of the best
                            individual foundation models. The purple line traces the performance of MAI-DxO across
                            different configurations. The red cross indicates the average performance of 21 practicing
                            physicians.
                        </div>
                    </div>
                </div>

                <div className={"w-full flex items-center justify-center"}>
                    <div className={"w-2/4"}></div>
                    {/* Conclusion */}
                    <motion.div className="container flex flex-col gap-3 sm:gap-4 w-full" variants={textVariants}>
                        <motion.h2 className="text-lg sm:text-[33px] font-medium" variants={tagVariants}>
                            {conclusionTitleTwo}
                        </motion.h2>
                        <motion.div className="space-y-4 text-justify" variants={projectVariants}>
                            {conclusionThree?.split("\n").map((para, i) => (
                                <p key={i} className="text-sm sm:text-[18px] text-gray-700 leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </motion.div>


                        <div
                            className={"px-12 w-fit rounded-full text-white border border-solid border-[#732630] hover:bg-white hover:text-[#732630] cursor-pointer transition-all duration-300 ease-in-out py-[18px] bg-[#732630] text-[18px]"}>
                            View Publication
                        </div>


                        <motion.h2 className="text-lg mt-16 sm:text-[33px] font-medium" variants={tagVariants}>
                            Q&A
                        </motion.h2>

                        <motion.div className="space-y-4 text-justify mt-5" variants={projectVariants}>
                            {questionAndAnswers?.map((q, i) => (
                                <div key={i} className={"flex items-start justify-center flex-col"}>
                                    <h3 className={"text-[18px] font-semibold "}>
                                        {q.question}
                                    </h3>
                                    <p className="text-sm sm:text-[18px] text-gray-700 leading-relaxed">
                                        {q.answer}
                                    </p>
                                </div>
                            ))}


                        </motion.div>

                    </motion.div>
                </div>
            </motion.div>

            <section className={"w-full bg-stone-700 text-white flex items-center justify-center"}>
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <h2 className="text-2xl font-light text-center mb-12">Related</h2>

                    <div className={"flex gap-16 items-center justify-center"}>

                        <div className={"flex flex-col gap-2 items-start justify-center"}>
                            <div className={"rounded-xl overflow-hidden w-[473px] h-[566px] relative cursor-pointer"}>
                                <Image className={"transition-all h-full w-full duration-700 ease-in-out hover:scale-110"}
                                       src="/images/works/mustafa-1.jpg" alt={"im"} height={366} width={273}/>
                            </div>

                            <h3 className={"text-[11px]"}>ai · ted-talk</h3>
                            <h2 className={"text-[25px]"}>What is AI anyway?</h2>
                        </div>
                        <div className={"flex flex-col gap-2 items-start justify-center"}>
                            <div className={"rounded-xl overflow-hidden w-[473px] h-[566px] relative cursor-pointer"}>
                                <Image className={"transition-all h-full w-full duration-700 ease-in-out hover:scale-110"}
                                       src="/images/works/mustafa-1.jpg" alt={"im"} height={366} width={273}/>
                            </div>

                            <h3 className={"text-[11px]"}>ai · ted-talk</h3>
                            <h2 className={"text-[25px]"}>What is AI anyway?</h2>
                        </div>

                        <div className={"flex flex-col gap-2 items-start justify-center"}>
                            <div className={"rounded-xl overflow-hidden w-[473px] h-[566px] relative cursor-pointer"}>
                                <Image className={"transition-all h-full w-full duration-700 ease-in-out hover:scale-110"}
                                       src="/images/works/mustafa-1.jpg" alt={"im"} height={366} width={273}/>
                            </div>

                            <h3 className={"text-[11px]"}>ai · ted-talk</h3>
                            <h2 className={"text-[25px]"}>What is AI anyway?</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectSection;
