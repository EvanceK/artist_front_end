import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function CountDown({ datetime }) {
  const DateTime = datetime;
  // Calculate the "Coming Soon" date (3 days after the given DateTime)
  const comingSoonDate = new Date(DateTime);
  comingSoonDate.setDate(comingSoonDate.getDate() + 3);

  // Calculate the "Close In" date (10 days after "Coming Soon" date)
  const closeInDate = new Date(comingSoonDate);
  closeInDate.setDate(closeInDate.getDate() + 10);

  const [isClosed, setIsClosed] = useState(false);
  const [isOnGoing, setIsOnGoing] = useState(false);
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
      const timeUntilComingSoon = comingSoonDate - now; // Time until "Coming Soon" period ends
      const timeUntilCloseIn = closeInDate - now; // Time until "Close In" period ends

      let days;
      let hours;
      let minutes;
      let seconds;

      if (timeUntilCloseIn > 0) {
        // "Close In" period
        if (timeUntilComingSoon > 0) {
          // "Coming Soon" period
          setIsOnGoing(false);
          days = Math.floor(timeUntilComingSoon / (1000 * 60 * 60 * 24));
          hours = Math.floor(
            (timeUntilComingSoon % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          minutes = Math.floor(
            (timeUntilComingSoon % (1000 * 60 * 60)) / (1000 * 60)
          );
          seconds = Math.floor((timeUntilComingSoon % (1000 * 60)) / 1000);
        } else {
          // "Close In" period has started
          setIsOnGoing(true);
          days = Math.floor(timeUntilCloseIn / (1000 * 60 * 60 * 24));
          hours = Math.floor(
            (timeUntilCloseIn % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          minutes = Math.floor(
            (timeUntilCloseIn % (1000 * 60 * 60)) / (1000 * 60)
          );
          seconds = Math.floor((timeUntilCloseIn % (1000 * 60)) / 1000);
        }

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
  }, [comingSoonDate, closeInDate]);

  return (
    <>
      {!isClosed ? (
        <>
          {!isOnGoing ? (
            <span className="me-3">Coming Soon </span>
          ) : (
            <span className="me-3">CLOSE IN </span>
          )}
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

CountDown.propTypes = {
  datetime: PropTypes.instanceOf(Date).isRequired, // Use instanceOf for Date objects
};
