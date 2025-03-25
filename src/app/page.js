"use client"

import dynamic from "next/dynamic";
import Table from "./Components/table";

const GaugeComponent = dynamic(() => import('react-gauge-component'), { ssr: false });

export default function Home() {

  return (
    <div className="">
      <main className="bg-blue-300">
        <section id="home" className="h-screen w-screen py-12">
          <h1 className="text-center py-7 text-4xl font-bold text-white">At SS Consultants, we deliver measurable results</h1>
          <p className="text-white px-5">85% faster hiring for urgent positions compared to traditional methods Up to 92% reduction in opportunity costs due to delayed internal hiring 95% accuracy in matching candidates to job profiles, usingAI-driven technology 60% lower cost-per-hire through streamlined processes and automation</p>
          <div className="flex">
          <div className="w-80">
          <GaugeComponent
  type="semicircle"
  arc={{
    colorArray: ['#003092'],
    padding: 0.02,
    subArcs:
      [
        { limit: 40 },
        { limit: 60 },
        { limit: 70 },
        {},
        {},
        {},
        {}
      ]
  }}
  pointer={{type: "blob", animationDelay: 0 }}
  value={85}
/> 
<p className="text-center text-white">Faster Hiring</p>
</div>

<div className="w-80">
          <GaugeComponent
  type="semicircle"
  arc={{
    colorArray: ['#003092'],
    padding: 0.02,
    subArcs:
      [
        { limit: 40 },
        { limit: 60 },
        { limit: 70 },
        {},
        {},
        {},
        {}
      ]
  }}
  pointer={{type: "blob", animationDelay: 0 }}
  value={92}
/> 
<p className="text-center text-white">Reduction in Costs</p>
</div>

<div className="w-80">
          <GaugeComponent
  type="semicircle"
  arc={{
    colorArray: ['#003092'],
    padding: 0.02,
    subArcs:
      [
        { limit: 40 },
        { limit: 60 },
        { limit: 70 },
        {},
        {},
        {},
        {}
      ]
  }}
  pointer={{type: "blob", animationDelay: 0 }}
  value={60}
/> 
<p className="text-center text-white">Accuracy in Matching</p>
</div>
</div>
        </section>

        <section id="AI-Recruitment" className="h-screen w-screen my-7">
          <h1 className="text-center font-bold text-white text-2xl">AI-Recruitment</h1>
          <p className="text-white px-5 text-center">AI-Driven Recruitment for Faster, Smarter Hiring At SS Consultants,
          we use cutting-edge AI technology to transform the way we recruit, delivering faster, more accurate results that save you time and resources.</p>
        </section>

        <section id="Our-Process" className="h-screen w-screen">
          <h1 className="text-center font-bold text-white text-2xl">Our-Process</h1>
          <Table/>
        </section>

        <section id="Our-Services" className="h-screen w-screen">
          <h1 className="text-center font-bold text-white text-2xl">Our-Services</h1>
        </section>

        <section id="blogs" className="h-screen w-screen">
          <h1 className="text-center font-bold text-white text-2xl">blogs</h1>
        </section>
      </main>
      <footer className="bg-black">
        <p>SS Consultants ltd</p>
      </footer>
    </div>
  );
}
