import Link from "next/dist/client/link";
import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
export default function Home({ events }) {
  console.log(events);
  return (
    <Layout>
      {events.length == 0 && <h3>No Events</h3>}
      <h3>Upcomming Events</h3>
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      <Link href="/events">
        <a>View all</a>
      </Link>
    </Layout>
  );
}
export async function getStaticProps() {
  const req = await fetch(`${API_URL}/api`);
  const events = await req.json();
  console.log(events);
  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  };
}
