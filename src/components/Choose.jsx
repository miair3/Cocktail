import React, { useState } from "react";
import Ingredient from "./Ingredient";
import Options from "./Options";

const Choose = () => {
    const apikey = import.meta.env.VITE_API_KEY;

    const [infoFromOptions, setInfoFromOptions] = useState();
    const [imageUrl, setImageUrl] = useState('');
    const [gptPromptText, setGptPromptText] = useState([]);

    const ingredientsData = [
        { name: "Apple", imageSrc: "/images/apple.png" },
        { name: "Banana", imageSrc: "/images/banana.png" },
        { name: "Avocado", imageSrc: "/images/avocado.png" },
        { name: "Strawberry", imageSrc: "/images/strawberry.png" },
    ];

    const createPromptText = () => {
        let text = 'Пenerate a cocktail: ' + gptPromptText.toString();
        console.log('prompt text: ', text);
        return text;
    };

    const handleIngredientClick = (ingredient) => {
        setGptPromptText([...gptPromptText, ingredient.name]);
    };

    const generateImage = async (promptText) => {
        console.log('generate image');
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apikey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: promptText,
                n: 1,
                size: "512x512",
            }),
        };

        try {
            const response = await fetch("https://api.openai.com/v1/images/generations",options);
            const data = await response.json();
            console.log('data: ', data);
            setImageUrl(data.data[0].url);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            className="flex flex-col items-center min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: 'url("/images/cocktailclass.jpg")', // замените на свой путь к фоновому изображению
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-wrap pt-[120px]">
                {ingredientsData.map((ingredient, index) => (
                    <Ingredient
                        key={index}
                        imageSrc={ingredient.imageSrc}
                        onClick={() => handleIngredientClick(ingredient)}
                    />
                ))}
                <div className="text-white">
                    <h3>Selected Ingredients:</h3>
                    <ul>
                        {gptPromptText.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={() => generateImage(createPromptText())}
                    className="px-4 h-[50px] m-4 rounded-2xl bg-indigo-400"
                >
                    Generate Dish
                </button>
            </div>
            {imageUrl && (
                <img src={imageUrl} width={400} height={400} alt="generated dish" />
            )}
            <p className="text-white text-xl">infoFromOptions: {infoFromOptions}</p>
            <Options setInfoFromOptions={setInfoFromOptions} />
        </div>
    );
};

export default Choose;
