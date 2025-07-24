export type Work = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    subDescription?: string;
    image: string;
    // image1: string;
    // link: string;
    conclusionTitle: string;
    conclusion: string;
    conclusionPoints?: string[];
    conclusionTwo?: string;
    conclusionTitleTwo?: string;
    conclusionThree?: string
    questionsAndAnswers?: {
        question: string;
        answer: string;
    }[];

    author?: string;
    date?: string;
    category?: string;
    secondImage?: string;
    secondImageDescription?: string;
    thirdImage?: string;
    thirdImageDescription?: string;
}