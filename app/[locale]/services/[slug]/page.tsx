import { notFound } from 'next/navigation';
import { reverseMap } from '@/lib/serviceSlugs';
import BusinessWebsitesPlatforms from '@/components/services/BusinessWebsitesPlatforms';
import CustomWebApplications from '@/components/services/CustomWebApplications';
import MvpDevelopment from '@/components/services/MvpDevelopment';

const registry = {
  'business-websites-platforms': BusinessWebsitesPlatforms,
  'custom-web-applications': CustomWebApplications,
  'mvp-development': MvpDevelopment
} as const;

export default async function Page({params}:{params: Promise<{slug:string}>}) {
  const { slug } = await params;
  const id = reverseMap[slug];
  
  if (!id) return notFound();

  const View = registry[id];
  return <View />;
}