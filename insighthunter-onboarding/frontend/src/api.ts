export const getOnboarding = async () => {
  const res = await fetch("/api/onboarding/hello");
  const data = await res.json();
  return data.message;
};

export const submitOnboarding = async (payload) => {
  const res = await fetch("/api/onboarding/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
};
