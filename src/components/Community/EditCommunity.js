import axios from "../../config/axios";
import React, { useState, useEffect } from "react";
import { HiOutlinePhotograph, HiOutlineX } from "react-icons/hi";
import { useParams, useHistory } from "react-router-dom";
import RuleComponent from "./RuleComponent";
import { Toast2 } from "../../services/alert";

export default function EditCommunity() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`communities/rules/${id}`);
        setRuleLists(res.data.rules);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchData();
  }, []);
  const history = useHistory();
  const { id, name } = useParams(); // communityId , community name
  const [ruleLists, setRuleLists] = useState([]);
  const [descriptions, setDescriptions] = useState("");
  const [profileUrl, setProfileUrl] = useState(null);
  const [bannerUrl, setBannerUrl] = useState(null);
  const [showProfile, setShowProfile] = useState(null);
  const [showBanner, setShowBanner] = useState(null);
  const [toggleAddRule, setToggleAddRule] = useState(false);
  const [rule, setRule] = useState("");
  const [error, setError] = useState("");

  const handleChangeDescription = e => {
    setDescriptions(e.target.value);
  };
  const handleChangeProfile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setProfileUrl(null);
      return;
    }
    if (e.target.files) {
      const files = URL.createObjectURL(e.target.files[0]);
      setShowProfile(files);
    }
    URL.revokeObjectURL(e.target.files[0]);
    setProfileUrl(e.target.files[0]);
  };

  const handleRemoveProfileImage = () => {
    setProfileUrl(null);
    setShowProfile(null);
  };
  const handleSumbitObjAbout = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (profileUrl) {
        formData.append("profileimage", profileUrl);
        formData.append("descriptions", descriptions);
      } else {
        formData.append("descriptions", descriptions);
      }

      const res = await axios.put(`/communities/profile/${id}`, formData);
      Toast2.fire({
        icon: "success",
        title: `Profile Updated`,
      });
      // history.push(`/community/${name}/${id}`);
    } catch (err) {
      console.dir(err);
    }
  };

  const handleChangeBanner = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setBannerUrl(null);
      return;
    }
    if (e.target.files) {
      const files = URL.createObjectURL(e.target.files[0]);
      setShowBanner(files);
    }
    URL.revokeObjectURL(e.target.files[0]);
    setBannerUrl(e.target.files[0]);
  };
  const handleRemoveBannerImage = () => {
    setBannerUrl(null);
    setShowBanner(null);
  };
  const handleSubmitBanner = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (bannerUrl && showBanner !== null) {
        formData.append("bannerimage", bannerUrl);
        const res = await axios.put(`/communities/banner/${id}`, formData);
        Toast2.fire({
          icon: "success",
          title: `Bannner Updated`,
        });
        history.push(`/community/${name}/${id}`);
      } else {
        Toast2.fire({
          icon: "error",
          title: "Fail Update",
        });
      }
    } catch (err) {
      console.dir(err);
    }
  };

  const handleChangeRules = e => {
    setError("");
    if (e.target.value === "") {
      setError("Rule is required");
    }
    setRule(e.target.value);
  };

  const handleAddNewRule = async e => {
    e.preventDefault();
    try {
      if (rule === "") {
        setError("Rule is required");
      }
      const res = await axios.post(`/communities/rules/${id}`, { rule });
      console.log(res.data);
      setRule("");
      setRuleLists(cur => [...cur, res.data.rule]);
    } catch (err) {
      console.dir(err);
    }
  };

  const deleteRuleList = async id => {
    console.log(id);
    const newRuleLists = ruleLists.filter(item => item.id !== id);
    setRuleLists(newRuleLists);
    await axios.delete(`/communities/${id}`);
  };
  const editRuleList = async (id, newRule) => {
    console.log(id);
    console.log(newRule);
    const idx = ruleLists.findIndex(item => item.id === id);
    const arrRule = [...ruleLists];
    arrRule[idx].ruleDetail = newRule;
    setRuleLists(arrRule);
  };
  return (
    <div className="w-full mt-3">
      <div className="mt-5 md:mt-0 md:col-span-2">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          {/* Profile */}
          <form onSubmit={handleSumbitObjAbout}>
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6"></div>

              <div>
                <div className="block text-xl font-bold font-small text-gray-700">Community description</div>
                <label className="block text-xs  text-gray-500">
                  A brief description of yourself shown on your Community.
                </label>
                <div className="mt-1">
                  <textarea
                    name="descriptions"
                    rows={3}
                    className="outline-none pl-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full h-20  sm:text-sm border border-gray-300 rounded-md"
                    onChange={handleChangeDescription}
                    value={descriptions}
                  />
                </div>

                <div className="block text-xs font-small text-gray-500">
                  {`${500 - descriptions.length}`}/500 Characters remaining
                </div>
              </div>

              {/* up img */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Community image profile</label>
                <div className="block text-xs font-small text-gray-500">Images must be .png or .jpg format</div>
                <div className="">
                  {/* up img Profile */}
                  <div>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        {!showProfile && (
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
                                  name="profileUrl"
                                  type="file"
                                  className="sr-only"
                                  onChange={handleChangeProfile}
                                />
                              </label>

                              <p className="">Upload Community Profile Image</p>
                            </div>
                          </div>
                        )}
                        <div className="mt-10 flex flex-col">
                          {showProfile && (
                            <>
                              <img src={showProfile} className="max-w-full max-h-56" alt="Thumb" />

                              <button
                                type="button"
                                onClick={handleRemoveProfileImage}
                                className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 "
                              >
                                Remove This Image
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* button submit */}
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              {(descriptions || showProfile) && (
                <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Submit
                </button>
              )}
            </div>
          </form>
          {/* Banner */}
          <form onSubmit={handleSubmitBanner}>
            {/* up img cover */}
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Community banner image</label>
                <div className="block text-xs font-small text-gray-500">Images must be .png or .jpg format</div>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {!showBanner && (
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
                              onChange={handleChangeBanner}
                            />
                          </label>
                          <div className="">or Upload Banner Image</div>
                        </div>
                      </div>
                    )}
                    <div className="mt-10 flex flex-col">
                      {showBanner && (
                        <>
                          <img src={showBanner} className="max-w-full max-h-56" alt="Thumb" />
                          <button
                            type="button"
                            onClick={handleRemoveBannerImage}
                            className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 "
                          >
                            Remove This Image
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              {showBanner && (
                <button
                  className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 `}
                >
                  Submit
                </button>
              )}
            </div>

            {/* Rule Form */}
          </form>
          {/* Rule */}
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="flex justify-between">
              <div className="block text-xl font-bold font-small text-gray-700">Rule Community</div>
              {!toggleAddRule ? (
                <button
                  onClick={() => {
                    setError("");
                    setToggleAddRule(cur => !cur);
                  }}
                  className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Rule
                </button>
              ) : (
                <div onClick={() => setToggleAddRule(cur => !cur)}>
                  <HiOutlineX size="24px" />
                </div>
              )}
            </div>
            {toggleAddRule && (
              <form onSubmit={handleAddNewRule}>
                <div className="grid grid-cols-6 gap-4 ">
                  <input
                    maxLength="100"
                    type="text"
                    name="rule"
                    value={rule}
                    onChange={handleChangeRules}
                    placeholder="Add new rule"
                    className="col-span-5 outline-none pl-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full h-9  sm:text-sm border border-gray-300 rounded-md"
                  />
                  <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Add
                  </button>
                </div>
                <div className="flex justify-between">
                  {error && <p className="text-red-600 italic text-xs">{error}</p>}
                  <div className="block text-xs font-small text-gray-500 mr-28">
                    {`${100 - rule.length}`}/100 Characters remaining
                  </div>
                </div>
              </form>
            )}

            <ul className=" text-lg  text-gray-700 divide-y divide-gray-200 ">
              {ruleLists.map((item, idx) => (
                <RuleComponent
                  key={idx}
                  item={item}
                  idx={idx}
                  deleteRuleList={deleteRuleList}
                  editRuleList={editRuleList}
                />
              ))}
            </ul>
          </div>
          {/* end list rule */}
        </div>
      </div>
    </div>
  );
}
