import React from 'react'

function EventTeam() {
  return (
    <div className="w-full max-w-6xl mt-20 text-center" id='About'>
          <h2 className="text-2xl sm:text-4xl font-bold text-purple-300 drop-shadow-lg mb-10">
            Our Event Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {/* Team Member 1 */}
            <div
              className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-6 w-72
                         hover:shadow-purple-500/60 transition-all duration-500 text-white"
            >
              <img
                src="https://www.prophoto.app/blog/photo-entrepreneur/photo-entrepreneur-3.webp"
                alt="Team"
                className="w-28 h-28 rounded-full mx-auto border-2 border-purple-500 shadow-md"
              />
              <h3 className="mt-4 font-bold text-xl">mr JOhn</h3>
              <p className="text-purple-300 text-sm">Team Head</p>
              <div className="flex justify-center gap-4 text-2xl mt-4">
                <i className="fa-brands fa-whatsapp hover:text-purple-300 cursor-pointer" />
                <i className="fa-brands fa-facebook hover:text-purple-300 cursor-pointer" />
                <i className="fa-brands fa-instagram hover:text-purple-300 cursor-pointer" />
              </div>
            </div>

            {/* Team Member 2 */}
            <div
              className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-6 w-72
                         hover:shadow-purple-500/60 transition-all duration-500 text-white"
            >
              <img
                src="https://templates-flatlogic.herokuapp.com/flatlogic-one/html5/demo/img/people/a5.jpg"
                alt="Team"
                className="w-28 h-28 rounded-full mx-auto border-2 border-purple-500 shadow-md"
              />
              <h3 className="mt-4 font-bold text-xl">Harish</h3>
              <p className="text-purple-300 text-sm">Founder </p>
              <div className="flex justify-center gap-4 text-2xl mt-4">
                <i className="fa-brands fa-whatsapp hover:text-purple-300 cursor-pointer" />
                <i className="fa-brands fa-facebook hover:text-purple-300 cursor-pointer" />
                <i className="fa-brands fa-instagram hover:text-purple-300 cursor-pointer" />
              </div>
            </div>

            {/* Team Member 3 */}
            <div
              className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-6 w-72
                         hover:shadow-purple-500/60 transition-all duration-500 text-white"
            >
              <img
                src="https://cecyteo.edu.mx/Nova/App_themes/Nova2016/assets/pages/media/profile/profile_user.jpg"
                alt="Team"
                className="w-28 h-28 rounded-full mx-auto border-2 border-purple-500 shadow-md"
              />
              <h3 className="mt-4 font-bold text-xl">Sanjay</h3>
              <p className="text-purple-300 text-sm">Event Manager</p>
             <div className="flex justify-center gap-4 text-2xl mt-4">
                <i className="fa-brands fa-whatsapp hover:text-purple-300 cursor-pointer" />
                <i className="fa-brands fa-facebook hover:text-purple-300 cursor-pointer" />
                <i className="fa-brands fa-instagram hover:text-purple-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
  )
}

export default EventTeam