import axios from "../../config/axios";
import { useContext, useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { UserContext } from "../../context/userContext";
import { Toast2 } from "../../services/alert";
export default function Editprofile() {
  const { user, setUser, getNewToken } = useContext(UserContext);
  const [selectedImaProfile, setSelectedImgProfile] = useState();
  const [selectedImaCover, setSelectedImgCover] = useState();
  const [username, setUsername] = useState(user.username);
  const [description, setDescription] = useState(user.description);

  const [displayPro, setdisplayPro] = useState(false);
  const [displayCov, setdisplayCov] = useState(false);

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const displayHandlerPro = () => {
    setdisplayPro(true);
  };
  const displayHandlerCov = () => {
    setdisplayCov(true);
  };

  // This function will be triggered when the file field change
  const imageProfileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImgProfile(e.target.files[0]);
      // console.log(e.target.files[0]);
    }
  };
  const imageCoverChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImgCover(e.target.files[0]);
      // console.log(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeImagePro = () => {
    setSelectedImgProfile();
    setdisplayPro(false);
  };
  const removeImageCov = () => {
    setSelectedImgCover();
    setdisplayCov(false);
  };

  const upLoadedImgPro = (e) => {
    imageProfileChange(e);
    displayHandlerPro();
  };
  const upLoadedImgCov = (cover) => {
    imageCoverChange(cover);
    displayHandlerCov();
  };

  const handleSubmitProfile = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      if (selectedImaProfile) {
        formData.append("profileimage", selectedImaProfile);
        formData.append("description", description);

        const res = await axios.put(`/users/updateProfile`, formData);
        // await axios.put(`/users/updateProfile`, formData);
        Toast2.fire({
          icon: "success",
          title: `${res.data.message}`,
        });
        setUser((cur) => ({
          ...cur,
          description: description,
          profileUrl: URL.createObjectURL(selectedImaProfile),
        }));
        getNewToken();
      } else {
        formData.append("description", description);
        const res = await axios.put(`/users/updateProfile`, formData);
        // await axios.put(`/users/updateProfile`, formData);
        Toast2.fire({
          icon: "success",
          title: `${res.data.message}`,
        });
        setUser((cur) => ({
          ...cur,
          description: description,
        }));
        getNewToken();
      }
    } catch (err) {
      console.dir(err);
    }
  };
  const handleSubmitBanner = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      if (selectedImaCover) {
        formData.append("bannerimage", selectedImaCover);
        const res = await axios.put(`/users/updateBanner`, formData);
        // await axios.put(`/users/updateBanner`, formData);
        Toast2.fire({
          icon: "success",
          title: `${res.data.message}`,
        });
        setUser((cur) => ({
          ...cur,
          bannerUrl: URL.createObjectURL(selectedImaCover),
        }));
        getNewToken();
      } else {
        Toast2.fire({
          icon: "warning",
          title: `No content to upload`,
        });
      }
    } catch (err) {
      console.dir(err);
    }
  };
  return (
    <div className="w-full mt-3">
      <div className="mt-5 md:mt-0 md:col-span-2">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <form onSubmit={handleSubmitProfile}>
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6"></div>

              {/*  Display name*/}
              <div className="col-span-6 sm:col-span-4">
                <div className="block text-xl font-bold font-small text-gray-700">
                  Username
                </div>
                <label
                  htmlFor="display-name"
                  className="block text-xs font-small text-gray-500"
                >
                  Your username can not changed.
                </label>
                <input
                  value={username}
                  maxLength="30"
                  type="text"
                  disabled
                  name="username"
                  id="display-name"
                  placeholder={user.username}
                  className="outline-none pl-2 mt-1  focus:ring-blue-500 focus:border-blue-500 block w-full h-9 shadow-sm sm:text-sm border-gray-300 rounded-md "
                />

                {/* <div className="block text-xs font-small text-gray-500">
                  {`${30 - username.length}`}/30 Characters remaining
                </div> */}
              </div>

              {/* About (optional) */}
              <div>
                <div className="block text-xl font-bold font-small text-gray-700">
                  About
                </div>
                <label htmlFor="about" className="block text-xs  text-gray-500">
                  A brief description of yourself shown on your profile.
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="description"
                    rows={3}
                    className="outline-none pl-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full h-20  sm:text-sm border border-gray-300 rounded-md"
                    placeholder="About(optional)"
                    value={description}
                    onChange={handleChangeDescription}
                  />
                </div>

                <div className="block text-xs font-small text-gray-500">
                  {`${200 - description?.length ? description?.length : 0}`}/200
                  Characters remaining
                </div>
              </div>

              {/* up img */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Avatar image
                </label>
                <div className="block text-xs font-small text-gray-500">
                  Images must be .png or .jpg format
                </div>
                <div className="">
                  {/* up img Profile */}
                  <div>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        {displayPro ? (
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
                                htmlFor="Pro-upload"
                                className={` relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500`}
                              >
                                <span className="">Upload a file</span>
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
                        )}

                        {selectedImaProfile && (
                          <div className="mt-10 flex flex-col">
                            <img
                              src={URL.createObjectURL(selectedImaProfile)}
                              className="max-w-full max-h-56"
                              alt="Thumb"
                            />
                            <button
                              onClick={removeImagePro}
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

          {/* up img cover */}
          <form onSubmit={handleSubmitBanner}>
            {/* up img cover */}
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Banner image
                </label>
                <div className="block text-xs font-small text-gray-500">
                  Images must be .png or .jpg format
                </div>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {displayCov ? (
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
                            or Upload Banner Image
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedImaCover && (
                      <div className="mt-10 flex flex-col">
                        <img
                          src={URL.createObjectURL(selectedImaCover)}
                          className="max-w-full max-h-56"
                          alt="Thumb"
                        />
                        <button
                          onClick={removeImageCov}
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
        </div>
      </div>
    </div>
  );
}
