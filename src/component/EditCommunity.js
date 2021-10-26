import React from "react";
import { useState, useEffect } from "react";
import useValidate from "../services/useValidate";
import validate from "../services/ValidateForm";
import {
  HiOutlinePhotograph,
  HiOutlineTrash,
  HiOutlinePencilAlt,
} from "react-icons/hi";

export default function EditCommunity() {
  const [selectedImaComProfile, setSelectedImgComProfile] = useState();
  const [selectedImgComBaner, setSelectedImgComBaner] = useState();

  const [displayComPro, setdisplayComPro] = useState(false);
  const [displayCombaner, setdisplayComBaner] = useState(false);
  // add rule
  const [editRule, setEditRule] = useState(false);
  const [currentRule, setCurrentRule] = useState({});
  const [rules, setRules] = useState(() => {
    const saveRules = localStorage.getItem("rules");
    if (saveRules) {
      return JSON.parse(saveRules);
    } else {
      return [];
    }
  });
  const [rule, setRule] = useState("");

  function handleEditInputRule(e) {
    setCurrentRule({ ...currentRule, text: e.target.value });
    console.log("current Rule", currentRule);
  }

  useEffect(() => {
    localStorage.setItem("rules", JSON.stringify(rules));
  }, [rules]);
  function handleInputRuleChange(e) {
    setRule(e.target.value);
    // console.log(e.target.value);
  }
  function handleFormRuleSubmit(e) {
    e.preventDefault();
    if (rule !== "") {
      setRules([
        ...rules,
        {
          id: rules.length + 1,
          text: rule.trim(),
        },
      ]);
    }
    setRule("");
  }
  function handleDeleteRule(id) {
    const remveRule = rules.filter((rule) => {
      return rule.id !== id;
    });
    setRules(remveRule);
  }

  function handleEditeRule(rule) {
    setEditRule(true);
    setCurrentRule({ ...rule });
  }
  function handleUpdateRule(id, updatedRule) {
    const updatedItem = rules.map((rule) => {
      return rule.id === id ? updatedRule : rule;
    });
    setEditRule(false);
    setRules(updatedItem);
  }

  function handleEditFormSubmitRule(e) {
    e.preventDefault();
    handleUpdateRule(currentRule.id, currentRule);
  }

  // !!

  const displayHandlerComPro = () => {
    setdisplayComPro(true);
  };
  const disdisplayHandlerComBaner = () => {
    setdisplayComBaner(true);
  };

  // This function will be triggered when the file field change
  const imageComProfileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImgComProfile(e.target.files[0]);
    }
  };
  const imageComBanerChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImgComBaner(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeComImagePro = () => {
    setSelectedImgComProfile();
    setdisplayComPro(false);
  };
  const removeImageComBaner = () => {
    setSelectedImgComBaner();
    setdisplayComBaner(false);
  };

  const upLoadedImgComPro = (e) => {
    imageComProfileChange(e);
    displayHandlerComPro();
  };
  const upLoadedImgComCov = (cover) => {
    imageComBanerChange(cover);
    disdisplayHandlerComBaner();
  };

  const { values, errors, handleChange, handleSubmit } = useValidate(
    test,
    validate
  );

  function test() {
    console.log("No errors, submit callback called!");
  }
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="mt-5 md:mt-0 md:col-span-2">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <form action="#" method="POST" onSubmit={handleSubmit} noValidate>
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6"></div>

              {/*  Display name*/}

              {/* About (optional) */}
              <div>
                <div className="block text-xl font-bold font-small text-gray-700">
                  {" "}
                  Community description
                </div>
                <label htmlFor="about" className="block text-xs  text-gray-500">
                  A brief description of yourself shown on your Community.
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="outline-none pl-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full h-20  sm:text-sm border border-gray-300 rounded-md"
                    placeholder=""
                    defaultValue={""}
                  />
                </div>

                <div className="block text-xs font-small text-gray-500">
                  500 Characters remaining
                </div>
              </div>

              {/* up img */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Community image profile
                </label>
                <div className="block text-xs font-small text-gray-500">
                  Images must be .png or .jpg format
                </div>
                <div className="">
                  {/* up img Profile */}
                  <div>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        {displayComPro ? (
                          ""
                        ) : (
                          <div>
                            <HiOutlinePhotograph
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                            />

                            <div className=" text-sm text-gray-600">
                              <label
                                htmlFor="ProfileCommunity"
                                className={` relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500`}
                              >
                                <span className="">Upload a file</span>
                                <input
                                  id="ProfileCommunity"
                                  name="ProfileCommunity"
                                  type="file"
                                  className="sr-only"
                                  onChange={upLoadedImgComPro}
                                />
                              </label>

                              <p className="">Upload Community Profile Image</p>
                            </div>
                          </div>
                        )}

                        {selectedImaComProfile && (
                          <div className="mt-10 flex flex-col">
                            <img
                              src={URL.createObjectURL(selectedImaComProfile)}
                              className="max-w-full max-h-56"
                              alt="Thumb"
                            />
                            <button
                              onClick={removeComImagePro}
                              className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 "
                            >
                              Remove This Image
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* button submit */}
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>

          <form action="#" method="POST" onSubmit={handleSubmit} noValidate>
            {/* up img cover */}
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Community image baner
                </label>
                <div className="block text-xs font-small text-gray-500">
                  Images must be .png or .jpg format
                </div>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {displayCombaner ? (
                      ""
                    ) : (
                      <div>
                        <HiOutlinePhotograph
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                        />

                        <div className=" text-sm text-gray-600">
                          <label
                            htmlFor="BanerCommunity"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="BanerCommunity"
                              name="BanerCommunity"
                              type="file"
                              className="sr-only"
                              onChange={upLoadedImgComCov}
                            />
                          </label>
                          <div className="">or Upload Banner Image</div>
                        </div>
                      </div>
                    )}

                    {selectedImgComBaner && (
                      <div className="mt-10 flex flex-col">
                        <img
                          src={URL.createObjectURL(selectedImgComBaner)}
                          className="max-w-full max-h-56"
                          alt="Thumb"
                        />
                        <button
                          onClick={removeImageComBaner}
                          className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 "
                        >
                          Remove This Image
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="block text-xl font-bold font-small text-gray-700">
              {" "}
              Rule Community
            </div>

            {editRule ? (
              <form onSubmit={handleEditFormSubmitRule}>
                <div className="grid grid-cols-4 gap-4">
                  <input
                    maxLength="100"
                    type="text"
                    name="editRule"
                    placeholder="edit rule"
                    value={currentRule.text}
                    onChange={handleEditInputRule}
                    className="col-span-3 outline-none pl-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full h-9  sm:text-sm border border-gray-300 rounded-md"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      update
                    </button>

                    <button
                      onClick={() => setEditRule(false)}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      cancel
                    </button>
                  </div>
                </div>
                <div className="block text-xs font-small text-gray-500">
                  100 Characters remaining
                </div>
              </form>
            ) : (
              <form onSubmit={handleFormRuleSubmit}>
                <div className="grid grid-cols-6 gap-4 ">
                  {" "}
                  <input
                    maxLength="100"
                    onChange={handleInputRuleChange}
                    value={rule}
                    type="text"
                    name="rules"
                    placeholder="Create a new rule"
                    className="col-span-5 outline-none pl-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full h-9  sm:text-sm border border-gray-300 rounded-md"
                  />
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Add
                  </button>
                </div>
                <div className="block text-xs font-small text-gray-500">
                  100 Characters remaining
                </div>
              </form>
            )}

            <ul className=" text-lg  text-gray-700 divide-y divide-gray-200 ">
              {rules.map((rule) => (
                <li key={rule.id} className="grid grid-cols-4 gap-4 my-5">
                  <div className="col-span-3">
                    <div className="flex ml-3">{rule.text}</div>
                  </div>

                  <div className="flex">
                    <button onClick={() => handleEditeRule(rule)}>
                      {""} <HiOutlinePencilAlt />
                    </button>
                    <button onClick={() => handleDeleteRule(rule.id)}>
                      {""} <HiOutlineTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* end list rule */}
        </div>
      </div>
    </div>
  );
}
