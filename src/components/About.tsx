import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const skills = [
  "React", "TypeScript", "Next.js", "Astro", "Tailwind CSS", 
  "Node.js", "PostgreSQL", "GraphQL", "Figma", "UI/UX Design"
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black text-white">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-fuchsia-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">Nam?</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
              I'm a passionate frontend developer obsessed with creating pixel-perfect, highly interactive web experiences. 
              With a keen eye for design and a strong foundation in modern web technologies, I bridge the gap between aesthetics and functionality.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source, or experimenting with WebGL and creative coding.
            </p>
          </div>
          
          <div className="w-full md:w-1/2">
            <Card className="bg-neutral-900/40 border-neutral-800 backdrop-blur-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Tech Arsenal</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-neutral-800/80 hover:bg-fuchsia-900/50 hover:text-fuchsia-300 text-neutral-300 border border-neutral-700 transition-colors px-4 py-1.5 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
