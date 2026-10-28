import { MotionSection } from "@/components/MotionSection";
import {
  About,
  CaseStudies,
  Contact,
  Copilot,
  Credentials,
  Experience,
  Hero,
  Identity,
  Skills,
  Terminal,
  Thinking,
  Universe,
  WhyHire,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <MotionSection immediate>
        <Hero />
      </MotionSection>
      <MotionSection variant="left">
        <Identity />
      </MotionSection>
      <MotionSection variant="right">
        <WhyHire />
      </MotionSection>
      <MotionSection>
        <About />
      </MotionSection>
      <MotionSection variant="left">
        <Thinking />
      </MotionSection>
      <MotionSection variant="right">
        <Skills />
      </MotionSection>
      <MotionSection>
        <Universe />
      </MotionSection>
      <MotionSection variant="left">
        <CaseStudies />
      </MotionSection>
      <MotionSection variant="right">
        <Terminal />
      </MotionSection>
      <MotionSection>
        <Copilot />
      </MotionSection>
      <MotionSection variant="left">
        <Experience />
      </MotionSection>
      <MotionSection variant="right">
        <Credentials />
      </MotionSection>
      <MotionSection>
        <Contact />
      </MotionSection>
    </main>
  );
}
