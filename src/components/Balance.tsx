


const Balance = () => {
    return (
        <>
        <div className="flex flex-col h-full w-full p-4 text-4xl font-bold rounded-xl bg-black text-white ">
            <div >
                <div className="flex items-end">
                    Баланс: 650
                    <p className="text-base text-accent px-1">TOGO</p>
                </div>
                
            </div>
            

            <img  className="h-full w-full" src="assets/graph.svg" />
        </div>
        
        </>
    )
}

export default Balance;