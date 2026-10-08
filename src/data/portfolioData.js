export const portfolioData = {
  personal: {
    name: "Habeeb Hussain",
    initials: "HH",
    tagline: "Digital Marketing Specialist",
    subRoles: "Performance Marketing | Meta Ads | Google Ads | GA4",
    location: "Hyderabad, Telangana, India",
    email: "skhabeeb786@gmail.com",
    phone: "+91 9502626677",
    linkedin: "https://linkedin.com/in/habeebhussain",
    headline: "Turning Digital Campaigns Into Measurable Growth",
    description: "Digital Marketing Specialist focused on Performance Marketing, Meta Ads, Google Ads, Lead Generation and Data-Driven Optimization.",
    aboutBio: "I am a Digital Marketing Specialist with 1+ year of hands-on experience in performance marketing, paid media, lead generation and B2B growth. I work mainly with Meta Ads and Google Ads, while using GA4 and Google Tag Manager to track and optimize campaign performance.",
    industryTags: ["Technology", "AI", "SAP", "Digital Services", "B2B Marketing"],
  },

  stats: [
    { id: 'leads', value: 630, suffix: '+', label: 'Leads Generated', subtext: 'High-intent B2B & B2C' },
    { id: 'cpl', prefix: '₹', value: 19.85, decimals: 2, label: 'Average CPL', subtext: 'Cost per acquisition' },
    { id: 'spend', prefix: '₹', value: 1, suffix: 'L', label: 'Monthly Ad Spend', subtext: 'Optimized budget' },
    { id: 'ctr', value: 4.25, decimals: 2, suffix: '%', label: 'CTR Achieved', subtext: 'High engagement ads' },
    { id: 'reach', value: 95, suffix: 'K+', label: 'Audience Reach', subtext: 'Targeted prospects' },
    { id: 'impressions', value: 98, suffix: 'K+', label: 'Impressions', subtext: 'Multi-channel visibility' },
  ],

  marketingStack: [
    { name: "Meta Ads", category: "Paid Media", icon: "meta", desc: "Lead gen & Retargeting" },
    { name: "Google Ads", category: "Search & Display", icon: "google", desc: "PPC & High-Intent Search" },
    { name: "GA4", category: "Web Analytics", icon: "ga4", desc: "Event tracking & Funnels" },
    { name: "Google Tag Manager", category: "Tracking Setup", icon: "gtm", desc: "Pixel & Conversion tags" },
    { name: "WhatsApp Marketing", category: "Direct Conversion", icon: "whatsapp", desc: "Click-to-WhatsApp & API" },
    { name: "SEO", category: "Organic Growth", icon: "seo", desc: "Keyword & Content analysis" },
    { name: "Canva", category: "Creative Asset", icon: "canva", desc: "High-CTR ad designs" },
    { name: "Excel & Sheets", category: "Data Analytics", icon: "excel", desc: "KPI reporting & Modeling" },
  ],

  experience: [
    {
      company: "CXPRO Global Solutions",
      position: "Digital Marketing Specialist – Performance Marketing",
      date: "April 2026 – Present",
      location: "Hyderabad",
      isCurrent: true,
      budget: "₹1,00,000/month multi-brand budgets",
      responsibilities: [
        "Planned, launched and scaled Meta Ads lead generation, awareness, traffic, and engagement campaigns.",
        "Managed ₹1,00,000/month multi-brand ad spend ensuring optimal ROI and lowest CPL.",
        "Conducted structured audience targeting, lookalike segmentation, and systematic creative testing.",
        "Implemented conversion tracking and event attribution using GA4, Google Tag Manager (GTM), and Meta Pixel.",
        "Executed Click-to-WhatsApp campaigns utilizing WhatsApp Cloud API for frictionless lead capture.",
        "Delivered data-backed weekly KPI reports and strategic performance recommendations."
      ],
      tags: ["Meta Ads", "GA4", "GTM", "WhatsApp API", "Performance Marketing", "Creative Testing"]
    },
    {
      company: "ABSPYDAI Pvt Ltd",
      position: "Digital Marketing Executive",
      date: "January 2026 – March 2026",
      location: "Hyderabad",
      isCurrent: false,
      responsibilities: [
        "Curated and executed social media content strategy across Facebook, Instagram, and LinkedIn.",
        "Designed short-form Reels, interactive Stories, and promotional creatives using Canva.",
        "Monitored live ad campaigns with ongoing budget pacing and granular audience optimization.",
        "Prepared comprehensive weekly performance reports tracking engagement, reach, and follower acquisition."
      ],
      tags: ["Social Media Strategy", "Reels & Stories", "Canva", "Budget Optimization", "LinkedIn Marketing"]
    },
    {
      company: "Kareer9 Pvt. Ltd.",
      position: "Digital Marketing Intern",
      date: "June 2025 – January 2026",
      location: "Hyderabad",
      isCurrent: false,
      highlightBadge: "7.06% Google Ads CTR",
      responsibilities: [
        "Managed hands-on Meta Ads campaigns alongside Google Ads Search and Display networks.",
        "Achieved a record 7.06% CTR on Google Ads Search campaigns through keyword refactoring.",
        "Executed extensive keyword research, negative match filtering, and audience segmentation.",
        "Assisted in end-to-end campaign performance reporting and continuous A/B ad copy optimization."
      ],
      tags: ["Google Ads Search", "Google Ads Display", "Meta Ads", "Keyword Research", "A/B Testing"]
    }
  ],

  skillsByCategory: {
    "Paid Media": [
      { name: "Meta Ads", level: "Expert", desc: "Prospecting, Retargeting & Lead Forms" },
      { name: "Google Ads", level: "Advanced", desc: "Search campaigns, Display & Bidding" },
      { name: "Performance Marketing", level: "Expert", desc: "Data-driven ROI & scaling" },
      { name: "SEM / PPC", level: "Advanced", desc: "Search engine keyword auctions" },
      { name: "Lead Generation", level: "Expert", desc: "Frictionless form capture & qualification" },
      { name: "Audience Targeting", level: "Expert", desc: "Lookalikes, Custom Audiences, In-market" },
      { name: "Budget Management", level: "Advanced", desc: "Pacing, CBO & Bid strategies" },
      { name: "Creative Testing", level: "Expert", desc: "Dynamic creative & hook testing" },
    ],
    "Analytics": [
      { name: "GA4", level: "Advanced", desc: "Custom events, Funnels & Explorations" },
      { name: "Google Tag Manager", level: "Advanced", desc: "Triggers, Tags & DataLayer tracking" },
      { name: "Conversion Tracking", level: "Expert", desc: "Meta Pixel & Conversions API integration" },
      { name: "KPI Reporting", level: "Expert", desc: "Executive dashboards & weekly metrics" },
      { name: "CTR Optimization", level: "Expert", desc: "Improving click-through rates" },
      { name: "CPC & CPL Control", level: "Expert", desc: "Aggressive cost reduction strategies" },
      { name: "Marketing Analytics", level: "Advanced", desc: "Attribution modeling & audience insights" },
    ],
    "SEO & Content": [
      { name: "SEO Fundamentals", level: "Intermediate", desc: "On-page optimization & structure" },
      { name: "Keyword Research", level: "Advanced", desc: "Search intent & competitive gap analysis" },
      { name: "Social Media Marketing", level: "Advanced", desc: "Multi-platform brand engagement" },
      { name: "Content Strategy", level: "Advanced", desc: "Educational & commercial messaging" },
      { name: "LinkedIn Marketing", level: "Advanced", desc: "B2B positioning & thought leadership" },
    ],
    "WhatsApp": [
      { name: "WhatsApp Marketing", level: "Expert", desc: "Conversational conversion workflows" },
      { name: "Click-to-WhatsApp Ads", level: "Expert", desc: "Meta Ads direct to chat funnels" },
      { name: "WhatsApp Cloud API", level: "Advanced", desc: "Automated responses & qualification" },
      { name: "Meta Business Portfolio", level: "Advanced", desc: "Assets, WABA & verification setups" },
    ],
    "Tools": [
      { name: "Meta Ads Manager", level: "Expert", desc: "Campaign orchestration & rules" },
      { name: "Meta Business Suite", level: "Expert", desc: "Publishing & inbox management" },
      { name: "Google Ads Platform", level: "Advanced", desc: "Ad groups, extensions & match types" },
      { name: "Google Analytics 4 (GA4)", level: "Advanced", desc: "Traffic acquisition & behavior" },
      { name: "Google Tag Manager (GTM)", level: "Advanced", desc: "Custom tag orchestration" },
      { name: "Canva Pro", level: "Advanced", desc: "Ad creatives & visual banners" },
      { name: "Microsoft Excel", level: "Advanced", desc: "Pivot tables, VLOOKUP & data synthesis" },
      { name: "Google Sheets", level: "Advanced", desc: "Live dashboarding & client reports" },
    ],
  },

  projects: [
    {
      id: "project-01",
      title: "Boost Your Memory — Digital Presence & Website",
      client: "Boost Your Memory",
      category: "Website Design",
      categoryKey: "website",
      url: "https://www.boostyourmemory.in/",
      summary: "Comprehensive modern website design crafted for seamless mobile responsiveness, clear user-friendly interface, and conversion-optimized CTA structure.",
      services: [
        "Website Design",
        "Responsive Design",
        "Mobile Optimization",
        "User-Friendly Interface",
        "CTA Structure",
        "Digital Presence"
      ],
      disclaimer: "Verified client website deliverables. No unverified traffic or revenue claims added.",
      visualType: "browserMockup",
      previewData: {
        siteUrl: "https://www.boostyourmemory.in/",
        siteTitle: "Boost Your Memory | Unlock Cognitive Potential",
        tags: ["Clean Layout", "Mobile Responsive", "High-Converting UI"],
      }
    },
    {
      id: "project-02",
      title: "Social Media Management & Content Strategy",
      client: "Multi-Brand Digital Clients",
      category: "Social Media Management",
      categoryKey: "social",
      url: null,
      summary: "End-to-end multi-platform content planning and creative execution across Instagram, Facebook, and LinkedIn featuring reels, stories, and educational carousels.",
      services: [
        "Content Planning",
        "Creative Design",
        "Captions & Copywriting",
        "Hashtags Strategy",
        "Reels & Short Videos",
        "Audience-Focused Content",
        "Performance Monitoring"
      ],
      visualType: "socialWall",
      previewData: {
        postsCount: "120+ Published Assets",
        channels: ["Instagram", "Facebook", "LinkedIn"],
        formats: ["Reels", "Stories", "Infographics", "Carousels"],
      }
    },
    {
      id: "project-03",
      title: "Meta Ads & Lead Generation Campaigns",
      client: "CXPRO Global Solutions & B2B Portfolios",
      category: "Meta Ads",
      categoryKey: "meta-ads",
      url: null,
      summary: "Planned, launched and optimized Meta lead-generation campaigns using granular audience targeting, creative testing, campaign optimization, and KPI analysis.",
      services: [
        "Meta Lead Form Ads",
        "Audience Segmentation",
        "A/B Creative & Hook Testing",
        "Click-to-WhatsApp Setup",
        "GA4 & Meta Pixel Tracking",
        "Weekly KPI Optimization"
      ],
      metrics: [
        { label: "Leads Generated", value: "630+", highlight: true },
        { label: "Average CPL", value: "₹19.85", highlight: true },
        { label: "Click-to-Lead Conv.", value: "5.0%" },
        { label: "Monthly Ad Spend", value: "₹1,00,000" },
        { label: "Audience Reach", value: "95K+" },
        { label: "Impressions", value: "98K+" },
      ],
      visualType: "adsDashboard",
    }
  ],

  results: {
    headline: "Numbers That Tell the Story",
    subheadline: "Real verified campaign statistics achieved across paid media programs.",
    metricCards: [
      { value: "630+", label: "Leads Generated", caption: "High intent qualified inquiries" },
      { value: "₹19.85", label: "Avg. CPL", caption: "Cost efficient customer acquisition" },
      { value: "₹1L", label: "Monthly Ad Spend", caption: "Multi-brand budget managed" },
      { value: "4.25%", label: "CTR Achieved", caption: "Well above industry average" },
      { value: "95K+", label: "Audience Reach", caption: "Targeted prospective customers" },
      { value: "98K+", label: "Impressions", caption: "Brand recall and awareness" },
      { value: "7.06%", label: "Google Ads CTR", caption: "Record search CTR at Kareer9" },
    ],
    ctrComparison: {
      initial: "1.25%",
      improved: "4.25%",
      lift: "+240% Lift",
      caption: "Improved CTR through structured audience refinement and systematic creative testing."
    }
  },

  certifications: [
    {
      title: "Google Ads Search",
      issuer: "Google Skillshop",
      category: "Paid Search",
      badgeColor: "from-blue-500 to-emerald-500",
      skills: ["Keyword Targeting", "Smart Bidding", "Ad Copy Optimization"]
    },
    {
      title: "Google Ads Display",
      issuer: "Google Skillshop",
      category: "Display Advertising",
      badgeColor: "from-blue-600 to-indigo-600",
      skills: ["Audience Segments", "Responsive Display Ads", "Remarketing"]
    },
    {
      title: "Google Analytics 4",
      issuer: "Google Skillshop",
      category: "Web Analytics",
      badgeColor: "from-amber-500 to-orange-600",
      skills: ["Custom Explorations", "Event Tracking", "Conversion Funnels"]
    },
    {
      title: "SEO Crash Course",
      issuer: "SEMrush Academy",
      category: "Organic Search",
      badgeColor: "from-purple-500 to-pink-500",
      skills: ["On-Page SEO", "Search Intent", "Technical Auditing"]
    },
    {
      title: "Social Media Marketing",
      issuer: "SEMrush Academy",
      category: "Organic & Paid Social",
      badgeColor: "from-teal-500 to-cyan-500",
      skills: ["Content Strategy", "Channel Growth", "Audience Engagement"]
    }
  ],

  processSteps: [
    {
      step: "01",
      title: "Understand",
      desc: "Understand the business, audience and objective thoroughly before deploying any ad budget.",
      detail: "Audit current landscape, customer persona definitions, historical data, and clear acquisition benchmarks."
    },
    {
      step: "02",
      title: "Plan",
      desc: "Build campaign strategy, targeting and creative direction tailored for high conversion.",
      detail: "Define funnel stages, draft audience segment matrices, creative hooks, and tracking architectures."
    },
    {
      step: "03",
      title: "Launch",
      desc: "Launch campaigns across appropriate paid channels with disciplined configuration.",
      detail: "Deploy ads across Meta, Google Search, and Click-to-WhatsApp with verified tracking pixels."
    },
    {
      step: "04",
      title: "Analyze",
      desc: "Monitor CTR, CPC, CPL, conversions and audience behavior in real time.",
      detail: "Track attribution via GA4 and GTM, isolating winning ad sets and identifying cost leakage."
    },
    {
      step: "05",
      title: "Optimize",
      desc: "Test, improve and scale the best-performing campaigns systematically.",
      detail: "Iterate creative variations, scale high-ROAS ad sets, refine bid strategies, and suppress underperformers."
    }
  ]
};
