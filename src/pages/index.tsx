import { createClient } from "next-sanity";

import AboutMe from "@/components/AboutMe"
import Experience from "@/components/Experience"

const Home = (props: any) => {
    const { experience } = props

    typeof document !== 'undefined' && document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    return (
        <>
            <AboutMe/>
            <Experience experience={experience}/>
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