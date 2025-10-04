import { Router } from "itty-router";

const router = Router();

router.get("/hello", () => {
  return new Response(JSON.stringify({ message: "Welcome to Insight Hunter Onboarding API!" }), {
    headers: { "Content-Type": "application/json" },
  });
});

router.post("/submit", async (req) => {
  const data = await req.json();
  console.log("Onboarding submitted:", data);
  return new Response(JSON.stringify({ status: "success" }), {
    headers: { "Content-Type": "application/json" },
  });
});

router.all("*", () => new Response("Not Found", { status: 404 }));

export default router;
