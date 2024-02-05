"use client";


const Skills: React.FC = () => {
const skills = ["HTML", "CSS", "JavaScript", "React", "Astro"]

  return (
    <>
<ul>
{skills.map((skill) => <li>&#128171;{skill}</li>)}


</ul>
    </>
  );
};

export default Skills;