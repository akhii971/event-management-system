import React from 'react'

function ContactSection() {
  return (
    
    
    <div className="w-full max-w-5xl mt-20 text-center" id='contact'>
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 drop-shadow-lg mb-6">
        Contact Us
      </h2>

      <div
        className="bg-black/40 backdrop-blur-xl border border-purple-500/30
                   rounded-3xl p-8 mx-auto shadow-lg 
                   hover:shadow-purple-500/50 transition-all duration-500
                   text-white space-y-4"
      >
        <p className="text-lg font-semibold">
          <span className="text-purple-400">ABCD EVENTS</span>
        </p>

        <p className="text-md">
          Email:
          <a
            href="mailto:yourmail@example.com"
            className="text-purple-400 hover:text-purple-300 ml-1 underline"
          >
            yourmail@example.com
          </a>
        </p>
         <p className="text-md">
          Phone:
          <a
            href="mailto:yourmail@example.com"
            className="text-purple-400 hover:text-purple-300 ml-1 underline"
          >
            +91 6524244242
          </a>
        </p>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mt-6 text-3xl">
         

         

          <a
            href="https://instagram.com/your-instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-all duration-300"
          >
            <i className="fa-brands fa-instagram" />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-all duration-300"
          >
            <i className="fa-brands fa-facebook" />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-all duration-300"
          >
            <i className="fa-brands fa-x-twitter" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default ContactSection
