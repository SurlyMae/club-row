import { validate } from "../../lib/auth";

export default validate((req, res, user) => {
  res.json(user);
});

// TODO bring back user's events with user
