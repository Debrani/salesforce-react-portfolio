import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
 
const paragraphs = [
  "I help businesses streamline and automate their processes using Salesforce.",
  "From setup to customization, I build solutions that are practical and easy to use.",
  "I work with Salesforce Admin, Apex, and Lightning Web Components.",
  "My experience includes Health Cloud, Education Cloud, Sales Cloud, and Service Cloud.",
  "I also leverage modern tools like Agentforce for smarter solutions.",
  "If you need a system that supports your growth, I can help make it happen.",
];
 
const skills = ["Salesforce Admin","Apex","Lightning Web Components","Health Cloud","Education Cloud","Sales Cloud","Service Cloud","Agentforce"];
 
export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
 
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-28">
      <motion.div ref={ref} initial={{ opacity:0, y:40 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }}>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color:"#00d4ff", fontFamily:"'Orbitron',sans-serif" }}>About Me</span>
          <div className="flex-1 h-px" style={{ background:"linear-gradient(90deg,rgba(0,212,255,0.4),transparent)" }} />
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-5">
            {paragraphs.map((text, i) => (
              <motion.p key={i} initial={{ opacity:0, x:-30 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.6, delay:0.15+i*0.1 }} className="text-base leading-relaxed" style={{ color: i===paragraphs.length-1 ? "#94a3b8" : "#94a3b8", fontFamily:"'Inter',sans-serif" }}>
                {text}
              </motion.p>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <motion.div className="relative rounded-2xl p-8 glass-panel border" style={{ borderColor:"rgba(0,212,255,0.15)" }} initial={{ opacity:0, x:30 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.3 }}>
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background:"linear-gradient(90deg,#00d4ff,#7c3aed)" }} />
              <h3 className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color:"#00d4ff", fontFamily:"'Orbitron',sans-serif" }}>Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span key={skill} initial={{ opacity:0, scale:0.8 }} animate={inView?{opacity:1,scale:1}:{}} transition={{ duration:0.4, delay:0.5+i*0.06 }} className="px-3 py-1.5 rounded-full text-xs font-medium border cursor-default" style={{ color:"#00d4ff", borderColor:"rgba(0,212,255,0.3)", background:"rgba(0,212,255,0.05)", fontFamily:"'Inter',sans-serif" }}
                    whileHover={{ scale:1.05, background:"rgba(0,212,255,0.15)", boxShadow:"0 0 12px rgba(0,212,255,0.3)" }}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div className="relative rounded-2xl overflow-hidden" initial={{ opacity:0, scale:0.9 }} animate={inView?{opacity:1,scale:1}:{}} transition={{ duration:0.7, delay:0.5 }} style={{ background:"linear-gradient(135deg,rgba(0,212,255,0.08),rgba(124,58,237,0.08))", border:"1px solid rgba(0,212,255,0.1)" }}>
              <div className="p-8 text-center">
                <motion.div animate={{ rotate:360 }} transition={{ duration:20, repeat:Infinity, ease:"linear" }} className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background:"conic-gradient(from 0deg,#00d4ff,#7c3aed,#00d4ff)", padding:"2px" }}>
                  <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background:"#0a0a1a" }}>
                    <span className="text-3xl">☁️</span>
                  </div>
                </motion.div>
                <p className="text-sm" style={{ color:"#64748b", fontFamily:"'Inter',sans-serif" }}>Salesforce Ecosystem Expert</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}