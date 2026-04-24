import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
 
const TEXT = "Turning complex workflows into seamless Salesforce experiences";
 
export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [cursor, setCursor] = useState(true);
  const [done, setDone] = useState(false);
 
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => { if (i < TEXT.length) { setDisplayed(TEXT.slice(0, ++i)); } else { setDone(true); clearInterval(t); } }, 45);
    return () => clearInterval(t);
  }, []);
 
  useEffect(() => { const t = setInterval(() => setCursor(v => !v), 530); return () => clearInterval(t); }, []);
 
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {[0,1,2].map(i => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width: `${300+i*150}px`, height: `${300+i*150}px`, background: `radial-gradient(circle, rgba(0,212,255,${0.04-i*0.01}) 0%, transparent 70%)`, top:"50%", left:"50%", transform:"translate(-50%,-50%)" }}
          animate={{ scale:[1,1.08,1], opacity:[0.5,0.8,0.5] }} transition={{ duration:4+i*1.5, repeat:Infinity, ease:"easeInOut", delay:i*0.8 }} />
      ))}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }} className="mb-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border" style={{ color:"#00d4ff", borderColor:"rgba(0,212,255,0.3)", background:"rgba(0,212,255,0.05)", fontFamily:"'Orbitron',sans-serif" }}>
            Salesforce Professional
          </span>
        </motion.div>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight min-h-[4em] flex items-center justify-center" style={{ fontFamily:"'Orbitron',sans-serif", color:"#fff", textShadow:"0 0 40px rgba(0,212,255,0.2)" }}>
          <span>{displayed}<span className="inline-block w-0.5 h-[1em] ml-1" style={{ background:"#00d4ff", opacity:cursor?1:0, boxShadow:"0 0 8px #00d4ff", verticalAlign:"middle" }} /></span>
        </div>
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:done?1:0, y:done?0:20 }} transition={{ duration:0.8, delay:0.3 }} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" onClick={e=>{e.preventDefault();document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})}} className="px-8 py-3 rounded-full font-semibold text-sm text-white" style={{ background:"linear-gradient(135deg,#00d4ff,#7c3aed)", boxShadow:"0 0 20px rgba(0,212,255,0.3)", fontFamily:"'Inter',sans-serif" }}>View My Work</a>
          <a href="#about" onClick={e=>{e.preventDefault();document.getElementById("about")?.scrollIntoView({behavior:"smooth"})}} className="px-8 py-3 rounded-full font-semibold text-sm border" style={{ color:"#00d4ff", borderColor:"rgba(0,212,255,0.4)", background:"rgba(0,212,255,0.05)", fontFamily:"'Inter',sans-serif" }}>About Me</a>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{ y:[0,8,0] }} transition={{ duration:1.5, repeat:Infinity }}>
        <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2" style={{ borderColor:"rgba(0,212,255,0.4)" }}>
          <motion.div className="w-1 h-2 rounded-full" style={{ background:"#00d4ff" }} animate={{ opacity:[1,0,1], y:[0,6,0] }} transition={{ duration:1.5, repeat:Infinity }} />
        </div>
      </motion.div>
    </section>
  );
}