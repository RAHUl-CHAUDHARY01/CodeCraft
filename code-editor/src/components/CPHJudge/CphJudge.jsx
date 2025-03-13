import React, { useState } from 'react';
import { Copy, Download, Upload, FileText, Plus, Trash2, Play } from 'lucide-react';
import { Buffer } from 'buffer';
// import { stat } from 'fs';
const CodeEditorWithTests = () => {

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

  const [language, setLanguage] = useState('C++');
  const [code, setCode] = useState('');
  const [activeTab, setActiveTab] = useState('Input');
  const [testCases, setTestCases] = useState([
    {
      id: 1,
      name: 'Test Case #1',
      status: 'Pending',
      input: '',
      expectedOutput: '',
      actualOutput: ''
    }
  ]);
  const [activeTestCase, setActiveTestCase] = useState(1);

  // ✅ Add new test case
  const addTestCase = () => {
    const newId = Math.max(...testCases.map(tc => tc.id), 0) + 1;
    const newTestCase = {
      id: newId,
      name: `Test Case #${newId}`,
      status: 'Pending',
      input: '',
      expectedOutput: '',
      actualOutput: ''
    };
    setTestCases([...testCases, newTestCase]);
    setActiveTestCase(newId);
  };

  // ✅ Delete test case
  const deleteTestCase = (id) => {
    const newTestCases = testCases.filter(tc => tc.id !== id);
    setTestCases(newTestCases);
    if (activeTestCase === id && newTestCases.length > 0) {
      setActiveTestCase(newTestCases[0].id);
    }
  };

  // ✅ Update test case
  const updateTestCase = (id, field, value) => {
    const updatedTestCases = testCases.map(tc =>
      tc.id === id ? { ...tc, [field]: value } : tc
    );
    setTestCases(updatedTestCases);
  };

  // ✅ Run Code and Compare Outputs
  const runCode = async () => {
    const url = "https://judge0-ce.p.rapidapi.com/submissions/batch?base64_encoded=true";
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'x-rapidapi-key': 'a53c5aea39mshc6553a4794988e3p18acf6jsn95f1d5f550bf',
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        submissions: testCases.map(tc => ({
          language_id: languageMap[language],
          source_code: Buffer.from(code, 'utf-8').toString('base64'),
          stdin: Buffer.from(tc.input, 'utf-8').toString('base64'),
          expected_output: Buffer.from(tc.expectedOutput, 'utf-8').toString('base64'),
        }))
      })
    };
  
    // ✅ Fetch the response
    const response = await fetch(url, options);
    const result = await response.json();
  
    const tokens = result.map(item => item.token).join(',');
    const options2 = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'x-rapidapi-key': 'a53c5aea39mshc6553a4794988e3p18acf6jsn95f1d5f550bf',
          'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
          'x-rapidapi-ua': 'RapidAPI-Playground',
          'Content-Type': 'undefined',
        }
      };
    const response2 = await fetch(`https://judge0-ce.p.rapidapi.com/submissions/batch?tokens=${tokens}&base64_encoded=false`, options2);
    const result2 = await response2.json();
  console.log(result2);
    // ✅ Now map the results
    const updatedTestCases = testCases.map((tc, index) => {
        const submission = result2.submissions[index];
        
        // ✅ Decode the base64 stdout
        const actualOutput = submission.stdout.trim();
        
        // ✅ Compare output with expected output
        if (actualOutput === tc.expectedOutput.trim() || tc.expectedOutput === '') {
            tc.status = 'Accepted';
        } else {
            tc.status = 'Wrong Answer';
        }
    
        // ✅ Update the test case
        return {
            ...tc,
            actualOutput: actualOutput,
            status: tc.status // Use your custom condition status
        };
    });
    
    // ✅ Update the state
    setTestCases(updatedTestCases);
    
    // ✅ **Immediately update the currentTestCase reference** (FORCE RERENDER)
    const updatedCurrentTestCase = updatedTestCases.find(tc => tc.id === activeTestCase);
    setActiveTestCase(updatedCurrentTestCase.id); // This will force re-render
  };
  
  // ✅ Get the current test case
  const currentTestCase = testCases.find(tc => tc.id === activeTestCase) || testCases[0];

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-gray-200 p-2">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-sm"> &lt;&gt;Code Editor</span>
        </div>
        <div className="flex items-center space-x-2">
          <select
            className="px-3 font-medium  rounded border border-gray-300"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {Object.keys(languageMap).map(lang => (
              <option key={lang}>{lang}</option>
            ))}
          </select>
          <button onClick={runCode} className="px-3 py-1 rounded border border-gray-300">
            <Play size={15} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Code Editor */}
        <div className="mb-3 w-1/2 flex flex-col">
        <div className="flex items-center justify-between p-2">
            <span className="font-medium text-sm">Code</span>
            <div className="flex space-x-2">
              <button className="p-1 text-gray-500 hover:text-gray-700">
                <Copy className="h-4 w-4" />
              </button>
              <button className="p-1 text-gray-500 hover:text-gray-700">
                <Download className="h-4 w-4" />
              </button>
              <button className="p-1 text-gray-500 hover:text-gray-700">
                <Upload className="h-4 w-4" />
              </button>
              <button className="p-1 text-gray-500 hover:text-gray-700">
                <FileText className="h-4 w-4" />
              </button>
            </div>
          </div>
          <textarea
            className="w-full h-full p-2 border-2 border-gray-200 bg-gray-50 rounded-md"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your code..."
          />
        </div>

        {/* Test Cases */}
        <div className=" w-1/2 flex flex-col font-semibold mt-2 mx-2 mb-3">
        <div className=" border-2 flex space-x-2 rounded-[5px] shadow-md border-gray-300 overflow-x-auto no-scrollbar p-2 w-full">
  {testCases.map(testCase => (
    <div 
      key={testCase.id} 
      className={`flex flex-row items-center border border-gray-300 rounded-[5px] shadow-sm px-3 py-2 bg-white`}
    >
      {/* ✅ Test Case Name */}
      <p 
        className="text-sm font-medium text-gray-700 cursor-pointer flex flex-row items-center"
        onClick={() => setActiveTestCase(testCase.id)}
      >
        TestCase#{testCase.id}
      </p>

      {/* ✅ Status Section with Border */}
      <span 
        className={`text-xs font-medium rounded-full border px-2 py-1 ${
          testCase.status === 'Passed' ? 'border-green-500 text-green-800' :
          testCase.status === 'Failed' ? 'border-red-500 text-red-800' :
          'border-gray-400 text-gray-600'
        }`}
      >
        {testCase.status}
      </span>

      {/* ✅ Plus Icon (Add Test Case) */}
      {testCase.id === testCases[testCases.length - 1].id && (
        <button
          className="text-gray-500 hover:text-black cursor-pointer"
          onClick={addTestCase}
        >
          <Plus size={16} />
        </button>
      )}
{ testCases.length > 1 &&
      <button
        className="text-red-500 hover:text-red-700 cursor-pointer"
        onClick={() => deleteTestCase(testCase.id)}
      >
        <Trash2 size={16} />
      </button>
}
    </div>
  ))}
</div>



          {/* Input/Expected/Actual Output */}
          <div className="p-2 flex flex-col h-full font-semibold mb-2">
            <p className='text-gray-500'> Input: </p>
            <div className=' h-3/4  border-2 border-gray-200 rounded-[5px] shadow-md p-2 ' >
            <textarea
              value={currentTestCase.input}
              onChange={(e) => updateTestCase(activeTestCase, 'input', e.target.value)}
              placeholder="Input..."
              className='h-full w-full outline:none'
              />
              </div>
              <div className=' flex flex-row h-1/2 gap-1 '>
                <div className=' w-1/2 h-full'>
<p className='text-gray-500'> Expected Output: </p>
            <textarea
              value={currentTestCase.expectedOutput}
              onChange={(e) => updateTestCase(activeTestCase, 'expectedOutput', e.target.value)}
              placeholder="Expected Output..."
              className='border-2 border-gray-200 rounded-[5px] shadow-md h-full w-full p-2' />
              </div>
              <div className='w-1/2 h-full'>
                <p className='text-gray-500'> Output:</p>
            <textarea
              readOnly
              value={currentTestCase.actualOutput}
              placeholder="Actual Output..."
              className='p-2 border-2 border-gray-200 rounded-[5px] shadow-md h-full w-full pl-2 mr-2' 
              />
              </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorWithTests;
