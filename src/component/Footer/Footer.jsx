import React, { Component } from "react";
// import Style from "../Home/Home.module.css"
// import migs from "../../img/img1.webp"
// import { NavLink } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="container">
            <div className="footer d-flex justify-content-evenly align-items-center py-2">
              <ul
                className=" d-flex social-media social-media--no-radius list--unstyled overflow-hidden"
                
              >
                <li className="social-media__item">
                  <a
                    href="https://www.facebook.com/Carinawear/"
                    target="_blank"
                    rel="noopener"
                    className="social-media__link"
                    aria-label="تابعنا على Facebook"
                  >
                    <svg
                      focusable="false"
                      width="9"
                      height="17"
                      className="icon icon--facebook   "
                      viewBox="0 0 9 17"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.486 16.2084L2.486 8.81845H0L0 5.93845L2.486 5.93845L2.486 3.81845C2.38483 2.79982 2.73793 1.78841 3.45107 1.05407C4.16421 0.319722 5.16485 -0.0628415 6.186 0.00844868C6.9284 0.00408689 7.67039 0.0441585 8.408 0.128449V2.69845L6.883 2.69845C6.4898 2.61523 6.08104 2.73438 5.79414 3.01585C5.50724 3.29732 5.3803 3.70373 5.456 4.09845L5.456 5.93845H8.308L7.936 8.81845H5.46L5.46 16.2084H2.486Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="social-media__item  social-media__item--twitter">
                  <a
                    href="https://twitter.com/carinawearegypt"
                    target="_blank"
                    rel="noopener"
                    className="social-media__link"
                    aria-label="تابعنا على Twitter"
                  >
                    <svg
                      focusable="false"
                      width="20"
                      height="16"
                      className="icon icon--twitter   "
                      viewBox="0 0 20 16"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.845 2.13398C14.0997 2.11363 14.7676 2.53229 15.4054 3.06445C15.9468 3.02216 16.6505 2.74528 17.065 2.55232C17.1993 2.48493 17.3337 2.41786 17.468 2.35046C17.2312 2.93602 16.9103 3.39474 16.417 3.74251C16.3074 3.81976 16.1987 3.92434 16.0613 3.97362C16.0613 3.97584 16.0613 3.97838 16.0613 3.98061C16.7643 3.97394 17.3441 3.6837 17.8947 3.52603C17.8947 3.52856 17.8947 3.5311 17.8947 3.53365C17.6055 3.95454 17.214 4.38147 16.7963 4.6876C16.6277 4.8103 16.4591 4.93301 16.2905 5.05571C16.2997 5.73696 16.2795 6.38704 16.1404 6.95989C15.3314 10.2888 13.1878 12.5491 9.7945 13.517C8.5761 13.8648 6.60702 14.0075 5.21102 13.6903C4.51872 13.5329 3.89334 13.3552 3.30644 13.1203C2.98052 12.9896 2.67854 12.8485 2.38972 12.6876C2.29496 12.6346 2.2001 12.5818 2.10522 12.5287C2.42018 12.5376 2.78846 12.6168 3.14052 12.5649C3.45896 12.5179 3.77128 12.53 4.06514 12.4712C4.79794 12.324 5.4486 12.1294 6.00916 11.829C6.2809 11.6834 6.69324 11.5124 6.88634 11.3026C6.52248 11.3083 6.19256 11.2311 5.9223 11.144C4.87436 10.8051 4.26436 10.1824 3.86752 9.2468C4.1851 9.27827 5.09982 9.35394 5.31368 9.18894C4.91398 9.16891 4.52956 8.95688 4.25478 8.7992C3.41184 8.31634 2.72438 7.50634 2.72954 6.26021C2.84022 6.30821 2.9509 6.35653 3.06148 6.40453C3.27324 6.48622 3.48848 6.52978 3.74112 6.57778C3.8478 6.59781 4.06114 6.65534 4.18362 6.6137C4.17836 6.6137 4.17308 6.6137 4.16782 6.6137C4.00476 6.43982 3.73902 6.32411 3.57512 6.1375C3.03438 5.52206 2.52758 4.57507 2.84812 3.44686C2.9294 3.16077 3.05842 2.90805 3.19586 2.67502C3.20114 2.67757 3.2064 2.67979 3.21168 2.68234C3.2746 2.80282 3.415 2.89152 3.50408 2.99229C3.78024 3.30573 4.1209 3.5877 4.46812 3.83629C5.65108 4.68347 6.71642 5.20386 8.42738 5.58946C8.86134 5.68706 9.36308 5.76176 9.88146 5.76238C9.73578 5.37424 9.78258 4.7461 9.89726 4.37035C10.1856 3.42557 10.8119 2.74402 11.7307 2.37907C11.9504 2.29197 12.1941 2.22838 12.4498 2.17722C12.5815 2.16291 12.7133 2.14861 12.845 2.13398Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="social-media__item social-media__item--instagram">
                  <a
                    href="https://www.instagram.com/carina.wear"
                    target="_blank"
                    rel="noopener"
                    className="social-media__link"
                    aria-label="تابعنا على Instagram"
                  >
                    <svg
                      focusable="false"
                      width="16"
                      height="16"
                      className="icon icon--instagram   "
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0C5.827 0 5.555.01 4.702.048 3.85.087 3.269.222 2.76.42a3.921 3.921 0 00-1.417.923c-.445.444-.719.89-.923 1.417-.198.509-.333 1.09-.372 1.942C.01 5.555 0 5.827 0 8s.01 2.445.048 3.298c.039.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.719 1.417.923.509.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.445-.01 3.298-.048c.852-.039 1.433-.174 1.942-.372a3.922 3.922 0 001.417-.923c.445-.444.719-.89.923-1.417.198-.509.333-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.298c-.039-.852-.174-1.433-.372-1.942a3.922 3.922 0 00-.923-1.417A3.921 3.921 0 0013.24.42c-.509-.198-1.09-.333-1.942-.372C10.445.01 10.173 0 8 0zm0 1.441c2.136 0 2.39.009 3.233.047.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.009 2.39-.047 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.479 2.479 0 01-.92-.598 2.478 2.478 0 01-.598-.92c-.11-.282-.24-.705-.276-1.485-.038-.844-.047-1.097-.047-3.233s.009-2.39.047-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.844-.038 1.097-.047 3.233-.047zm0 9.226a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm0-6.775a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm5.23-.162a.96.96 0 11-1.92 0 .96.96 0 011.92 0z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="social-media__item social-media__item--youtube">
                  <a
                    href="https://www.youtube.com/channel/UCtuLJPmWr1NslpnX06XasxQ"
                    target="_blank"
                    rel="noopener"
                    className="social-media__link"
                    aria-label="تابعنا على YouTube"
                  >
                    <svg
                      fill="none"
                      focusable="false"
                      width="18"
                      height="13"
                      className="icon icon--youtube   "
                      viewBox="0 0 18 13"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.0325 0.369454C16.807 0.572743 17.4168 1.17173 17.6238 1.9324C18 3.31101 18 6.1875 18 6.1875C18 6.1875 18 9.06389 17.6238 10.4427C17.4168 11.2033 16.807 11.8023 16.0325 12.0056C14.6288 12.375 9 12.375 9 12.375C9 12.375 3.37122 12.375 1.96752 12.0056C1.19311 11.8023 0.583159 11.2033 0.376159 10.4427C0 9.06389 0 6.1875 0 6.1875C0 6.1875 0 3.31101 0.376159 1.9324C0.583159 1.17173 1.19311 0.572743 1.96752 0.369454C3.37122 0 9 0 9 0C9 0 14.6288 0 16.0325 0.369454ZM11.8636 6.1876L7.1591 8.79913V3.57588L11.8636 6.1876Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="social-media__item social-media__item--tiktok">
                  <a
                    href="https://www.tiktok.com/@carina.wear"
                    target="_blank"
                    rel="noopener"
                    className="social-media__link"
                    aria-label="تابعنا على TikTok"
                  >
                    <svg
                      fill="none"
                      focusable="false"
                      width="14"
                      height="16"
                      className="icon icon--tiktok   "
                      viewBox="0 0 14 16"
                    >
                      <path
                        d="M13.6893 6.47331C13.5586 6.48602 13.4273 6.49268 13.296 6.49327C11.8552 6.49347 10.5114 5.76723 9.72211 4.56182V11.1389C9.72211 13.8236 7.54571 16 4.86099 16C2.17627 16 -0.00012207 13.8236 -0.00012207 11.1389C-0.00012207 8.45417 2.17627 6.27777 4.86099 6.27777C4.96247 6.27777 5.06166 6.28689 5.16143 6.29317V8.68866C5.06166 8.67669 4.96361 8.65845 4.86099 8.65845C3.49077 8.65845 2.37998 9.76923 2.37998 11.1395C2.37998 12.5097 3.49077 13.6205 4.86099 13.6205C6.23148 13.6205 7.44177 12.5407 7.44177 11.1702L7.46571 0H9.75745C9.97355 2.05512 11.6307 3.66035 13.6916 3.81102V6.47331"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="col-md-2">
                <form className="contact-all">
                  <div className="mb-3">
                    {/* <label htmlFor="exampleInputEmail1" className="form-label">
                    your Name
                  </label> */}
                    <input
                      type="text"
                      className="form-control  "
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="your Name"
                    />
                  </div>
                  <div className="mb-3">
                    {/* <label htmlFor="exampleInputPassword1" className="form-label">
                    Email
                  </label> */}
                    <input
                      type="email"
                      className="form-control  "
                      id="exampleInputPassword1"
                      placeholder="Email@example.com"
                    />
                    {/* <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div> */}
                  </div>
                  <div className="mb-3">
                    {/* <label htmlFor="exampleInputPassword3" className="form-label">
                    Phone
                  </label> */}
                    <input
                      type="number"
                      className="form-control "
                      id="exampleInputPassword3"
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary w-50">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Footer;
