import { validate } from "../../lib/auth";
import prisma from "../../lib/prisma";

export default validate(async (req, res) => {
  const events = await prisma.event.findMany({
    include: {
      attendees: true,
    },
  });
  res.json(events);
});
