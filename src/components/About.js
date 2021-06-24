import React from "react";
import "./About.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import WorkIcon from "@material-ui/icons/Work";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BusinessIcon from "@material-ui/icons/Business";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import LanguageIcon from "@material-ui/icons/Language";
import StarsIcon from "@material-ui/icons/Stars";
import AlbumIcon from "@material-ui/icons/Album";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

function About() {
  return (
    <div className="container">
      <h5 className="about-text">About Me</h5>
      <div className="card-panel">
        <div className="text-box">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className="bts">
          <button className="btn">Download CV</button>
        </div>
      </div>
      <div className="row">
        <div className="basic-detail-card">
          <ul className="collection">
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  <PersonOutlineIcon fontSize="small" />
                  &nbsp; Age:
                  <div className="text-side-1">22 years</div>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  <WorkIcon fontSize="small" />
                  &nbsp; Job:
                  <span className="text-side-2">Freelancer</span>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  <LocationOnIcon fontSize="small" />
                  &nbsp; Citizenship:
                  <span className="text-side-3">United States</span>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  <BusinessIcon fontSize="small" />
                  &nbsp; Address:
                  <span className="text-side-4">
                    358 W Jefferson St, Bensenville
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="basic-detail-card-2">
          <ul className="collection">
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  <InvertColorsIcon fontSize="small" />
                  &nbsp; Cups of coffee:
                  <span className="text-side-5">20.000</span>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  <LanguageIcon fontSize="small" />
                  &nbsp; Countries Visited:
                  <span className="text-side-6">28</span>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  <StarsIcon fontSize="small" />
                  &nbsp; Awards Won:
                  <span className="text-side-7">16</span>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  <AlbumIcon fontSize="small" />
                  &nbsp; Albumes Listened:
                  <span className="text-side-8">80</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="professional-details-card">
          <ul className="collection">
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  <PersonIcon />
                  &nbsp; Professional Skills
                  <span className="desctext">Sed ut perspiciatis</span>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  UI/UX Design
                  <div className="progressbar">
                    <div></div>
                  </div>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  Web Delevopment
                  <div className="progressbar-2">
                    <div></div>
                  </div>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  Mobile Application
                  <div className="progressbar-3">
                    <div></div>
                  </div>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  Writing
                  <div className="progressbar-4">
                    <div></div>
                  </div>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  Photography
                  <div className="progressbar-5">
                    <div></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="professional-details-card-2">
          <ul className="collection">
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  <ForumIcon />
                  &nbsp; Personal Skills
                  <span className="desctext">Sed ut perspiciatis</span>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  Communication
                  <div className="progressbar">
                    <div></div>
                  </div>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  Leadership
                  <div className="progressbar-2">
                    <div></div>
                  </div>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  Team Work
                  <div className="progressbar-3">
                    <div></div>
                  </div>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  Language
                  <div className="progressbar-4">
                    <div></div>
                  </div>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div class="row">
                <div class="text-inside">
                  Creativity
                  <div className="progressbar-5">
                    <div></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
