import { createServer } from "@mercuryworkshop/scramjet";

const server = createServer({
  prefix: "/scramjet/"
});

export default async function handler(req, res) {
  return server(req, res);
}
