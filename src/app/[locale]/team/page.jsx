import ContentSection from "@/src/components/page/team/content-section";

export default function Team({ params }) {
  return (
    <main>
      <h1 className="container max-w-none text-center font-Holispay text-[3.125em] text-g21 lg:text-[6.8em]">Our Team</h1>
      <ContentSection locale={params.locale} />
    </main>
  );
}
