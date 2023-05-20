

const Profile = () => {
    return (
        <div className='flex justify-between items-center h-fit p-4 w-full  rounded-xl bg-black text-white '>
            <div>
                <div className="flex font-bold text-4xl py-1">
                    Привет, <p className='text-accent '> Бага</p> 
                </div>
                <div className='text-lg'>
                    Готов к занятиям?
                </div> 
            </div>
            

            <img src="assets/telegram-peer-photo-size-2-1898846866409367567-1-0-0 1.png" alt="" />
        </div>
    )
}

export default Profile;