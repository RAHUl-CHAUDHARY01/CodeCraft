import { Play, RotateCcw, Save } from 'lucide-react';
import React, { useState } from 'react';
import {Buffer} from 'buffer';
const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('Output will appear here');
  const [InputOpen , setInputOpen] = useState(true);
  const [language, setLanguage] = useState('Go');
  const [isRunning, setIsRunning] = useState(false);
  const languageMap = {
    "C": 48,
    "C++": 52,
    "Java": 62,
    "JavaScript": 63,
    "Python": 71,
    "C#": 51,
    "PHP": 68,
    "Go": 60,
    "Ruby": 72,
    "Rust": 73
  };
  const handleCodeChange = (e) => {
    setCode(e.target.value);
    console.log(e.target.value);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const runCode = async () => {
    const base64Encoded = Buffer.from(code, 'utf-8').toString('base64');
    console.log("code",base64Encoded);
    console.log("input" , Buffer.from(input, 'utf-8').toString('base64'));
    setIsRunning(true);

    const url = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*';
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'x-rapidapi-key': 'a53c5aea39mshc6553a4794988e3p18acf6jsn95f1d5f550bf',
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language_id: languageMap[language],
        source_code: base64Encoded,
        stdin: Buffer.from(input, 'utf-8').toString('base64'),
      }),
    };
    let token='a';
    try {
      const response = await fetch(url, options);
      const result = await response.json();
    
      // Extract only the token value
      token = result.token; 
    
      console.log(token); // This will print only the token value, e.g., "12312342342bjfwebfuwefwdc"
    } catch (error) {
      setOutput("Error executing code");
      setIsRunning(false);
    }
    const outputurl= `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=false&fields=stdout,stderr,status_id,language_id`
    console.log(outputurl);
    const GetOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'undefined',
        'x-rapidapi-ua': 'RapidAPI-Playground',
        'x-rapidapi-key': 'a53c5aea39mshc6553a4794988e3p18acf6jsn95f1d5f550bf',
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
      }
    };
    const outputresponse = await fetch(outputurl, GetOptions);
    const op = await outputresponse.json();
    console.log(op);
    setOutput(op.stdout);
    setIsRunning(false);
  };
  const clearOutput = () => {
    setOutput('');
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 ">
        <div className="flex items-center">
          <div className="text-gray-800 font-medium">
            &lt;&gt; Code Editor
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <select 
            className="px-3 font-medium  rounded border border-gray-300"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>C</option>
            <option>C++</option>
            <option>Java</option>
            <option>JavaScript</option>
            <option>Python</option>
            <option>C#</option>
            <option>PHP</option>
            <option>Go</option>
            <option>Ruby</option>
            <option>Rust</option>
          </select>
          <button 
            className="px-3 py-1 rounded border border-1 border-gray-300 hover:bg-gray-100"
            onClick={runCode}
            disabled={isRunning}
          >
            {/* {isRunning ? 'Running...' : 'Go'} */}
            <Play size={15}/>
          </button>
          <button className="px-3 py-1 rounded border border-1 border-gray-300 hover:bg-gray-100">
            <Save size={15}/>
          </button>
          <button 
            className="px-3 py-1 rounded border border-1 border-gray-300 hover:bg-gray-100"
            onClick={clearOutput}
          >
            <RotateCcw size={15}/>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden gap-2 mt-3">
        {/* Code panel */}
        <div className="w-1/2 flex flex-col h-[80vh]">
          <div className="flex justify-between items-center px-4 py-2">
            <div className="font-medium">Code</div>
            <button 
              className="px-2 py-1 text-sm"
              onClick={runCode}
              disabled={isRunning}
            >
              {language}
            </button>
          </div>
          <textarea
            className="flex-1 p-4 font-mono text-sm resize-none outline-none border border-gray-200 mx-2 rounded-[5px] shadow-md border-2 h-6"
            value={code}
            onChange={handleCodeChange}
            placeholder="Write your go code here..."
          />
        </div>

        {/* Output panel */}
        <div className="w-1/2 flex flex-col h-[80vh]">
          <div className="flex items-center justify-center bg-gray-200 px-1 py-1 rounded-[5px]">
            <button 
              className={`w-1/2 font-medium ${InputOpen=== false ? 'text-gray-400' : 'bg-white rounded-[5px] h-8 mx-0.1 '}`}
              onClick={()=> setInputOpen(true)}
            >
              Input
            </button>
            <button 
              className={` w-1/2 font-medium ${ InputOpen=== false ? 'bg-white rounded-[5px] h-8 mx-0.1 ' : 'text-gray-400'}`}
              onClick={()=>setInputOpen(false)}
            >
              Output
            </button>
          </div>

          <div className="flex-1 flex flex-col">
            {InputOpen ? (
              <div className="flex-1 flex flex-col">
                <div className="px-4 py-2 font-medium">
                  Input
                </div>
                <textarea
                  className="flex-1 p-4 font-mono text-sm resize-none outline-none border-2 border-gray-200 mx-2 rounded-[5px] shadow-md"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Enter input for your code..."
                />
              </div>
            ) : (
              <div className="flex-1 p-4 mt-4 font-mono text-sm whitespace-pre overflow-auto border-2 border-gray-200 mx-2 rounded-[5px] shadow-md">
                {output}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;