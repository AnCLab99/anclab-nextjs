import { siteConfig } from './site';
export type ProjectCategory = 'Brand Identity' | 'Presentation' | 'Illustration';

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  insight: string;
  cover: string;
  year: string;
  scope: string[];
  context: string;
  challenge: string;
  direction: string;
  execution: string[];
  result: string;
  featured?: boolean;
  behance?: string;
};

export const projects: Project[] = [
  {
    slug: 'mbako-point',
    title: 'Mbako Point',
    category: 'Brand Identity',
    summary: 'Translating a conceptual identity into a structured and recognizable visual system.',
    insight: 'A concept-driven identity system built from structure, symbolism, and usability.',
    cover: '/images/projects/mbako/Cover-Mbako.png',
    year: '2026',
    scope: ['Identity direction', 'Logo system', 'Visual logic', 'Presentation'],
    context:
      'Mbako Point was developed as a brand rooted in a more mature and conceptual direction, aiming to communicate identity beyond surface-level visuals.',
    challenge:
      'The challenge was transforming abstract concepts into a visual identity that remains clear, functional, and adaptable across different applications.',
    direction:
      'The identity was built through structured visual logic. Circular forms became the foundation, representing connection, center, and interaction.',
    execution: [
      'Developed a primary logo and supporting variations.',
      'Built a geometry-based visual system to support consistency.',
      'Prepared identity presentation assets to explain the thinking behind the mark.'
    ],
    result:
      'The final identity feels structured, intentional, and concept-driven—clear enough to use, but meaningful enough to stay memorable.',
    featured: true
  },
  {
    slug: 'donut-fortune',
    title: 'Donut Fortune',
    category: 'Brand Identity',
    summary: 'Building a playful identity system that stays clear across packaging and digital touchpoints.',
    insight: 'A playful visual system designed to stay clear across packaging and digital touchpoints.',
    cover: '/images/projects/Donut Fortune/Donut Fortune.png',
    year: '2026',
    scope: ['Identity direction', 'Mascot integration', 'Packaging visuals'],
    context:
      'Donut Fortune was built as a fun and friendly brand that needed to feel approachable while still staying recognizable in practical applications.',
    challenge:
      'The main challenge was maintaining clarity and legibility on a strong yellow base while keeping the playful tone consistent across small formats.',
    direction:
      'Organic shapes and a mascot-led approach were used to create an emotional connection while keeping the system flexible and easy to apply.',
    execution: [
      'Created a bubbly logotype and mascot-led identity language.',
      'Explored packaging and sticker-ready compositions.',
      'Balanced color contrast and readability across key touchpoints.'
    ],
    result:
      'The result is a cohesive brand that feels warm, memorable, and easy to apply across digital and physical materials.',
    featured: true
  },
  {
    slug: 'fcole-management',
    title: 'FCole Management',
    category: 'Presentation',
    summary: 'Refining a complex proposal into a clear, structured, and visually compelling presentation system.',
    insight: 'A presentation system built to communicate strategic thinking with clarity, structure, and a strong sense of professionalism.',
    cover: '/images/projects/FCole/Fcole.png',
    year: '2026',
    scope: ['Presentation', 'Typography direction', 'Color system'],
    context:
      'F. Cole Management required a presentation deck to communicate an English Training Facility proposal in Saudi Arabia. The content was information-heavy and strategic, requiring a visual system that could translate complex ideas into something clear, digestible, and convincing for stakeholders.',
    challenge:
      'The challenge was not just designing slides, but structuring information—turning dense, strategic content into a presentation that feels clear, persuasive, and easy to follow without overwhelming the audience.',
    direction:
      'The visual direction focused on clarity and authority. A structured layout system, consistent spacing, and a restrained blue-toned palette were used to reinforce professionalism, while visual hierarchy was carefully built to guide attention across each slide.',
    execution: [
      'Developed a consistent slide grid system for clarity and alignment.',
      'Structured content into clear sections (opportunity, strategy, investment, implementation).',
      'Applied strong typographic hierarchy to improve readability.',
      'Integrated imagery and visual accents to support, not distract from, the message.',
      'Designed key slides to highlight progression, logic, and decision-making flow.'
    ],
    result:
      'The final presentation feels structured, confident, and easy to navigate. Complex ideas are communicated more clearly, helping the proposal appear more professional, credible, and persuasive to potential stakeholders.',
    featured: true
  },
  {
    slug: 'ardeco-company-profile',
    title: 'Ardeco Company Profile',
    category: 'Presentation',
    summary: 'Designing a company profile that positions Ardeco as a premium, reliable, and execution-driven architecture and contractor brand.',
    insight: 'A company profile in this industry is not just informational—it acts as a credibility tool. It must communicate trust, capability, and professionalism within seconds.',
    cover: '/images/projects/Ardeco/Ardeco.png',
    year: '2025',
    scope: ['Page structure', 'Visual hierarchy', 'Presentation design'],
    context:
      'Ardeco required a company profile to present their architecture, interior, and contracting services to potential clients. The content included company introduction, capabilities, and project portfolios—requiring a balance between branding and structured information delivery.',
    challenge:
      'The main challenge was elevating the brand perception. How to transform standard company information into a presentation that feels premium, structured, and convincing—while still being clear and easy to navigate.',
    direction:
      'The visual direction focused on a premium-industrial aesthetic. A combination of dark tones, gold accents, and strong geometric shapes was used to create a sense of authority and sophistication, while maintaining clarity through structured layouts and consistent spacing.',
    execution: [
      'Built a strong visual system using black and gold to reinforce premium positioning.',
      'Developed a modular layout for consistent content flow across pages.',
      'Applied clear typographic hierarchy to guide reading and highlight key information.',
      'Structured project showcases with a balance of imagery and supporting details.',
      'Integrated geometric elements to create visual rhythm and brand identity.',
      'Designed spreads to feel impactful both individually and as a cohesive system.'
    ],
    result:
      'The final company profile presents Ardeco as a professional and high-quality service provider. Information is delivered clearly, while the visual system strengthens brand perception—making the document more persuasive and suitable for client-facing presentations.',
    featured: true
  },
  {
    slug: 'barney-and-two-maidens',
    title: 'Barney & Two Maidens',
    category: 'Illustration',
    summary: 'Developing a character-driven illustration that merges different visual styles into a cohesive and narrative-focused scene.',
    insight: 'The strength of this piece lies in interaction. Not just between characters—but between worlds, styles, and contexts.',
    cover: '/images/projects/Barney/Barney n Two Maiden.png',
    year: '2026',
    scope: ['Illustration', 'Visual story', 'Blend of styles'],
    context:
      'This illustration was built based on a structured brief that defined character roles, setting, and interaction dynamics. The scene combines three distinct characters: a semi-realistic security figure and two anime-style shrine maidens, placed within a shrine environment to create a narrative moment.',
    challenge: 
      'The key challenge was stylistic integration. Bringing together semi-realistic and anime characters in one frame—while maintaining visual consistency—required careful control of lighting, proportion, and rendering approach. Additionally, the composition needed to communicate a subtle story: a casual interaction between characters from different contexts.',
    direction:
      'The direction focused on narrative balance. Instead of forcing uniformity, the illustration embraces stylistic contrast—while unifying everything through: Warm ambient lighting (morning shrine atmosphere); Consistent shadow behavior; Controlled color harmony across characters and environment; The composition was designed to feel conversational and approachable, aligning with the “friendly encounter” scenario described in the brief.',
    execution: [
      'Interpreted structured brief into a single cohesive scene',
      'Balanced semi-realistic and anime rendering styles through lighting and color harmony',
      'Used composition to create a narrative moment of casual interaction between characters from different contexts',
      'Focused on details that enhance storytelling (e.g., character expressions, body language, environmental cues) to make the scene feel alive and engaging'
    ],
    result:
      'The final illustration successfully merges different visual styles into a cohesive scene that tells a subtle story. The interaction between characters feels natural, and the overall piece demonstrates how contrasting styles can coexist harmoniously when guided by strong narrative and visual principles.',
    featured: true
  }
];

export const featuredProjects = projects.filter((project) => project.featured);

export const latestBehance = projects.slice(0, 3).map((project) => ({
  title: project.title,
  category: project.category,
  href: siteConfig.behanceUrl,
  cover: project.cover
}));