import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
 
const certs = [
  { title:"Salesforce Certified Administrator", description:"Demonstrates expertise in managing and configuring Salesforce, including users, security, and automation.", badge:"Admin", gradient:"linear-gradient(135deg,#00d4ff,#0ea5e9)", glow:"#00d4ff" },
  { title:"Salesforce Certified Platform Developer I (PD1)", description:"Validates strong knowledge of Apex, Lightning components, and custom application development on the Salesforce platform.", badge:"PD1", gradient:"linear-gradient(135deg,#7c3aed,#9333ea)", glow:"#7c3aed" },
];
 
export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
 
  return (
    <section id="certifications" className="w-full max-w-6xl mx-auto px-6 py-28">
      <motion.div ref={ref}>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color:"#00d4ff", fontFamily:"'Orbitron',sans-serif" }}>Certifications</span>
          <div className="flex-1 h-px" style={{ background:"linear-gradient(90deg,rgba(0,212,255,0.4),transparent)" }} />
        </div>
        <motion.h2 initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }} className="text-3xl md:text-4xl font-bold mb-14 text-center" style={{ fontFamily:"'Orbitron',sans-serif", color:"#fff" }}>
          🎓 Credentials
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certs.map((cert, i) => (
            <motion.div key={cert.title} initial={{ opacity:0, y:40 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7, delay:i*0.2 }}
              className="relative rounded-2xl overflow-hidden group" style={{ background:"rgba(15,20,40,0.8)", border:"1px solid rgba(255,255,255,0.06)" }}
              whileHover={{ borderColor:`${cert.glow}50`, boxShadow:`0 0 40px ${cert.glow}25`, y:-4 }}>
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background:cert.gradient }} />
              <div className="p-8 flex gap-6 items-start">
                <motion.div className="w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0" style={{ background:cert.gradient, fontFamily:"'Orbitron',sans-serif", color:"#fff" }}
                  animate={{ boxShadow:[`0 0 20px ${cert.glow}30`,`0 0 35px ${cert.glow}50`,`0 0 20px ${cert.glow}30`] }} transition={{ duration:2.5, repeat:Infinity, delay:i*0.5 }}>
                  {cert.badge}
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🎓</span>
                    <h3 className="text-sm font-bold leading-tight" style={{ color:"#e2e8f0", fontFamily:"'Orbitron',sans-serif" }}>{cert.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed mt-3" style={{ color:"#64748b", fontFamily:"'Inter',sans-serif" }}>{cert.description}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background:cert.glow, boxShadow:`0 0 8px ${cert.glow}` }} />
                    <span className="text-xs font-medium" style={{ color:cert.glow, fontFamily:"'Inter',sans-serif" }}>Certified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}