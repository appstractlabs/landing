import {
  ArrowTrendingUpIcon,
  BoltIcon,
  ChartBarIcon,
  ChartPieIcon,
  CheckBadgeIcon,
  CircleStackIcon,
  ClockIcon,
  CodeBracketIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  SquaresPlusIcon,
  ShieldCheckIcon,
  UsersIcon,
  LightBulbIcon
} from "@heroicons/react/24/outline";
import { Target } from "lucide-react";

type T = (key: string) => string;

/** SERVICES */
export const getServices = (t: T) => [
  {
    icon: SquaresPlusIcon,
    title: t("Services.list.custom_web_applications.title"),
    description: t("Services.list.custom_web_applications.description"),
    features: [
      t("Services.list.custom_web_applications.features.0"),
      t("Services.list.custom_web_applications.features.1"),
      t("Services.list.custom_web_applications.features.2"),
      t("Services.list.custom_web_applications.features.3")
    ],
    color: "text-blue-400",
    slug: t("Routes.custom_web_applications")
  },
  {
    icon: ChartPieIcon,
    title: t("Services.list.mvp_development.title"),
    description: t("Services.list.mvp_development.description"),
    features: [
      t("Services.list.mvp_development.features.0"),
      t("Services.list.mvp_development.features.1"),
      t("Services.list.mvp_development.features.2"),
      t("Services.list.mvp_development.features.3")
    ],
    color: "text-green-400",
    slug: t("Routes.mvp_development")
  },
  {
    icon: RocketLaunchIcon,
    title: t("Services.list.business_websites_platforms.title"),
    description: t("Services.list.business_websites_platforms.description"),
    features: [
      t("Services.list.business_websites_platforms.features.0"),
      t("Services.list.business_websites_platforms.features.1"),
      t("Services.list.business_websites_platforms.features.2"),
      t("Services.list.business_websites_platforms.features.3")
    ],
    color: "text-orange-400",
    slug: t("Routes.business_websites_platforms")
  }
];

/** NAV */
export const getNavItems = (t: T) => [
  { name: t("Navbar.links.home"), href: "#home" },
  { name: t("Navbar.links.services"), href: "#services" },
  { name: t("Navbar.links.about"), href: "#about" },
  { name: t("Navbar.links.contact"), href: "#contact" }
];

/** VALUES */
export const getValues = (t: T) => [
  {
    icon: Target,
    title: t("About.values.mission.title"),
    description: t("About.values.mission.description")
  },
  {
    icon: LightBulbIcon,
    title: t("About.values.innovation.title"),
    description: t("About.values.innovation.description")
  },
  {
    icon: UsersIcon,
    title: t("About.values.client_centric.title"),
    description: t("About.values.client_centric.description")
  },
  {
    icon: CheckBadgeIcon,
    title: t("About.values.quality.title"),
    description: t("About.values.quality.description")
  }
];


/** TEAM */
export const getTeam = (t: T) => [
  {
    role: t("About.team.areas.software_development.role"),
    image: "/developer_avatar.svg",
    bio: t("About.team.areas.software_development.bio")
  },
  {
    role: t("About.team.areas.ux_ui_design.role"),
    image: "/designer_avatar.svg",
    bio: t("About.team.areas.ux_ui_design.bio")
  },
  {
    role: t("About.team.areas.support_service.role"),
    image: "/support_avatar.svg",
    bio: t("About.team.areas.support_service.bio")
  }
];

/** FOOTER LINKS */
export const getFooterLinks = (t: T) => ({
  services: [
    {
      name: t("Services.list.custom_web_applications.title"),
      href: t("Routes.custom_web_applications")
    },
    {
      name: t("Services.list.mvp_development.title"),
      href: t("Routes.mvp_development")
    },
    {
      name: t("Services.list.business_websites_platforms.title"),
      href: t("Routes.business_websites_platforms")
    }
  ],
  company: [
    { name: t("Navbar.links.about"), href: "#about" },
    { name: t("About.team.heading"), href: "#team" },
    { name: t("Navbar.links.contact"), href: "#contact" }
  ]
});

/** FEATURE CARDS */
export const getFeatureGroups = (t: T) => ({
  business_websites_platforms: [
    {
      icon: MagnifyingGlassIcon,
      title: t("Data.features.business_websites_platforms.seo.title"),
      description: t("Data.features.business_websites_platforms.seo.description")
    },
    {
      icon: DevicePhoneMobileIcon,
      title: t("Data.features.business_websites_platforms.responsive.title"),
      description: t("Data.features.business_websites_platforms.responsive.description")
    },
    {
      icon: BoltIcon,
      title: t("Data.features.business_websites_platforms.fast.title"),
      description: t("Data.features.business_websites_platforms.fast.description")
    },
    {
      icon: ShieldCheckIcon,
      title: t("Data.features.business_websites_platforms.secure.title"),
      description: t("Data.features.business_websites_platforms.secure.description")
    },
    {
      icon: ChartBarIcon,
      title: t("Data.features.business_websites_platforms.analytics.title"),
      description: t("Data.features.business_websites_platforms.analytics.description")
    },
    {
      icon: GlobeAltIcon,
      title: t("Data.features.business_websites_platforms.cms.title"),
      description: t("Data.features.business_websites_platforms.cms.description")
    }
  ],
  custom_web_applications: [
    {
      icon: BoltIcon,
      title: t("Data.features.custom_web_applications.performance.title"),
      description: t("Data.features.custom_web_applications.performance.description")
    },
    {
      icon: ShieldCheckIcon,
      title: t("Data.features.custom_web_applications.security.title"),
      description: t("Data.features.custom_web_applications.security.description")
    },
    {
      icon: CircleStackIcon,
      title: t("Data.features.custom_web_applications.scalable.title"),
      description: t("Data.features.custom_web_applications.scalable.description")
    },
    {
      icon: UsersIcon,
      title: t("Data.features.custom_web_applications.design.title"),
      description: t("Data.features.custom_web_applications.design.description")
    },
    {
      icon: ChartBarIcon,
      title: t("Data.features.custom_web_applications.analytics.title"),
      description: t("Data.features.custom_web_applications.analytics.description")
    },
    {
      icon: CodeBracketIcon,
      title: t("Data.features.custom_web_applications.clean_code.title"),
      description: t("Data.features.custom_web_applications.clean_code.description")
    }
  ],
  mvp_development: [
    {
      icon: ClockIcon,
      title: t("Data.features.mvp_development.time.title"),
      description: t("Data.features.mvp_development.time.description")
    },
    {
      icon: CurrencyDollarIcon,
      title: t("Data.features.mvp_development.cost.title"),
      description: t("Data.features.mvp_development.cost.description")
    },
    {
      icon: ArrowTrendingUpIcon,
      title: t("Data.features.mvp_development.investor.title"),
      description: t("Data.features.mvp_development.investor.description")
    },
    {
      icon: UsersIcon,
      title: t("Data.features.mvp_development.feedback.title"),
      description: t("Data.features.mvp_development.feedback.description")
    },
    {
      icon: Target,
      title: t("Data.features.mvp_development.risk.title"),
      description: t("Data.features.mvp_development.risk.description")
    },
    {
      icon: RocketLaunchIcon,
      title: t("Data.features.mvp_development.foundation.title"),
      description: t("Data.features.mvp_development.foundation.description")
    }
  ]
});

/** BENEFITS */
export const getBenefits = (t: T) => ({
  business_websites_platforms: [
    t("Data.benefits.business_websites_platforms.0"),
    t("Data.benefits.business_websites_platforms.1"),
    t("Data.benefits.business_websites_platforms.2"),
    t("Data.benefits.business_websites_platforms.3")
  ],
  custom_web_applications: [
    t("Data.benefits.custom_web_applications.0"),
    t("Data.benefits.custom_web_applications.1"),
    t("Data.benefits.custom_web_applications.2"),
    t("Data.benefits.custom_web_applications.3")
  ],
  mvp_development: [
    t("Data.benefits.mvp_development.0"),
    t("Data.benefits.mvp_development.1"),
    t("Data.benefits.mvp_development.2"),
    t("Data.benefits.mvp_development.3")
  ]
});

/** TECHNOLOGIES (without i18n) */
export const technologies = {
  business_websites_platforms: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "PostgreSQL", "Prisma", "GitHub"],
  custom_web_applications: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "Jest"],
  mvp_development: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Prisma", "GitHub"]
} as const;

/** WORK TYPES */
export const getWorkTypes = (t: T) => ({
  business_websites_platforms: [
    {
      title: t("Data.workTypes.business_websites_platforms.corporate.title"),
      description: t("Data.workTypes.business_websites_platforms.corporate.description"),
      features: [
        t("Data.workTypes.business_websites_platforms.corporate.features.0"),
        t("Data.workTypes.business_websites_platforms.corporate.features.1"),
        t("Data.workTypes.business_websites_platforms.corporate.features.2"),
        t("Data.workTypes.business_websites_platforms.corporate.features.3")
      ]
    },
    {
      title: t("Data.workTypes.business_websites_platforms.platforms.title"),
      description: t("Data.workTypes.business_websites_platforms.platforms.description"),
      features: [
        t("Data.workTypes.business_websites_platforms.platforms.features.0"),
        t("Data.workTypes.business_websites_platforms.platforms.features.1"),
        t("Data.workTypes.business_websites_platforms.platforms.features.2"),
        t("Data.workTypes.business_websites_platforms.platforms.features.3")
      ]
    },
    {
      title: t("Data.workTypes.business_websites_platforms.landing.title"),
      description: t("Data.workTypes.business_websites_platforms.landing.description"),
      features: [
        t("Data.workTypes.business_websites_platforms.landing.features.0"),
        t("Data.workTypes.business_websites_platforms.landing.features.1"),
        t("Data.workTypes.business_websites_platforms.landing.features.2"),
        t("Data.workTypes.business_websites_platforms.landing.features.3")
      ]
    }
  ],
  custom_web_applications: [
    {
      step: "01",
      title: t("Data.workTypes.custom_web_applications.steps.0.title"),
      description: t("Data.workTypes.custom_web_applications.steps.0.description")
    },
    {
      step: "02",
      title: t("Data.workTypes.custom_web_applications.steps.1.title"),
      description: t("Data.workTypes.custom_web_applications.steps.1.description")
    },
    {
      step: "03",
      title: t("Data.workTypes.custom_web_applications.steps.2.title"),
      description: t("Data.workTypes.custom_web_applications.steps.2.description")
    },
    {
      step: "04",
      title: t("Data.workTypes.custom_web_applications.steps.3.title"),
      description: t("Data.workTypes.custom_web_applications.steps.3.description")
    }
  ],
  mvp_development: [
    {
      step: "01",
      title: t("Data.workTypes.mvp_development.steps.0.title"),
      description: t("Data.workTypes.mvp_development.steps.0.description")
    },
    {
      step: "02",
      title: t("Data.workTypes.mvp_development.steps.1.title"),
      description: t("Data.workTypes.mvp_development.steps.1.description")
    },
    {
      step: "03",
      title: t("Data.workTypes.mvp_development.steps.2.title"),
      description: t("Data.workTypes.mvp_development.steps.2.description")
    },
    {
      step: "04",
      title: t("Data.workTypes.mvp_development.steps.3.title"),
      description: t("Data.workTypes.mvp_development.steps.3.description")
    }
  ]
});