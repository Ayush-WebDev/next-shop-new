export const formatprice = (amount: number | null) => {
  amount = amount === null ? 0 : amount;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};
