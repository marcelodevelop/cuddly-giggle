import { 
    ExperienceContainer, 
    Title,
    ExperienceCard,
    ExperienceCardYear,
    ExperienceCardInfo,
    Year,
    CardTitle,
    CardRank,
    CardList,
    CardTags,
    Tag
} from "./Experience.styles"

type ExperienceType = {
    company: string,
    start: string,
    end: string,
    jobtitle: string,
    experience: [
        string
    ],
    languages: [
        string
    ],
    _id: string
}

interface ExperienceProps {
    experience: [
        ExperienceType
    ]
}

const Experience = (props: ExperienceProps) => {
    const { experience } = props

    const filterExperience = () => {
        const newList = experience.sort((a, b) => Number(b.start) - Number(a.start))

        return newList
    }

    const experienceList = filterExperience()

    return (
        <ExperienceContainer id="experience">
            <Title>Experience</Title>
            {experienceList.map(exp => {
                return (
                    <ExperienceCard key={exp._id}>
                        <ExperienceCardYear>
                            <Year>{exp.start} - {exp.end}</Year>
                        </ExperienceCardYear>
                        <ExperienceCardInfo>
                            <CardTitle>{exp.company}</CardTitle>
                            <CardRank>{exp.jobtitle}</CardRank>
                            <CardList>
                                {exp.experience.map((e, index) => {
                                    return <li key={index}>{e}</li>
                                })}
                            </CardList>
                            <CardTags>
                                {exp.languages.map((e, index) => {
                                    return (
                                        <Tag key={index}>{e}</Tag>
                                    )
                                })}
                            </CardTags>
                        </ExperienceCardInfo>
                    </ExperienceCard>
                )
            })}
        </ExperienceContainer>
    )
}

export default Experience