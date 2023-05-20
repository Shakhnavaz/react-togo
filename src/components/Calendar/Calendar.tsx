import Days from './Days'

const Calendar = () => {
    return (
        <div className="h-full w-full mt-2 flex-col justify-between rounded-xl bg-black p-5 text-white">
            <div className="font-bold text-4xl">
                Календарь
            </div>
            <div className="text-accent text-lg py-1">
                Май, 2023
            </div>
            <Days />
        </div>
    )
}

export default Calendar;