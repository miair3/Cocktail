import dish from '../../public/images/dish.png'

const InfoBlock = () => {
    return (
        <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-evenly bg-cover bg-center" 
             style={{ backgroundImage: `url(${dish})` }}> 
            <div className="p-8 lg:ml-5 lg:mr-auto"> {/* Меняем местами lg:ml-auto и lg:mr-5 */}
                <h1 className="text-3xl font-bold text-white"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aspernatur.{" "}
                </h1>
                <p className="text-white"> 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quisquam aut veniam, sed animi perferendis.
                </p>
                <button className="px-3 h-[30px] text-white rounded-full hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out">
                    Off
                </button>
                <button className="px-3 h-[30px] text-white rounded-full hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out">
                    Open
                </button>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default InfoBlock;
