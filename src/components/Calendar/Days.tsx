const Day = ({day}: {day: {date: Date, points: number}}) => {
    return <li className="flex items-center justify-center w-14 h-14 border-accent border-2 rounded-lg">{day.date.getDate()}</li>
}

const Days = () => {
  return (
    <ul className="px-5 flex justify-center space-x-2 text-xl">
      {[{ date: new Date(), points: 30 }].map((day) => (
        <Day day={day}/>
      ))}
    </ul>
  );
};

export default Days;
