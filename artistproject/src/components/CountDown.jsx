import { useEffect, useState } from "react";

export default function CountDown({ datetime }) {
  //given datetime from data
  // const DateTime = "2024-10-10T10:53:22";
  const DateTime = datetime;
  // Calculate target date (3 days after the given DateTime)
  const targetDate = new Date(DateTime);
  targetDate.setDate(targetDate.getDate() + 3);
  const [isClosed, setIsClosed] = useState(false);
  // State to store the remaining time
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Function to calculate the remaining time
    const updateCountDown = () => {
      const now = new Date(); // Get the current date and time
      const difference = targetDate - now; // Calculate the difference in milliseconds

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setRemainingTime({ days, hours, minutes, seconds });
      } else {
        // Countdown has ended, set everything to 0
        setIsClosed(true);
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    // Call the function every second to update the countdown
    const intervalId = setInterval(updateCountDown, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [targetDate]);
  return (
    <>
      {!isClosed ? (
        <>
          <span className="me-3">CLOSE IN </span>
          <div className="datetime h2">
            {remainingTime.days > 0 ? `${remainingTime.days} day` : ""}
            {remainingTime.hours > 0 ? ` ${remainingTime.hours} h ` : ""}
            {remainingTime.minutes > 0 ? ` ${remainingTime.minutes} m ` : ""}
            {remainingTime.seconds > 0 ? ` ${remainingTime.seconds} s ` : ""}
          </div>
        </>
      ) : (
        <span className="h1 text-danger">CLOSED! </span>
      )}
    </>
  );
}
