import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { eventsData } from "./eventsData";

const db = new PrismaClient();

const seedDatabase = async () => {
  const salt = bcrypt.genSaltSync();
  await db.user.upsert({
    where: { email: "user@test.com" },
    update: {},
    create: {
      name: "firstName lastName",
      email: "user@test.com",
      password: bcrypt.hashSync("password", salt),
      events: {
        create: eventsData.map((event) => ({
          name: event.name,
          schedules: {
            create: event.schedules.map((schedule) => ({
              date: schedule.date,
              time: schedule.time,
              details: schedule.details,
            })),
          },
        })),
      },
    },
  });

  // await Promise.all(
  //   eventsData.map((event) => {
  //     return db.event.upsert({
  //       where: { name: event.name },
  //       update: {},
  //       create: {
  //         name: event.name,
  //         schedules: {
  //           create: event.schedules.map((schedule) => ({
  //             date: schedule.date,
  //             time: schedule.time,
  //             details: schedule.details,
  //           })),
  //         },
  //       },
  //     });
  //   })
  // );
};

seedDatabase()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect;
  });
