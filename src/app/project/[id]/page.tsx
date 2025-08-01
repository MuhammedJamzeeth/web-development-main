import ProjectSection from "@/sections/ProjectSection";
import {Work} from "@/types/types";

const getWorkById = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/works/${id}`, {
        next: {revalidate: 60}
    });

    if (!res.ok) {
        return null;
    }

    return await res.json();
}

export default async function Project({
                                          params
                                      }: { params: { id: string } }) {
    const work: Work = await getWorkById(params.id);

    if (!work) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Work not found</h1>
            </div>
        );
    }


    return (
        <>
            <ProjectSection title={work.title} description={work.description}
                            subtitle={work.subtitle}
                            subDescription={work.subDescription}
                            conclusionTitleTwo={work.conclusionTitleTwo}
                            conclusionThree={work.conclusionThree}
                            questionAndAnswers={work.questionsAndAnswers}
                            conclusionTitle={work.conclusionTitle}
                            conclusion={work.conclusion} image={work.image}
                            conclusionPoints={work.conclusionPoints}

                            author={work.author}
                            date={work.date}
                            category={work.category}
                            secondImage={work.secondImage}
                            secondImageDescription={work.secondImageDescription}
                            thirdImage={work.thirdImage}
                            thirdImageDescription={work.thirdImageDescription}
            />
        </>
    )
}