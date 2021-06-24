import React from "react";
import "./Education.css";
import { EducationData } from "./EducationData";

function Education() {
  return (
    <>
      <div className="container">
        <h5 className="education-heading">Experience & Education</h5>
        <div className="education-cards">
          {EducationData.map((val, key) => {
            return (
              <div className="edcard">
                <div className="edcard-header">
                  {val.icon}
                  {val.heading}
                  <span className="tag">{val.headingtag}</span>
                  <span className="right-text">{val.date}</span>
                </div>
                <div className="edcard-content">
                  <p className="edetail">{val.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
    // <div className="container">
    //   <h5 className="education-heading">Experience & Education</h5>
    //   <div className="row">
    //     <div className="colom-1">
    //       <ul className="collection">
    //         <li className="collection-item">
    //           <span className="right-text">PRESENT</span>
    //           <div className="text-header">
    //             {" "}
    //             <AssignmentIcon />
    //             Facebook Inc.
    //           </div>
    //           <span className="tag">Art Director</span>
    //         </li>
    //         <li className="collection-item-2">
    //           <p className="edetail">
    //             Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
    //             vocent mediocritatem an, cule dicta iriure at. Ubique maluisset
    //             vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex
    //             audire suavitate has, ei quodsi tacimates sapientem sed, pri
    //             zril ubique ut. Lorem ipsum dolor sit amet, in quodsi.
    //           </p>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="colom-2">
    //       <ul className="collection">
    //         <li className="collection-item">
    //           <span className="right-text">2014-2016</span>
    //           <div className="text-header">
    //             {" "}
    //             <AssignmentIcon />
    //             Google Inc.
    //           </div>
    //           <span className="tag">Front-end Developer</span>
    //         </li>
    //         <li className="collection-item-2">
    //           <p className="edetail">
    //             Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
    //             vocent mediocritatem an, cule dicta iriure at. Ubique maluisset
    //             vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex
    //             audire suavitate has, ei quodsi tacimates sapientem sed, pri
    //             zril ubique ut. Lorem ipsum dolor sit amet, in quodsi.
    //           </p>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="colom-1">
    //       <ul className="collection">
    //         <li className="collection-item">
    //           <span className="right-text">2012-2014</span>
    //           <div className="text-header">
    //             {" "}
    //             <AssignmentIcon />
    //             Abc Inc.
    //           </div>
    //           <span className="tag">Senior Developer</span>
    //         </li>
    //         <li className="collection-item-2">
    //           <p className="edetail">
    //             Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
    //             vocent mediocritatem an, cule dicta iriure at. Ubique maluisset
    //             vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex
    //             audire suavitate has, ei quodsi tacimates sapientem sed, pri
    //             zril ubique ut. Lorem ipsum dolor sit amet, in quodsi.
    //           </p>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="colom-2">
    //       <ul className="collection">
    //         <li className="collection-item">
    //           <span className="right-text">2009-2012</span>
    //           <div className="text-header">
    //             {" "}
    //             <AssignmentIcon />
    //             Freelancer
    //           </div>
    //           <span className="tag">Senior Developer</span>
    //         </li>
    //         <li className="collection-item-2">
    //           <p className="edetail">
    //             Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
    //             vocent mediocritatem an, cule dicta iriure at. Ubique maluisset
    //             vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex
    //             audire suavitate has, ei quodsi tacimates sapientem sed, pri
    //             zril ubique ut. Lorem ipsum dolor sit amet, in quodsi.
    //           </p>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="colom-1">
    //       <ul className="collection">
    //         <li className="collection-item">
    //           <span className="right-text">2008-2009</span>
    //           <div className="text-header">
    //             {" "}
    //             <SchoolIcon />
    //             Front-End Course
    //           </div>
    //           <span className="tag">London</span>
    //         </li>
    //         <li className="collection-item-2">
    //           <p className="edetail">
    //             Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
    //             vocent mediocritatem an, cule dicta iriure at. Ubique maluisset
    //             vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex
    //             audire suavitate has, ei quodsi tacimates sapientem sed, pri
    //             zril ubique ut. Lorem ipsum dolor sit amet, in quodsi.
    //           </p>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="colom-2">
    //       <ul className="collection">
    //         <li className="collection-item">
    //           <span className="right-text">2005-2008</span>
    //           <div className="text-header">
    //             {" "}
    //             <SchoolIcon />
    //             Art University
    //           </div>
    //           <span className="tag">London</span>
    //         </li>
    //         <li className="collection-item-2">
    //           <p className="edetail">
    //             Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
    //             vocent mediocritatem an, cule dicta iriure at. Ubique maluisset
    //             vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex
    //             audire suavitate has, ei quodsi tacimates sapientem sed, pri
    //             zril ubique ut. Lorem ipsum dolor sit amet, in quodsi.
    //           </p>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Education;
