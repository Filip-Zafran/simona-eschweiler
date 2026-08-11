import HomeContent from "@/components/HomeContent"; import { getAnnouncements } from "@/lib/announcements";
export const dynamic = "force-dynamic";
export default async function Home(){return <HomeContent announcements={await getAnnouncements()}/>}
