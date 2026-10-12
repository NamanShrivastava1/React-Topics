const StatusOverview = () => {
  const circumference = 2 * Math.PI * 40;

  const progress = [25, 30, 45];

  const colors = ["#4ade80", "#3b82f6", "#c084fc"];

  let accumulatedProgress = 0;

  return (
    <div>
      <div className="absolute right-16 top-29 mx-auto flex h-58 w-58 items-center justify-center rounded-full">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          {progress.map((value, index) => {
            const segmentLength = (value / 100) * circumference;
            const offset = (accumulatedProgress / 100) * circumference;

            accumulatedProgress += value;

            return (
              <circle
                key={index}
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke={colors[index]}
                strokeWidth="4"
                strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
                strokeDashoffset={-offset}
              />
            );
          })}
        </svg>

        <div className="absolute text-center">
          <span className="block text-lg font-bold tracking-wide text-white">
            Employee
          </span>
          <span className="text-sm font-medium uppercase tracking-wider text-white">
            Progress
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatusOverview;
