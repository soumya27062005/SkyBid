import { Body, Caption, Container, Title } from "../../router";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { commonClassNameOfInput } from "../../components/common/Design";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect, useCallback } from "react";

export const ProductsDetailsPage = () => {
  const auctionEndDate = new Date("2025-02-28T00:00:00Z").getTime();

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = auctionEndDate - now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [auctionEndDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [bidAmount, setBidAmount] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentBid, setCurrentBid] = useState(500);
  const [minBid, setMinBid] = useState(currentBid * 1.1);
  const [maxBid, setMaxBid] = useState(currentBid * 1.2);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  useEffect(() => {
    setMinBid(currentBid * 1.1);
    setMaxBid(currentBid * 1.2);
  }, [currentBid]);

  const handleBidChange = (e) => {
    const value = parseFloat(e.target.value);
    setBidAmount(value);

    if (isNaN(value) || value <= 0) {
      setErrorMessage("Please enter a valid bid amount.");
      setIsDisabled(true);
    } else if (value < minBid) {
      setErrorMessage(`Bid must be at least $${minBid.toFixed(2)}`);
      setIsDisabled(true);
    } else if (value > maxBid) {
      setErrorMessage(`Bid must not exceed $${maxBid.toFixed(2)}`);
      setIsDisabled(true);
    } else {
      setErrorMessage("");
      setIsDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDisabled) {
      setCurrentBid(bidAmount);
      alert(`Bid of $${bidAmount} placed successfully!`);
      setBidAmount("");
      setIsDisabled(true);
    }
  };

  return (
    <section className="pt-24 px-8">
      <Container>
        <div className="flex justify-between gap-8">
          <div className="w-1/2">
            <div className="h-[70vh]">
              <img
                src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-14.jpg"
                alt="Product"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="w-1/2">
            <Title level={2} className="capitalize">Couple Wedding Ring</Title>
            <div className="flex gap-5">
              <div className="flex text-green">
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStarHalf size={20} />
                <IoIosStarOutline size={20} />
              </div>
              <Caption>(2 customer reviews)</Caption>
            </div>
            <br />
            <Body>Elegant 18k rose gold wedding rings with a smooth finish.</Body>
            <br />
            <Caption>Item condition: New</Caption>
            <br />
            <Caption>Item Verified: Yes</Caption>
            <br />
            <Caption>Time left:</Caption>
            <br />
            <div className="flex gap-8 text-center">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="p-5 px-10 shadow-s1">
                  <Title level={4}>{value}</Title>
                  <Caption>{unit.charAt(0).toUpperCase() + unit.slice(1)}</Caption>
                </div>
              ))}
            </div>
            <br />
            <Title className="flex items-center gap-2">
              Auction ends: <Caption>February 28, 2025 12:00 am UTC</Caption>
            </Title>
            <Title className="flex items-center gap-2">
              Current bid: <Caption className="text-3xl">${currentBid}</Caption>
            </Title>
            <div className="p-5 px-10 shadow-s3 py-8">
              <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <div className="flex gap-3">
                  <input
                    className={commonClassNameOfInput}
                    type="number"
                    name="price"
                    value={bidAmount}
                    onChange={handleBidChange}
                    placeholder={`Enter your bid (Min: $${minBid.toFixed(2)})`}
                  />
                  <button type="button" className="bg-gray-100 rounded-md px-5 py-3">
                    <AiOutlinePlus />
                  </button>
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <button
                  type="submit"
                  disabled={isDisabled}
                  className={`py-3 px-8 rounded-lg ${
                    isDisabled ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-500 text-white"
                  }`}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
