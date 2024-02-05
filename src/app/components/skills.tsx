"use client";


const Skills: React.FC = () => {
const skills = ["HTML", "CSS", "JavaScript", "TypeScript","React", "Astro", "Firebase", "SASS", "Netlify", "Next.js", "Git" , "Tailwind", "MongoDB"]

  return (
    <>
    <h2 className="font-sfmono text-2xl #475569">Что я учу:</h2>
<ul>
{skills.map((skill) => <li>&#128171;{skill}</li>)}


</ul>
    </>
  );
};

export default Skills;