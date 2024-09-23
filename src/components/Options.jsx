import { useState, useEffect } from "react";

const Options = ({ setInfoFromOptions }) => {
    const [typeofcocktail, setTypeofcocktail] = useState('');
    const [yourchiefabilities, setYourchiefabilities] = useState('');
    const [sizeofacup, setSizeofacup] = useState('');
    const [temperature, setTemperature] = useState('');
    const [addextraingredients, setAddextraingredients] = useState('');
    const [baningredients, setBaningredients] = useState('');

    const sendInfoOptions = () => {
        console.log('clicked');
        setInfoFromOptions(`Type of cocktail: ${typeofcocktail}, Chief abilities: ${yourchiefabilities}, Size of a cup: ${sizeofacup}, Temperature: ${temperature}, Extra ingredients: ${addextraingredients}, Ban ingredients: ${baningredients}`);
    };

    useEffect (() => { 
        sendInfoOptions();
    }, [typeofcocktail, yourchiefabilities, sizeofacup, temperature, addextraingredients, baningredients]);

    return (
        <div className="mx-auto p-4 mt-4 bg-black bg-opacity-75 w-[70%] h-[400px] rounded-3xl flex flex-col items-center text-white">
            <div className="text-3xl font-bold">Options</div>
            <p>Lorem, ipsum dolor.</p>

            <div className="flex gap-10 mt-10">
                <div>
                    <div className="flex flex-col">
                        <label>Type of cocktail</label>
                        <select name="dish" id="dish" onChange={(e) => setTypeofcocktail(e.target.value)} className="w-[200px] h-[35px] rounded-3xl text-black border-black  border-2">
                            <option value="milky">молочный</option>
                            <option value="Shicolade">шиколадный</option>
                            <option value="Kazakh">казахский</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label>Your chief abilities</label>
                        <select name="cuisine" id="cuisine" onChange={(e) => setYourchiefabilities(e.target.value)} className="w-[200px] h-[35px] rounded-3xl text-black border-black border-2">
                            <option value="novice">Novice</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="expert">Expert</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Size of a cup</p>
                        <select onChange={(e) => setSizeofacup(e.target.value)} className="w-[200px] h-[35px] rounded-3xl text-black border-black border-2">
                            <option value="small">S size</option>
                            <option value="medium">M size</option>
                            <option value="large">L size</option>
                        </select>
                    </div>

                    <div>
                        <p>Temperature</p>
                        <select onChange={(e) => setTemperature(e.target.value)} className="w-[200px] h-[35px] rounded-3xl text-black border-black border-2">
                            <option value="+100 C">+100 C</option>
                            <option value="0 C">0 C</option>
                            <option value="-10 F">-10 F</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Add extra ingredients</p>
                        <input onChange={(e) => setAddextraingredients(e.target.value)} placeholder="extra ingredients" className="w-[200px] h-[35px] rounded-3xl border-2 text-black border-black "/>
                    </div>

                    <div>
                        <p>Ban ingredients</p>
                        <input onChange={(e) => setBaningredients(e.target.value)} placeholder="ban ingredient" className="w-[200px] h-[35px] rounded-3xl border-2 text-black border-black "/>
                    </div>
                </div>
            </div>

            <p>Selected type of cocktail: {typeofcocktail}</p>
            <p>Selected your chief abilities: {yourchiefabilities}</p>
            <p>Selected size of cup: {sizeofacup}</p>
            <p>Selected temperature: {temperature}</p>
            <p>Selected extra ingredients: {addextraingredients}</p>
            <p>Selected ban ingredients: {baningredients}</p>
        </div>
    );
};

export default Options;
