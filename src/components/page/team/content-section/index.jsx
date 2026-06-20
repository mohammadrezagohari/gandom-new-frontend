import TeamCard from "@/src/components/common/cards/team";
import prisma from "@/src/lib/prisma";

export default async function ContentSection({ locale }) {
  const members = await prisma.teamMember.findMany({
    where: { isActive: true },
    orderBy: [{ sortOrder: "asc" }, { id: "asc" }],
  });
  const basePath = locale ? `/${locale}/team` : "/team";

  return (
    <section className="w-full">
      <div className="container max-w-none">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {members.map((item) => (
            <TeamCard
              key={item.id}
              img={item.image}
              href={`${basePath}/${item.id}/${encodeURIComponent(`${item.name} ${item.family}`)}`}
              name={item.name}
              family={item.family}
              position={item.position}
              link="see more"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
