import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
 
const projects = [
  { emoji:"🏢", title:"Sotheby's Real Estate (Dubai)", description:"Worked as a backend developer, contributing to building and optimizing scalable solutions for a premium real estate platform. Focused on data handling, performance, and seamless system functionality.", tags:["Backend","Salesforce","Real Estate"], color:"#00d4ff" },
  { emoji:"🤖", title:"Pinkode Real Estate – Demo Agent", description:"Developed a demo agent to showcase automated workflows and intelligent interactions within a real estate use case, improving user engagement and efficiency.", tags:["Agentforce","Automation","Real Estate"], color:"#7c3aed" },
  { emoji:"👥", title:"LTTS – HRMS Agent", description:"Built an HRMS agent to streamline HR operations, automate routine tasks, and enhance employee experience through smart process handling.", tags:["HRMS","Agentforce","HR Operations"], color:"#06b6d4" },
  { emoji:"🛠️", title:"RoundEyes Technology – HRMS Tool", description:"Designed and developed an HRMS tool to manage employee data, workflows, and internal processes with improved efficiency and usability.", tags:["HRMS","Salesforce","Process Design"], color:"#8b5cf6" },
];
 
export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const [hovered, setHovered] = useState<number|null>(null);
 
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-28">
      <motion.div ref={ref}>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color:"#00d4ff", fontFamily:"'Orbitron',sans-serif" }}>Projects</span>
          <div className="flex-1 h-px" style={{ background:"linear-gradient(90deg,rgba(0,212,255,0.4),transparent)" }} />
        </div>
        <motion.h2 initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }} className="text-3xl md:text-4xl font-bold mb-14 text-center" style={{ fontFamily:"'Orbitron',sans-serif", color:"#fff" }}>
          🚀 Featured Work
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity:0, y:40 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6, delay:i*0.12 }}
              onHoverStart={()=>setHovered(i)} onHoverEnd={()=>setHovered(null)}
              className="relative rounded-2xl p-6 cursor-pointer overflow-hidden"
              style={{ background:"rgba(15,20,40,0.7)", backdropFilter:"blur(12px)", border:`1px solid ${hovered===i?project.color+"60":"rgba(255,255,255,0.06)"}`, boxShadow:hovered===i?`0 0 30px ${project.color}25`:"none", transition:"all 0.35s ease" }}>
              <AnimatePresence>
                {hovered===i && <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="absolute inset-0 pointer-events-none" style={{ background:`radial-gradient(circle at 50% 0%,${project.color}10 0%,transparent 60%)` }} />}
              </AnimatePresence>
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background:`linear-gradient(90deg,${project.color},transparent)`, opacity:hovered===i?1:0.4, transition:"opacity 0.3s" }} />
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <motion.span className="text-4xl" animate={hovered===i?{scale:1.15,rotate:[0,-5,5,0]}:{scale:1}} transition={{ duration:0.4 }}>{project.emoji}</motion.span>
                  <h3 className="font-bold leading-snug" style={{ color:hovered===i?project.color:"#e2e8f0", fontFamily:"'Orbitron',sans-serif", transition:"color 0.3s", fontSize:"0.9rem" }}>{project.title}</h3>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color:"#94a3b8", fontFamily:"'Inter',sans-serif" }}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ color:project.color, background:`${project.color}15`, border:`1px solid ${project.color}30`, fontFamily:"'Inter',sans-serif" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}