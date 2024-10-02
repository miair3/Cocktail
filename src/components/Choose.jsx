import React, { useState } from "react";
import Ingredient from "./Ingredient";
import Options from "./Options";

const Choose = () => {
  const apikey = import.meta.env.VITE_API_KEY;
  const apiurl = import.meta.env.VITE_API_URL;
  const [infoFromOptions, setInfoFromOptions] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [gptPromptText, setGptPromptText] = useState([]);
  const [generatedText, setGeneratedText] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const ingredientsData = [
    { name: "Apple", imageSrc: "/images/apple.png" },
    { name: "Banana", imageSrc: "/images/banana.png" },
    { name: "Avocado", imageSrc: "/images/avocado.png" },
    { name: "Strawberry", imageSrc: "/images/strawberry.png" },
    { name: "watermelon", imageSrc: "/images/watermelon.png" },
    { name: "cherry", imageSrc: "/images/cherry.png" },
    { name: "grape", imageSrc: "/images/grape.png" },
  ];

  const createPromptText = () => {
    let text = "Пenerate a cocktail: " + gptPromptText.toString();
    console.log("prompt text: ", text);
    return text;
  };

  const handleIngredientClick = (ingredient) => {
    setGptPromptText([...gptPromptText, ingredient.name]);
  };

  const generateText = async () => {
    let text = 'generate me recipe for coctail with there ingredients:' + gptPromptText.toString();
    console.log('started generation of text...');

    try{
        const response = await fetch(apiurl, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apikey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            prompt: text,
            max_tokens: 350,
        }),
    });
        const data = await response.json();
        console.log('data: ', data);
        setGeneratedText(data.choices[0].text);

        setIsLoading(false);
    }catch(error){
        console.error(error);
    }
}

  const generateImage = async (promptText) => {
    setIsLoading(true)
    console.log("generate image");
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
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        options
      );
      const data = await response.json();
      console.log("data: ", data);
      setImageUrl(data.data[0].url);

      await generateText();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/cocktailclass.jpg")', // замените на свой путь к фоновому изображению
        backgroundSize: "cover",
        backgroundPosition: "center",
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
          className="px-4 h-[50px] m-4 rounded-full bg-slate-900 text-white"
          disabled = {isLoading}
        >

           {isLoading ? <div>Loading ... </div> : <div>Generate Dish</div>}

        </button>
      </div>
      {imageUrl && (
        <img src={imageUrl} width={400} height={400} alt="generated dish" />
      )}
      
      <Options setInfoFromOptions={setInfoFromOptions} />
      <div className="text-white">generated text: {generatedText}</div>
    </div>
  );
};

export default Choose;
