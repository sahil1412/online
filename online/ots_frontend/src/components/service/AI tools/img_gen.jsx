import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';



const IMG_Gen = () => {
    let apiKey = "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"
    const [prompt,setPrompt] = useState(""); 
    const [result,setResult] = useState("");
    //console.log(apiKey);
    
    const configuration = new Configuration({
        apiKey: apiKey,
    });

    
    const openai = new OpenAIApi(configuration);

    const generateImage = async () =>{
        const res = await openai.createImage({
            prompt : prompt,
            n : 1,
            size : "1024x1024"
        });

        console.log(res.data.data[0].url);
        setResult(res.data.data[0].url);
    }

    return (
        
<div class="w-5/6 p-4 md:w-2/3 md:p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-16 mx-auto justify-center items-center">
<input type="text" id="voice-search" onChange={(e)=> setPrompt(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Generate Image..." required />
    <a onClick={generateImage} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Generate Image
        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
    { result.length > 0 ? <img class="h-auto w-sm md:w-lg rounded-lg" src={result} alt="/" />: <></>}
</div>
    );
};

export default IMG_Gen;