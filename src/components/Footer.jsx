import { useState } from "react";
import "./Footer.css";
export default function Footer() {
  const [displayPlatform, setDisplayPlatform] = useState(false);
  const [displaySupport, setDisplaySupport] = useState(false);
  const [displayFeatures, setDisplayFeatures] = useState(false);
  const [displayCompare, setDisplayCompare] = useState(false);
  const [displayResources, setDisplayResources] = useState(false);
  const [displayXodia, setDisplayXodia] = useState(false);
  const [displaySocial, setDisplaySocial] = useState(false);

  return (
    <div className="footer container">
      <div className="footer-block">
        <button
          className="btn-footer"
          onClick={() => setDisplayPlatform(!displayPlatform)}
        >
          Platform
          <svg
            width={46}
            height={46}
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <p className="footer-title">Platform</p>
        <ul
          className="footer-links"
          style={{ display: displayPlatform ? "flex" : "none" }}
        >
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Sign up free</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Website builder</a>
          </li>
          <li>
            <a href="#">Digital Products</a>
          </li>
          <li>
            <a href="#">Email marketing</a>
          </li>
        </ul>
      </div>

      <div className="footer-block">
        <button
          className="btn-footer"
          onClick={() => setDisplaySupport(!displaySupport)}
        >
          Support
          <svg
            width={46}
            height={46}
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <p className="footer-title">Support</p>
        <ul
          className="footer-links"
          style={{ display: displaySupport ? "flex" : "none" }}
        >
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Help center</a>
          </li>
          <li>
            <a href="#">Hire a Xodia pro</a>
          </li>
          <li>
            <a href="#">Creator community</a>
          </li>
          <li>
            <a href="#">Xodia 101</a>
          </li>
        </ul>
      </div>

      <div className="footer-block">
        <button
          className="btn-footer"
          onClick={() => setDisplayFeatures(!displayFeatures)}
        >
          Features
          <svg
            width={46}
            height={46}
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <p className="footer-title">Features</p>
        <ul
          className="footer-links"
          style={{ display: displayFeatures ? "flex" : "none" }}
        >
          <li>
            <a href="#">Online Courses</a>
          </li>
          <li>
            <a href="#">Downloads</a>
          </li>
          <li>
            <a href="#">Webinars</a>
          </li>
          <li>
            <a href="#">Coaching</a>
          </li>
          <li>
            <a href="#">All features</a>
          </li>
        </ul>
      </div>

      <div className="footer-block">
        <button
          className="btn-footer"
          onClick={() => setDisplayCompare(!displayCompare)}
        >
          Compare
          <svg
            width={46}
            height={46}
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <p className="footer-title">Compare</p>
        <ul
          className="footer-links"
          style={{ display: displayCompare ? "flex" : "none" }}
        >
          <li>
            <a href="#">Kajabi</a>
          </li>
          <li>
            <a href="#">Teachable</a>
          </li>
          <li>
            <a href="#">Thinkific</a>
          </li>
          <li>
            <a href="#">Patreon</a>
          </li>
          <li>
            <a href="#">Gumroad</a>
          </li>
          <li>
            <a href="#">Xodia alternatives</a>
          </li>
        </ul>
      </div>

      <div className="footer-block">
        <button
          className="btn-footer"
          onClick={() => setDisplayResources(!displayResources)}
        >
          Resources
          <svg
            width={46}
            height={46}
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <p className="footer-title">Resources</p>
        <ul
          className="footer-links"
          style={{ display: displayResources ? "flex" : "none" }}
        >
          <li>
            <a href="#">Examples</a>
          </li>
          <li>
            <a href="#">Demo</a>
          </li>
          <li>
            <a href="#">Creator stories</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Free tools</a>
          </li>
          <li>
            <a href="#">All resources</a>
          </li>
        </ul>
      </div>

      <div className="footer-block">
        <button
          className="btn-footer"
          onClick={() => setDisplayXodia(!displayXodia)}
        >
          Xodia
          <svg
            width={46}
            height={46}
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <p className="footer-title">Xodia</p>
        <ul
          className="footer-links"
          style={{ display: displayXodia ? "flex" : "none" }}
        >
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Branding</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
          <li>
            <a href="#">Refer-a-creator</a>
          </li>
          <li>
            <a href="#">Affiliates</a>
          </li>
        </ul>
      </div>

      <div className="footer-block">
        <button
          className="btn-footer"
          onClick={() => setDisplaySocial(!displaySocial)}
        >
          Social
          <svg
            width={46}
            height={46}
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <p className="footer-title">Social</p>
        <ul
          className="footer-links"
          style={{ display: displaySocial ? "flex" : "none" }}
        >
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Youtube</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
