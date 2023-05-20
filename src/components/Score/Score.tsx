import Bar from '../Score/Bar'


const Score = () => {
    return (
        <div className="flex flex-col h-full w-full p-4  rounded-xl bg-black text-white mt-2">
            <div className="flex justify-between text-3xl font-bold ">
                <div>
                    <div className='flex justify-between items-end p-1'>
                    17
                    <p className='text-accent text-sm p-1'>TOGO</p>

                    </div>
                </div>

                <div>50</div>
            </div> 
            <Bar />
            <div className='p-1'>
                Путь к бесплатному абонементу
            </div> 

        </div>
    )
}

export default Score;