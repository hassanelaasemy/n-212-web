import { COLORS } from "../../../constant/theme";

export default function UserProfile() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-white rounded shadow overflow-hidden">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 border-r border-gray-200">
            <div className="flex flex-col p-4 space-y-2">
              <a
                className="block p-3 bg-blue-100 font-bold rounded"
                href="#account-general"
              >
                General
              </a>
              <a
                className="block p-3 hover:bg-gray-100"
                href="#account-change-password"
              >
                Change password
              </a>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <div id="account-general" className="p-4">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                  className="w-20 h-auto rounded"
                />
                <div>
                  <label
                    className="inline-block  text-white px-2 py-1 rounded cursor-pointer"
                    style={{
                      backgroundColor: COLORS.primarygreen,
                    }}
                  >
                    Upload new photo
                    <input type="file" className="hidden" />
                  </label>
                  <p className="text-sm text-gray-500 mt-1">
                    Allowed JPG, GIF or PNG. Max size of 800K
                  </p>
                </div>
              </div>
              <hr className="border-t border-gray-200 mb-4" />
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2 mt-1"
                    defaultValue="nmaxwell"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2 mt-1"
                    defaultValue="Nelle Maxwell"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">E-mail</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2 mt-1"
                    defaultValue="nmaxwell@mail.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Company</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2 mt-1"
                    defaultValue="Company Ltd."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mt-5">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Save changes
        </button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-2">
          Cancel
        </button>
      </div>
    </div>
  );
}
