// TODO: re-implement auth

export const validate = (handler) => {
  return async (req, res) => {
    return handler(req, res);
  };
  // return async (req: NextApiRequest, res: NextApiResponse) => {
  //   const token = req.cookies.TRAX_TOKEN;
  //   if (token) {
  //     let user;
  //     try {
  //       const { id } = jwt.verify(token, "hello");
  //       user = await prisma.user.findUnique({
  //         where: { id },
  //       });

  //       if (!user) {
  //         throw new Error("not a user");
  //       }
  //     } catch (error) {
  //       res.status(401);
  //       res.json({ error: "not authorized" });
  //       return;
  //     }
  //     return handler(req, res, user);
  //   }
  //   res.status(401);
  //   res.json({ error: "not authorized" });
  // };
};
