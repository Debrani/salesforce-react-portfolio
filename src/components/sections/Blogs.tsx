import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
 
const blogs = [
  { title:"Mastering Apex Triggers: Patterns for Scalable Automation", excerpt:"Dive deep into Apex trigger best practices — handler patterns, avoiding recursion, and building automation that scales with your org.", tag:"Apex", readTime:"6 min read", color:"#00d4ff", date:"Apr 2025" },
  { title:"Building Lightning Web Components from Scratch", excerpt:"A step-by-step guide to creating powerful, reusable LWC components that integrate seamlessly with Salesforce's UI framework.", tag:"LWC", readTime:"8 min read", color:"#7c3aed", date:"Mar 2025" },
  { title:"Agentforce in Action: Real-World Use Cases", excerpt:"Explore how Agentforce is revolutionizing business automation — from intelligent HRMS agents to real estate demo bots.", tag:"Agentforce", readTime:"5 min read", color:"#06b6d4", date:"Feb 2025" },
];
 
export default function Blogs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
 
  return (
    <section id="blogs" className="w-full max-w-6xl mx-auto px-6 py-28">
      <motion.div ref={ref}>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color:"#00d4ff", fontFamily:"'Orbitron',sans-serif" }}>Blogs</span>
          <div className="flex-1 h-px" style={{ background:"linear-gradient(90deg,rgba(0,212,255,0.4),transparent)" }} />
        </div>
        <motion.h2 initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }} className="text-3xl md:text-4xl font-bold mb-14 text-center" style={{ fontFamily:"'Orbitron',sans-serif", color:"#fff" }}>
          ✍️ Latest Posts
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.article key={blog.title} initial={{ opacity:0, y:40 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6, delay:i*0.15 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group" style={{ background:"rgba(15,20,40,0.75)", border:"1px solid rgba(255,255,255,0.06)", backdropFilter:"blur(12px)" }}
              whileHover={{ y:-6, borderColor:`${blog.color}40`, boxShadow:`0 20px 40px ${blog.color}15` }}>
              <div className="h-1 w-full" style={{ background:`linear-gradient(90deg,${blog.color},transparent)` }} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ color:blog.color, background:`${blog.color}15`, border:`1px solid ${blog.color}30`, fontFamily:"'Inter',sans-serif" }}>{blog.tag}</span>
                  <span className="text-xs" style={{ color:"#475569", fontFamily:"'Inter',sans-serif" }}></span>
                </div>
                <h3 className="font-bold text-sm leading-snug mb-3" style={{ color:"#cbd5e1", fontFamily:"'Orbitron',sans-serif", fontSize:"0.85rem" }}>{blog.title}</h3>
                <p className="text-xs leading-relaxed mb-5" style={{ color:"#64748b", fontFamily:"'Inter',sans-serif" }}>{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color:"#475569", fontFamily:"'Inter',sans-serif" }}>{blog.readTime}</span>
                  <motion.span className="text-xs font-medium" style={{ color:blog.color, fontFamily:"'Inter',sans-serif" }} whileHover={{ x:3 }}></motion.span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}