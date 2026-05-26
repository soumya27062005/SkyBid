import React, { useState } from "react";
import { CheckCircle, CreditCard, Smartphone, Banknote } from "lucide-react";
import QRCode from "react-qr-code";

export const Payment = ({ amount }) => {
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handlePayment = async () => {
    if (!selectedMethod) {
      alert("Please select a payment method");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency: "INR", method: selectedMethod }),
      });

      const data = await response.json();

      if (!data.success) {
        alert("Payment Failed!");
        setLoading(false);
        return;
      }

      const options = {
        key: "rzp_test_bZcKlCUN0PAjtw",
        amount: data.order.amount,
        currency: "INR",
        name: "SkyBid",
        description: "Auction Payment",
        order_id: data.order.id,
        handler: (response) => {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: "Tanvi Patel",
          email: "tanu@gmail.com",
          contact: "9313005194",
        },
        theme: { color: "#4F46E5" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      alert("Error processing payment");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-xl p-8">
        <header className="text-center mb-6">
          <CheckCircle className="text-green-600 w-12 h-12 mx-auto" />
          <h1 className="text-2xl font-bold text-gray-700 mt-2">Secure Payment</h1>
          <p className="text-gray-500">Complete your transaction with confidence</p>
        </header>
        <main>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            <p className="text-gray-600">
              Amount: <span className="font-bold">₹{amount}</span>
            </p>
          </div>
          <div className="space-y-4 mb-6">
            <button
              className={`w-full flex items-center gap-3 px-6 py-4 rounded-lg text-left border border-gray-300 hover:border-blue-600 ${
                selectedMethod === "credit_card" ? "border-blue-600 bg-blue-50" : ""
              }`}
              onClick={() => setSelectedMethod((prev) => (prev === "credit_card" ? null : "credit_card"))}
            >
              <CreditCard className="w-6 h-6 text-blue-600" /> Credit/Debit Card
            </button>
            <button
              className={`w-full flex items-center gap-3 px-6 py-4 rounded-lg text-left border border-gray-300 hover:border-green-600 ${
                selectedMethod === "upi" ? "border-green-600 bg-green-50" : ""
              }`}
              onClick={() => setSelectedMethod((prev) => (prev === "upi" ? null : "upi"))}
            >
              <Smartphone className="w-6 h-6 text-green-600" /> UPI (Google Pay, PhonePe, Paytm)
            </button>
            <button
              className={`w-full flex items-center gap-3 px-6 py-4 rounded-lg text-left border border-gray-300 hover:border-purple-600 ${
                selectedMethod === "net_banking" ? "border-purple-600 bg-purple-50" : ""
              }`}
              onClick={() => setSelectedMethod((prev) => (prev === "net_banking" ? null : "net_banking"))}
            >
              <Banknote className="w-6 h-6 text-purple-600" /> Net Banking
            </button>
          </div>
          {selectedMethod === "upi" && (
            <div className="text-center mb-6">
              <h2 className="text-lg font-semibold mb-2">Scan QR Code to Pay</h2>
              <QRCode value="upi://pay?pa=your-upi-id@upi&pn=SkyBid&am=amount&cu=INR" className="mx-auto w-48 h-48" />
            </div>
          )}
          <button
            onClick={handlePayment}
            className={`w-full px-6 py-3 text-white font-semibold rounded-lg shadow-md transition duration-300 ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={loading}
          >
            {loading ? "Processing..." : `Pay ₹${amount}`}
          </button>
        </main>
        <footer className="text-center text-gray-500 text-sm mt-6">
          <p>Payments secured with Razorpay</p>
        </footer>
      </div>
    </div>
  );
};
