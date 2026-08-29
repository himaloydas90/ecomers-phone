export const trackingSteps = [
  { key: "placed", label: "Order Placed" },
  { key: "packaging", label: "Packaging" },
  { key: "road", label: "On The Road" },
  { key: "delivered", label: "Delivered" },
];

/**
 * In a real app this would call your order-management API / DB.
 * Replace this with a fetch to your backend, e.g.:
 *   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}`);
 */
export async function getOrderById(orderId) {
  if (!orderId) return null;

  return {
    id: orderId.toUpperCase(),
    productCount: 4,
    total: 1199.0,
    placedAt: "17 Jan, 2021 at 7:32 PM",
    expectedArrival: "23 Jan, 2021",
    currentStepIndex: 3, // 0-based index into trackingSteps; 3 = fully delivered
    activity: [
      {
        id: "a1",
        icon: "delivered",
        tone: "positive",
        message: "Your order has been delivered. Thank you for shopping at Clicon!",
        timestamp: "23 Jan 2021 at 7:32 PM",
      },
      {
        id: "a2",
        icon: "courier",
        tone: "brand",
        message: "Our delivery man (John Wick) has picked up your order for delivery.",
        timestamp: "23 Jan 2021 at 2:00 PM",
      },
      {
        id: "a3",
        icon: "hub",
        tone: "brand",
        message: "Your order has reached at last mile hub.",
        timestamp: "22 Jan 2021 at 8:00 AM",
      },
      {
        id: "a4",
        icon: "transit",
        tone: "brand",
        message: "Your order on the way to last mile hub.",
        timestamp: "21 Jan 2021 at 5:32 AM",
      },
      {
        id: "a5",
        icon: "verified",
        tone: "positive",
        message: "Your order is successfully verified.",
        timestamp: "20 Jan 2021 at 7:32 PM",
      },
      {
        id: "a6",
        icon: "confirmed",
        tone: "brand",
        message: "Your order has been confirmed.",
        timestamp: "19 Jan 2021 at 2:51 PM",
      },
    ],
  };
}
