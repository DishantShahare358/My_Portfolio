import { achievements, education, experience, profile, projects, skillGroups } from "@/data/profile";

type Answer = { text: string; sources: string[] };

function includesAny(q: string, words: string[]) {
  return words.some((w) => q.includes(w));
}

export function answerQuestion(raw: string): Answer {
  const q = raw.toLowerCase().trim();

  if (!q) {
    return {
      text: "Ask about Dishant's projects, skills, education, experience or why to hire him. Answers stay inside this portfolio.",
      sources: ["Ask Dishant"],
    };
  }

  if (includesAny(q, ["crop", "farmer", "agri", "bazar"])) {
    const p = projects.find((x) => x.slug === "crop-bazar")!;
    return {
      text: `${p.name}: ${p.summary} Status: ${p.status}. Stack: ${p.stack.join(", ")}. Live: ${p.live}`,
      sources: ["Projects / Crop Bazar", "Resume"],
    };
  }

  if (includesAny(q, ["hyreso", "interview", "resume"])) {
    const p = projects.find((x) => x.slug === "hyreso")!;
    return {
      text: `${p.name} is ${p.summary} Status: ${p.status}. Stack: ${p.stack.join(", ")}. Live: ${p.live}`,
      sources: ["Projects / Hyreso", "Resume"],
    };
  }

  if (includesAny(q, ["campus", "rag", "chatbot", "question paper"])) {
    const p = projects.find((x) => x.slug === "campusgpt")!;
    return {
      text: `${p.name}: ${p.summary} Problem: ${p.problem} Architecture: ${p.architecture}`,
      sources: ["Projects / CampusGPT", "Resume"],
    };
  }

  if (includesAny(q, ["sign", "gesture", "vision", "opencv", "face"])) {
    return {
      text: "Computer vision work includes an AI sign-language generation system (speech to gloss to pose), a virtual mouse with MediaPipe, emotion-based music playback, object detection, and a face-recognition internship project at Internship Studio.",
      sources: ["Projects", "Experience / Internship Studio"],
    };
  }

  if (includesAny(q, ["skill", "tech", "stack", "flutter", "python"])) {
    const skills = skillGroups.map((g) => `${g.title}: ${g.items.join(", ")}`).join(" | ");
    return {
      text: `Primary core: ${profile.core.join(", ")}. ${skills}`,
      sources: ["Skills", "Resume"],
    };
  }

  if (includesAny(q, ["experience", "intern", "dataventics", "job", "work"])) {
    const text = experience
      .map((e) => `${e.role} at ${e.company} (${e.period}). ${e.bullets[0]}`)
      .join(" ");
    return { text, sources: ["Experience", "Resume"] };
  }

  if (includesAny(q, ["educat", "college", "cgpa", "degree", "b.tech", "btech"])) {
    return {
      text: `${education.degree} at ${education.school}, ${education.period}. CGPA ${education.cgpa}. ${education.location}.`,
      sources: ["Education", "Resume"],
    };
  }

  if (includesAny(q, ["hire", "why", "recruiter", "strength"])) {
    return {
      text: `${profile.shortName} ships Flutter products (Hyreso, Crop Bazar on Play Store) and applied AI (RAG, NLP, computer vision). ${profile.summary} Target roles: ${profile.roles.join(", ")}.`,
      sources: ["Why hire", "Resume"],
    };
  }

  if (includesAny(q, ["contact", "email", "phone", "linkedin", "github"])) {
    return {
      text: `Email ${profile.email} · Phone ${profile.phone} · LinkedIn ${profile.linkedin} · GitHub ${profile.github} · ${profile.location}`,
      sources: ["Contact", "Resume"],
    };
  }

  if (includesAny(q, ["play store", "playstore"])) {
    const live = projects.filter((p) => p.live);
    return {
      text: live.map((p) => `${p.name}: ${p.summary} Live: ${p.live}`).join(" "),
      sources: ["Projects / Play Store", "Resume"],
    };
  }

  if (includesAny(q, ["project"])) {
    return {
      text: projects.map((p) => `${p.code} ${p.name} (${p.category}) — ${p.summary}`).join("\n"),
      sources: ["Projects"],
    };
  }

  if (includesAny(q, ["achievement", "hackathon", "bug"])) {
    return { text: achievements.join(" "), sources: ["Achievements", "Resume"] };
  }

  return {
    text: "That is outside the verified portfolio notes. Ask about projects (Hyreso, Crop Bazar, CampusGPT), Flutter/AI skills, Dataventics experience, education, or contact details.",
    sources: ["Grounding rule"],
  };
}
