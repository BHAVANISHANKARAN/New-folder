const getUserSubscriptionInfo = (user) => {
  let plan = user?.subscription?.plan?.name || "No Plan";
  let status = user?.subscription?.status || "Inactive";
  return { plan, status };
};

// Example user object
const user = {
  id: "123",
  name: "Alice",
  subscription: {
    plan: { name: "Premium" },
    status: "Active",
  },
};

console.log(getUserSubscriptionInfo(user));
