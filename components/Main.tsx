import Link from "next/link";
import React, { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { ClipLoader, FadeLoader, RotateLoader } from "react-spinners";

const Main = () => {
  const courses = [
    "Bachelor of Science in Nursing",
    "Bachelor of Science in Accountancy",
    "Bachelor of Science in Information Technology",
    "Bachelor of Science in Civil Engineering",
    "Bachelor of Science in Mechanical Engineering",
    "Bachelor of Science in Architecture",
    "Bachelor of Science in Psychology",
    "Bachelor of Science in Education",
    "Bachelor of Science in Business Administration",
    "Bachelor of Science in Tourism Management",
    "Bachelor of Science in Agriculture",
    "Bachelor of Science in Fisheries",
    "Bachelor of Science in Criminology",
    "Bachelor of Science in Computer Science",
    "Bachelor of Science in Biology",
    "Bachelor of Science in Chemistry",
    "Bachelor of Arts in Communication",
    "Bachelor of Arts in English",
    "Bachelor of Science in Mathematics",
    "Bachelor of Science in Physics",
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
          prompt: `Can you create a 10 examples of capstone thesis titles using ${title} and make sure that the titles are unique and can you provide some reference for it.. You can use the following as a guide: Please make this in a list format and add a colon (:) at the end of each title.`,
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
            Course Lists
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
              {courses.map((course) => (
                <option className="font-sans" key={course} value={course}>
                  {course}
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

export default Main;
