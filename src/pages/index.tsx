import { createClient } from "next-sanity";

import AboutMe from "@/components/AboutMe"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact";

const Home = (props: any) => {
    const { experience } = props

    return (
        <>
            <AboutMe/>
            <Experience experience={experience}/>
            <Contact/>
        </>
    )
}

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2022-03-25",
    useCdn: false
})

export async function getStaticProps() {
  const experience = await client.fetch(`*[_type == "experience"]`);

  return {
    props: {
      experience
    }
  };
}

export default Home