import { useState } from "react";
import useEditProfile from "../services/useEditProfile";
import validate from "../services/EditProfileValidate";

export default function Editprofile() {
  const [selectedImaProfile, setSelectedImgProfile] = useState();
  const [selectedImaCover, setSelectedImgCover] = useState();

  const [displayPro, setdisplayPro] = useState("visible");
  const [displayCov, setdisplayCov] = useState("visible");

  const displayHandlerPro = () => {
    setdisplayPro("invisible");
  };
  const displayHandlerCov = () => {
    setdisplayCov("invisible");
  };

  // This function will be triggered when the file field change
  const imageProfileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImgProfile(e.target.files[0]);
    }
  };
  const imageCoverChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImgCover(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeImagePro = () => {
    setSelectedImgProfile();
    setdisplayPro("visible");
  };
  const removeImageCov = () => {
    setSelectedImgCover();
    setdisplayCov("visible");
  };

  const upLoadedImgPro = (e) => {
    imageProfileChange(e);
    displayHandlerPro();
  };
  const upLoadedImgCov = (cover) => {
    imageCoverChange(cover);
    displayHandlerCov();
  };

  const { values, errors, handleChange, handleSubmit } = useEditProfile(
    test,
    validate
  );

  function test() {
    console.log("No errors, submit callback called!");
  }
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST" onSubmit={handleSubmit} noValidate>
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6"></div>

              {/*  Display name*/}
              <div className="col-span-6 sm:col-span-4">
                <div className="block text-xl font-bold font-small text-gray-700">
                  {" "}
                  Display name (optional)
                </div>
                <label
                  htmlFor="display-name"
                  className="block text-xs font-small text-gray-500"
                >
                  Set a display name. This does not change your username.
                </label>
                <input
                  value={values.displayname || ""}
                  maxLength="20"
                  required
                  type="text"
                  name="displayname"
                  id="displayname"
                  autoComplete="displayname"
                  placeholder="Display name"
                  onChange={handleChange}
                  className="outline-none pl-2 mt-1  focus:ring-blue-500 focus:border-blue-500 block w-full h-9 shadow-sm sm:text-sm border-gray-300 rounded-md "
                />
                {errors.displayname && (
                  <p className="block text-xs font-small text-red-500">
                    {errors.displayname}
                  </p>
                )}
                <div className="block text-xs font-small text-gray-500">
                  {" "}
                  30 Characters remaining
                </div>
              </div>
              {/* firstname lastname */}

              <div className="col-span-6 sm:col-span-4  ">
                <label
                  htmlFor="firstname"
                  className="block text-xl font-bold font-small text-gray-700"
                >
                  {" "}
                  Firstname
                </label>

                <input
                  value={values.firstname || ""}
                  maxLength="150"
                  required
                  type="text"
                  name="firstname"
                  id="firstname"
                  autoComplete="firstname"
                  placeholder="firstname"
                  onChange={handleChange}
                  className="outline-none pl-2 mt-1  focus:ring-blue-500 focus:border-blue-500 block w-full h-9 shadow-sm sm:text-sm border-gray-300 rounded-md "
                />
                {errors.firstname && (
                  <p className="block text-xs font-small text-red-500">
                    {errors.firstname}
                  </p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-4 ">
                <label
                  htmlFor="lastname"
                  className="block text-xl font-bold font-small text-gray-700"
                >
                  {" "}
                  Lastname
                </label>

                <input
                  value={values.lastname || ""}
                  maxLength="150"
                  required
                  type="text"
                  name="lastname"
                  id="lastname"
                  autoComplete="lastname"
                  placeholder="lastname"
                  onChange={handleChange}
                  className="outline-none pl-2 mt-1  focus:ring-blue-500 focus:border-blue-500 block w-full h-9 shadow-sm sm:text-sm border-gray-300 rounded-md "
                />
                {errors.firstname && (
                  <p className="block text-xs font-small text-red-500">
                    {errors.lastname}
                  </p>
                )}
              </div>

              {/* About (optional) */}
              <div>
                <div className="block text-xl font-bold font-small text-gray-700">
                  {" "}
                  About (optional)
                </div>
                <label htmlFor="about" className="block text-xs  text-gray-500">
                  A brief description of yourself shown on your profile.
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="outline-none pl-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full h-20  sm:text-sm border border-gray-300 rounded-md"
                    placeholder="About(optional)"
                    defaultValue={""}
                  />
                </div>

                <div className="block text-xs font-small text-gray-500">
                  200 Characters remaining
                </div>
              </div>

              {/* up img */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Avatar and banner image
                </label>
                <div className="block text-xs font-small text-gray-500">
                  Images must be .png or .jpg format
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {/* up img Profile */}
                  <div>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <div>
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className=" text-sm text-gray-600">
                            <label
                              htmlFor="Pro-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="Pro-upload"
                                name="Pro-upload"
                                type="file"
                                className="sr-only"
                                onChange={upLoadedImgPro}
                              />
                            </label>

                            <p className={displayPro}>Upload Avatar Image</p>
                          </div>
                        </div>
                        {selectedImaProfile && (
                          <div className="mt-10 flex flex-col">
                            <img
                              src={URL.createObjectURL(selectedImaProfile)}
                              className="max-w-full max-h-56"
                              alt="Thumb"
                            />
                            <button
                              onClick={removeImagePro}
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 "
                            >
                              Remove This Image
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* up img cover */}
                  <div className="col-span-2">
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className=" text-sm text-gray-600">
                          <label
                            htmlFor="Cov-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="Cov-upload"
                              name="Cov-upload"
                              type="file"
                              className="sr-only"
                              onChange={upLoadedImgCov}
                            />
                          </label>
                          <div className={displayCov}>
                            or Upload Avatar Image
                          </div>
                        </div>
                        {selectedImaCover && (
                          <div className="mt-10 flex flex-col">
                            <img
                              src={URL.createObjectURL(selectedImaCover)}
                              className="max-w-full max-h-56"
                              alt="Thumb"
                            />
                            <button
                              onClick={removeImageCov}
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 "
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
          </div>
        </form>
      </div>
    </div>
  );
}
