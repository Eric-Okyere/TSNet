import React from 'react'
import Logo from '../../assets/Logo.jpeg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareThreads } from "react-icons/fa6";


const Footer = () => {
  return (
    <div id="social">

    <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                  <a href="https://flowbite.com/" className="flex items-center justify-between mx-5">
                      <img src={Logo} className="h-8 rounded-full animate-spin-slow" alt="Logo" />
                      <span className="self-center md:text-2xl text-lg font-semibold whitespace-nowrap dark:text-white">The Skilled Network</span>
                  </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Us</h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                          <li className="mb-4">
                              <a href="https://flowbite.com/" className="hover:underline"> <FaFacebook color='blue' size={30}/></a>
                             
                          </li>
                          <li>
                              <a href="https://x.com/tsnet_official" className="hover:underline">
                              <FaXTwitter className='text-2xl' color="black"/>
                              </a>
                          </li>
                      </ul>
                  </div>
                  <div>
                    
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                          <li className="mb-2">
                        
                              <a href="https://www.facebook.com/profile.php?id=61558077694109" className="hover:underline ">  <FaYoutube color='red' size={24} /></a>
                          </li>
                          <li className="mb-2">
                              <a href="https://www.tiktok.com/@tsnet_offical/video/7383078354989108485"  className="hover:underline ">
                              <FaTiktok color='black' size={20}/>
                            </a>
                          </li>
                          <li className='mb-2'>
                              <a href="https://www.instagram.com/tsnet_official/" className="hover:underline"> <FaInstagramSquare color='#949400' size={26} /></a>
                             
                          </li>
                          <li className='mb-2'>
                              <a href="https://www.threads.com/@tsnet_official" className="hover:underline"> <FaSquareThreads color='black' size={26}/></a>
                             
                          </li>
                      </ul>
                  </div>    
                  <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                          <li className="mb-4">
                              <a href="#" className="hover:underline">Privacy Policy</a>
                          </li>
                          <li>
                              <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">Linkpii</a>. All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <span className="text-sm text-gray-500">Developed by Linkpii</span>
                
                <a href="https://wa.me/233209317581" className="text-green-500 hover:text-black dark:hover:text-white ms-5">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M380.9 97.1C339 55.2 283.1 32 224.8 32c-119.2 0-216 96.8-216 216 0 38.1 10 75.3 29.1 107.8L0 480l126.2-37.4c30.3 16.6 64.4 25.4 98.6 25.4h.1c119.2 0 216-96.8 216-216 0-58.3-23.2-114.2-65.1-156.9zM224.8 438.1c-27.2 0-54-7.3-77.4-21.1l-5.6-3.3-74.9 22.2 22.4-73-3.6-5.7C69.2 329.2 60.8 298.2 60.8 264c0-90.2 73.6-163.8 163.8-163.8 43.7 0 84.8 17 115.8 47.9 30.9 30.9 47.9 72 47.9 115.8 0 90.2-73.6 163.9-163.7 163.9zm94.6-123.3c-5.2-2.6-30.6-15.1-35.4-16.8-4.8-1.8-8.3-2.6-11.9 2.6-3.4 5.2-13.7 16.8-16.8 20.3-3.1 3.4-6.2 3.9-11.5 1.3-31.3-15.6-51.9-27.9-72.7-63.3-5.5-9.5 5.5-8.8 15.6-29.2 1.7-3.4.9-6.3-.4-8.9-1.3-2.6-11.9-28.7-16.3-39.3-4.3-10.3-8.7-8.9-11.9-9.1-3.1-.2-6.7-.2-10.2-.2s-9.5 1.3-14.4 6.3c-4.8 5.2-18.8 18.4-18.8 44.9 0 26.5 19.2 52.1 21.8 55.7 2.6 3.4 37.8 57.8 91.6 81 12.8 5.5 22.8 8.8 30.6 11.2 12.8 4.1 24.5 3.5 33.7 2.1 10.3-1.5 30.6-12.5 35-24.5 4.3-12 4.3-22.3 3-24.5-1.4-2.1-4.9-3.3-10.1-5.9z"/>
                    </svg>
                    <span className="sr-only">WhatsApp</span>
                    </a>
                
                  <a href="https://www.facebook.com/permalink.php/?story_fbid=480123637686313&id=100070660432401" className="text-blue-500 hover:text-black dark:hover:text-white ml-4">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                        </svg>
                      <span className="sr-only">Facebook page</span>
                  </a>
                 

                  {/* <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                    </svg>
                      <span className="sr-only">Twitter page</span>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                      </svg>
                      <span className="sr-only">GitHub account</span>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                    </svg>
                      <span className="sr-only">Dribbble account</span>
                  </a> */}
              </div>
          </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer