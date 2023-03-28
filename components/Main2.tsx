import Link from "next/link";
import React, { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { FadeLoader } from "react-spinners";

const Main2 = () => {
  const strands = [
    "General Academic Strand",
    "Accountancy, Business and Management Strand",
    "Science, Technology, Engineering and Mathematics Strand",
    "Humanities and Social Sciences Strand",
    "Technical-Vocational-Livelihood Strand",
  ];

  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponse] = useState([]);

  const getResponseFromOpenAI = async () => {
    setIsLoading(true);
    try {
      const url = "/api/openai";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `Can you create a 10 examples of capstone thesis titles using ${title} and can you provide some reference for it. Please make this in a list format and add a colon (:) at the end of each title.`,
        }),
      });

      const data = await response.json();

      const titlesArray = data.result.split(":");
      for (let i = 0; i < titlesArray.length; i++) {
        if (titlesArray[i] === "") {
          titlesArray.splice(i, 1);
        }
      }

      const titles = titlesArray.map((title: any) => {
        if (title[0] === "\n") {
          title = title.slice(1);
        }
        return title;
      });
      // LIST ALL THE TITLES
      const titlesList = titles.map((title: any) => {
        return (
          <p key={title} className="text-xl py-2 font-semibold text-slate-500">
            {title} <br />
          </p>
        );
      });
      setIsLoading(false);
      setResponse(titlesList);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTitle(e.target.value);
    setPrompt(e.target.value);
  };

  return (
    <>
      <main className="w-full px-10 py-5 md:px-32 lg:px-[35rem]">
        <Link href="/">
          <div className="flex items-center gap-4 pb-[1px] pt-10">
            <IoArrowBackSharp />
            <h1 className="text-xl font-medium">Back</h1>
          </div>
        </Link>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-slate-500 pt-14 mx-10">
            Strand Lists
          </h1>
          <div className="w-full flex flex-col py-4 px-10 gap-10 ">
            <select
              name=""
              id=""
              onChange={handleChange}
              className="px-4 py-2 border-2 font-semibold text-xl text-slate-500 border-slate-500 bg-white rounded-lg"
            >
              <option className="font-sans text-gray-500" hidden>
                {" "}
                Select your course here
              </option>
              {strands.map((strand) => (
                <option className="font-sans" key={strand} value={strand}>
                  {strand}
                </option>
              ))}
            </select>
            <button
              className="rounded-md text-center px-4 py-2 text-xl bg-green-500 text-white font-semibold hover:bg-green-600 ease-in"
              onClick={getResponseFromOpenAI}
            >
              Generate Titles
            </button>
          </div>
        </div>
        <div className="block rounded-2xl p-4 shadow-2xl mx-10">
          {isLoading ? (
            <div className="flex items-center py-10 px-5 justify-center">
              <FadeLoader color="#64748B" />
            </div>
          ) : (
            responses.map((response: string) => {
              return response;
            })
          )}
        </div>
      </main>
    </>
  );
};

export default Main2;
