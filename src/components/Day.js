import "../styles/Day.css";

const Day = ({ day, content, isOpened, onClick, isLocked, isToday }) => {
  const photo = isOpened && content?.mediaUrl ? content.mediaUrl : null;

  const labelParts = [`Day ${day}`];
  if (isLocked) labelParts.push(`locked until ${day} December`);
  else if (!isOpened) labelParts.push("ready to open");
  if (isToday) labelParts.push("today's window");
  if (isOpened) labelParts.push("opened");
  const label = labelParts.join(", ");

  const className = [
    "window-door",
    isOpened && "opened",
    day === 25 && "day-25",
    isLocked && "locked",
    isToday && "is-today",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-label={label}
    >
      {photo && (
        <span
          className="window-photo"
          style={{ backgroundImage: `url(${photo})` }}
          aria-hidden="true"
        />
      )}
      <span className="window-muntins" aria-hidden="true" />
      <span className="day-number">{day}</span>
      {(isLocked || !isOpened) && (
        <span
          className={`door-label ${isLocked ? "is-dark" : "is-light"}`}
          aria-hidden="true"
        >
          {isLocked ? "Dark" : "Light"}
        </span>
      )}
      <span className="window-sill" aria-hidden="true" />
    </button>
  );
};

export default Day;