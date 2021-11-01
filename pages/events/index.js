import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
export default function EventsPage({ events }) {
  return (
    <Layout title="DJ Events | My Events ">
      {events.length == 0 && <h3>No Events</h3>}
      <h3>Upcomming Events</h3>
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}
export async function getStaticProps() {
  const req = await fetch(`${API_URL}/api`);
  const events = await req.json();
  console.log(events);
  return {
    props: { events },
    revalidate: 1,
  };
}
