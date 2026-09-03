export type Category = {
  slug: string;
  number: string;
  title: string;
  tag: string;
  short: string;
  overview: string;
  eligibility: string[];
  whoShouldApply: string[];
  criteria: string[];
  evidence: string[];
  recognition: string;
  qualificationOnly?: boolean;
};

export const categories: Category[] = [
  {
    slug: "msme-of-the-year",
    number: "01",
    title: "MSME of the Year",
    tag: "Highest Honour",
    short: "The Highest Honour — exceptional overall excellence, growth and leadership.",
    overview:
      "Recognising exceptional overall business excellence, sustainable growth, innovation, leadership, governance and impact. Qualification Based — No Direct Application.",
    eligibility: [
      "Qualification-based recognition; direct applications are not accepted.",
      "Considered from among applicants across the ten published award categories.",
      "Must satisfy all common eligibility requirements.",
    ],
    whoShouldApply: [
      "No direct application. Enterprises are considered through their category applications.",
    ],
    criteria: [
      "Overall business excellence and governance",
      "Sustainable and responsible growth",
      "Innovation and leadership",
      "Economic and social contribution to Mysuru",
    ],
    evidence: ["Evidence submitted in the applicant's entered categories"],
    recognition: "Winner of the highest honour, evaluated through the Grand Jury framework.",
    qualificationOnly: true,
  },
  {
    slug: "manufacturing-excellence",
    number: "02",
    title: "Manufacturing Excellence Award",
    tag: "Manufacturing",
    short: "Outstanding manufacturing performance, quality and productivity.",
    overview:
      "Recognising outstanding manufacturing performance, quality, productivity and operational excellence.",
    eligibility: [
      "Valid Udyam Registration",
      "Substantial manufacturing operations within Mysuru District",
      "Applicable operating-history requirement",
      "Relevant statutory registrations, licences and approvals",
    ],
    whoShouldApply: [
      "Manufacturing enterprises with demonstrable quality and productivity outcomes",
      "Units with documented process improvement or capacity expansion",
    ],
    criteria: [
      "Manufacturing performance and productivity",
      "Quality systems and certifications",
      "Operational efficiency and safety",
      "Capacity, technology and process improvement",
    ],
    evidence: [
      "Quality certifications",
      "Production and productivity data",
      "Process improvement documentation",
      "Customer or audit references",
    ],
    recognition: "Winner, 1st Runner-Up, 2nd Runner-Up and two Official Finalists.",
  },
  {
    slug: "service-excellence",
    number: "03",
    title: "Service Excellence Award",
    tag: "Service",
    short: "Exceptional service delivery, customer experience and operations.",
    overview:
      "Recognising exceptional service delivery, customer experience and operational excellence.",
    eligibility: [
      "Valid Udyam Registration",
      "Substantial service operations within Mysuru District",
      "Applicable operating-history requirement",
      "Relevant statutory registrations and approvals",
    ],
    whoShouldApply: [
      "Service enterprises with measurable customer outcomes",
      "Businesses with documented service quality frameworks",
    ],
    criteria: [
      "Service delivery standards",
      "Customer experience and retention",
      "Operational excellence",
      "People capability and service culture",
    ],
    evidence: [
      "Customer satisfaction data",
      "Service level documentation",
      "Client references",
      "Performance and growth evidence",
    ],
    recognition: "Winner, 1st Runner-Up, 2nd Runner-Up and two Official Finalists.",
  },
  {
    slug: "emerging-msme",
    number: "04",
    title: "Emerging MSME of the Year",
    tag: "Emerging",
    short: "High-potential enterprises with traction, differentiation and scale.",
    overview:
      "Recognising high-potential enterprises demonstrating traction, differentiation and scalability.",
    eligibility: [
      "Valid Udyam Registration",
      "At least one year and not more than five years of commercial operations",
      "Substantial business operations within Mysuru District",
    ],
    whoShouldApply: [
      "Young enterprises with demonstrated early traction",
      "Businesses with a differentiated proposition and scalable model",
    ],
    criteria: [
      "Traction and commercial validation",
      "Differentiation of the offering",
      "Scalability of the model",
      "Team and execution capability",
    ],
    evidence: [
      "Revenue and customer growth data",
      "Product or service documentation",
      "Market validation evidence",
    ],
    recognition: "Winner, 1st Runner-Up, 2nd Runner-Up and two Official Finalists.",
  },
  {
    slug: "innovation-technology",
    number: "05",
    title: "Innovation & Technology Excellence Award",
    tag: "Technology",
    short: "Businesses creating measurable value through innovation and technology.",
    overview:
      "Recognising businesses creating measurable value through innovation and technology.",
    eligibility: [
      "Valid Udyam Registration",
      "Substantial business operations within Mysuru District",
      "Applicable operating-history requirement",
    ],
    whoShouldApply: [
      "Enterprises with product, process or business-model innovation",
      "Businesses with meaningful digital or technology adoption",
    ],
    criteria: [
      "Nature and originality of innovation",
      "Technology adoption and digital maturity",
      "Measurable business or customer impact",
      "Protection and sustainability of the innovation",
    ],
    evidence: [
      "Innovation documentation",
      "IP or patent records where applicable",
      "Impact and adoption data",
    ],
    recognition: "Winner, 1st Runner-Up, 2nd Runner-Up and two Official Finalists.",
  },
  {
    slug: "growth-excellence",
    number: "06",
    title: "Growth Excellence Award",
    tag: "Growth",
    short: "Sustained, responsible and measurable business growth.",
    overview: "Recognising sustained, responsible and measurable business growth.",
    eligibility: [
      "Valid Udyam Registration",
      "Substantial business operations within Mysuru District",
      "Multi-year performance history as applicable",
    ],
    whoShouldApply: [
      "Enterprises with consistent multi-year growth",
      "Businesses that expanded capacity, markets or employment responsibly",
    ],
    criteria: [
      "Revenue and profitability trajectory",
      "Employment and capacity growth",
      "Market and customer expansion",
      "Governance and responsibility of growth",
    ],
    evidence: [
      "Audited or certified financial statements",
      "Employment records",
      "Market expansion documentation",
    ],
    recognition: "Winner, 1st Runner-Up, 2nd Runner-Up and two Official Finalists.",
  },
  {
    slug: "women-entrepreneur",
    number: "07",
    title: "Women Entrepreneur of the Year",
    tag: "Leadership",
    short: "Exceptional entrepreneurial leadership by a woman business leader.",
    overview:
      "Recognising exceptional entrepreneurial leadership by a woman business leader.",
    eligibility: [
      "Woman-led enterprise with meaningful ownership or executive leadership",
      "Valid Udyam Registration",
      "Substantial business operations within Mysuru District",
    ],
    whoShouldApply: [
      "Women founders, promoters and chief executives of eligible MSMEs",
    ],
    criteria: [
      "Entrepreneurial leadership and vision",
      "Business performance under leadership",
      "Challenges navigated and resilience",
      "Contribution to community and ecosystem",
    ],
    evidence: [
      "Ownership or leadership proof",
      "Business performance evidence",
      "Leadership narrative and references",
    ],
    recognition: "Winner, 1st Runner-Up, 2nd Runner-Up and two Official Finalists.",
  },
  {
    slug: "young-entrepreneur",
    number: "08",
    title: "Young Entrepreneur of the Year",
    tag: "Young",
    short: "Outstanding achievement by a business leader aged 35 or below.",
    overview:
      "Recognising outstanding entrepreneurial achievement by a business leader aged 35 or below.",
    eligibility: [
      "Entrepreneur aged 35 or below at the applicable eligibility date",
      "Valid Udyam Registration",
      "Substantial business operations within Mysuru District",
    ],
    whoShouldApply: [
      "Young founders and promoters leading eligible MSMEs",
    ],
    criteria: [
      "Entrepreneurial achievement relative to experience",
      "Business performance and traction",
      "Innovation and initiative",
      "Leadership potential",
    ],
    evidence: [
      "Age proof",
      "Ownership or leadership proof",
      "Business performance evidence",
    ],
    recognition: "Winner, 1st Runner-Up, 2nd Runner-Up and two Official Finalists.",
  },
  {
    slug: "sustainability-social-impact",
    number: "09",
    title: "Sustainability & Social Impact Award",
    tag: "Impact",
    short: "Enterprises delivering measurable environmental or social impact.",
    overview:
      "Recognising enterprises delivering measurable environmental or social impact.",
    eligibility: [
      "Valid Udyam Registration",
      "Substantial business operations within Mysuru District",
      "Demonstrable and verifiable impact initiatives",
    ],
    whoShouldApply: [
      "Enterprises with environmental initiatives producing measurable outcomes",
      "Enterprises with structured community or social impact programmes",
    ],
    criteria: [
      "Materiality and measurability of impact",
      "Integration with business operations",
      "Resource, energy or waste outcomes",
      "Community and stakeholder benefit",
    ],
    evidence: [
      "Impact measurement data",
      "Environmental compliance records",
      "Programme documentation and third-party validation",
    ],
    recognition: "Winner, 1st Runner-Up, 2nd Runner-Up and two Official Finalists.",
  },
  {
    slug: "employer-of-the-year",
    number: "10",
    title: "Employer of the Year",
    tag: "People",
    short: "Outstanding workplace culture, development and people practices.",
    overview:
      "Recognising outstanding workplace culture, employee development and responsible people practices.",
    eligibility: [
      "Valid Udyam Registration",
      "Substantial business operations within Mysuru District",
      "Compliant statutory people and labour practices",
    ],
    whoShouldApply: [
      "Enterprises with structured people practices and development programmes",
      "Workplaces with strong retention and employee experience outcomes",
    ],
    criteria: [
      "Workplace culture and employee experience",
      "Learning and development",
      "Diversity, safety and wellbeing",
      "Statutory compliance and responsible practices",
    ],
    evidence: [
      "People policies and programme documentation",
      "Retention and engagement data",
      "Statutory compliance records",
    ],
    recognition: "Winner, 1st Runner-Up, 2nd Runner-Up and two Official Finalists.",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "What are Mysuru MSME Awards 2026?",
    a: "A business recognition and growth platform created to identify, recognise and showcase outstanding MSMEs and entrepreneurs contributing to Mysuru's economic ecosystem.",
  },
  {
    q: "Who organizes the awards?",
    a: "The awards are powered by Toya Corporate Consulting Services Pvt. Ltd., acting as the organizing entity and Awards Secretariat.",
  },
  {
    q: "Is it only an awards ceremony?",
    a: "No. The platform is designed around Learn, Connect, Grow and Celebrate.",
  },
  { q: "Is there a nomination fee?", a: "No. Nomination is free." },
  {
    q: "Do I need to purchase sponsorship or exhibition space?",
    a: "No. Commercial participation is separate from award evaluation.",
  },
  {
    q: "How many categories can my company enter?",
    a: "An eligible enterprise may apply for a maximum of two directly applicable categories.",
  },
  {
    q: "Can I apply for MSME of the Year?",
    a: "No. It is a qualification-based recognition.",
  },
  {
    q: "Can someone nominate my business?",
    a: "Yes. However, the business must accept the nomination and complete the official application.",
  },
  {
    q: "Who can participate?",
    a: "Eligible MSMEs with substantial operations within Mysuru District, subject to category-specific requirements.",
  },
  {
    q: "Is Udyam Registration mandatory?",
    a: "Yes, under the proposed common eligibility framework.",
  },
  {
    q: "Must my registered office be in Mysuru?",
    a: "Not necessarily. Substantial business operations within Mysuru District are the key geographic requirement.",
  },
  {
    q: "Can a new business participate?",
    a: "Potentially. Emerging MSME is intended for eligible enterprises with at least one year and not more than five years of commercial operations.",
  },
  {
    q: "Can large enterprises participate?",
    a: "Competitive awards are intended for enterprises qualifying under applicable Micro, Small or Medium Enterprise classification.",
  },
  {
    q: "How are applications evaluated?",
    a: "Through category-specific 100-point scorecards supported by documentary evidence and verification.",
  },
  {
    q: "What is the scoring structure?",
    a: "70% Application & Documentary Assessment + 30% Finalist Assessment & Verification.",
  },
  { q: "Is there public voting?", a: "No." },
  { q: "Can sponsors influence winners?", a: "No." },
  {
    q: "Who evaluates applications?",
    a: "Independent professionals drawn from relevant business and institutional disciplines.",
  },
  {
    q: "How many evaluators review an application?",
    a: "The intended framework requires a minimum of three independent evaluators per application.",
  },
  {
    q: "How many finalists are selected?",
    a: "Up to five per category, subject to the required standards.",
  },
  {
    q: "What recognitions are awarded?",
    a: "Winner, 1st Runner-Up, 2nd Runner-Up and two Official Finalists.",
  },
  { q: "Does finalist status guarantee a podium award?", a: "No." },
  {
    q: "Will financial information become public?",
    a: "Confidential financial and business information submitted for evaluation will not ordinarily be publicly disclosed.",
  },
  {
    q: "What finalist information may be published?",
    a: "Approved business information such as company name, logo, category, leadership details, business description and selected achievements.",
  },
  {
    q: "Can additional documents be requested?",
    a: "Yes, where necessary for verification.",
  },
  {
    q: "Will applicants receive jury scores?",
    a: "Individual jury scores and confidential deliberations will not ordinarily be publicly disclosed.",
  },
  {
    q: "Can results change after being locked?",
    a: "Only under exceptional documented circumstances such as material misrepresentation, eligibility failure or serious process error.",
  },
  {
    q: "What happens if false information is submitted?",
    a: "The applicant may be disqualified and any recognition may be withdrawn.",
  },
];

export const integrityPrinciples = [
  {
    number: "01",
    title: "Awards Cannot Be Purchased",
    body: "No business can purchase an award, ranking or finalist position.",
  },
  {
    number: "02",
    title: "Nominations Are Free",
    body: "Participation in the award application process carries no nomination fee.",
  },
  {
    number: "03",
    title: "No Public Voting",
    body: "Recognition is determined through merit and evidence—not popularity.",
  },
  {
    number: "04",
    title: "Sponsors Cannot Influence Winners",
    body: "Commercial relationships remain separate from award evaluation.",
  },
  {
    number: "05",
    title: "Independent Evidence-Based Evaluation",
    body: "Applications are evaluated against predefined criteria.",
  },
  {
    number: "06",
    title: "Mandatory Conflict-of-Interest Disclosure",
    body: "Jurors must disclose relevant relationships and recuse themselves where necessary.",
  },
  {
    number: "07",
    title: "Verification & Audit Trail",
    body: "Material decisions, evaluations and administrative actions are documented.",
  },
];

export const nominationSteps = [
  "Choose Category",
  "Complete Application",
  "Submit Evidence",
  "Eligibility & Verification",
  "Independent Jury Evaluation",
  "Top 5 Finalists",
  "Finalist Assessment",
  "Awards Recognition",
];

export const juryPanel = [
  {
    role: "Jury Chair",
    who: "Senior industrialist / respected business leader",
    perspective: "Leadership & overall credibility",
  },
  {
    role: "Finance Expert",
    who: "Chartered Accountant / finance professional",
    perspective: "Financial performance & growth",
  },
  {
    role: "Manufacturing & Operations Leader",
    who: "Senior operations practitioner",
    perspective: "Manufacturing & operational excellence",
  },
  {
    role: "Technology & Innovation Leader",
    who: "Technology practitioner or founder",
    perspective: "Innovation, digital transformation & technology",
  },
  {
    role: "Banking / Financial Institution Leader",
    who: "Institutional banking leader",
    perspective: "Business sustainability & governance",
  },
  {
    role: "Academic / Entrepreneurship Expert",
    who: "Academic or incubation leader",
    perspective: "Innovation, scalability & research",
  },
  {
    role: "People / ESG / Governance Leader",
    who: "People, ESG or governance specialist",
    perspective: "Employer excellence, sustainability & social impact",
  },
];
