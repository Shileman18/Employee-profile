import React from "react";
import "./Employee.css";
import { MdOutlineEdit } from "react-icons/md";
import { FaBell, FaSearch } from "react-icons/fa";
import { BsFilterLeft, BsChat, BsThreeDotsVertical } from "react-icons/bs";
import { GiUsaFlag } from "react-icons/gi";
// import { IoSettings } from "react-icons/io5";

function Employee() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className=" navbar">
          <div className=" container-fluid ">
            <div className=" d-flex">
              <div>
                <img
                  src="./images/Navbar_Logo.png"
                  alt=""
                  className="m-2"
                  width={22}
                />
              </div>
              <div className="m-1 px-2" style={{ color: "#fff" }}>
                <BsFilterLeft />
              </div>
              <p className="m-1" style={{ color: "#fff" }}>
                Dreams Technologies
              </p>
            </div>

            <div className="d-flex">
              <div className="d-flex">
                <input
                  className=" search form-control "
                  type="search"
                  placeholder="Search here"
                  aria-label="Search"
                />
                <span className="fasearch text-left">
                  <FaSearch />
                </span>
              </div>

              <div className="me-2 ">
                <GiUsaFlag />
                <select className="English">
                  <option>English</option>
                </select>
              </div>
              <div className="FaBell">
                <FaBell />
              </div>
              <div className="Bschat">
                <BsChat />
              </div>
              <div>
                <img
                  src="./images/download.png"
                  alt=""
                  className="rounded-pill mt-2"
                  width={20}
                />
              </div>
              <div>
                <select className="Admin ">
                  <option>Admin</option>
                </select>
              </div>
            </div>
          </div>
        </nav>

        <div className="lh-1 mt-2">
          <h4 className="">Profile</h4>
          <div className="mb-4">Dashboard / Profile</div>

          <div className="card d-flex justify-content-around">
            <div className="card-body">
              <div className="row ">
                <div className="edit ">
                  <MdOutlineEdit className="float-end" />
                </div>
                
                <div className="col">
                  <div className="ms-4">
                    <img
                      src="./images/download.png"
                      alt="ha"
                      className="rounded-circle"
                      width={130}
                    />
                  </div>
                </div>
                <div className="col me-5">
                  <div className="">
                    <h4>John Deo</h4>
                    <p style={{ color: "#a19c9c" }}>UI/UX Design Team</p>
                    <p style={{ color: "#a19c9c" }}>Web Designer</p>
                    <p>
                      <b>Employee ID : FT-0001</b>
                    </p>
                    <p style={{ color: "#a19c9c" }}>
                      Date of JOin : 1st Jan 2023
                    </p>
                    <button className="btn">Send Message</button>
                  </div>
                </div>
                <div className="col">
                  <div
                    className=" "
                    style={{ height: "180px", borderRight: "1px dashed" }}
                  ></div>
                </div>
                <div className="col">
                  <div className="">
                    <p>
                      <b>Phone:</b>
                    </p>
                    <p>
                      <b>Email:</b>
                    </p>
                    <p>
                      <b>Birthday:</b>
                    </p>
                    <p>
                      <b>Address:</b>
                    </p>
                    <p>
                      <b>Gender:</b>
                    </p>
                    <p>
                      <b>Reports to:</b>
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="">
                    <p>
                      <a href="/">8987463556</a>
                    </p>
                    <p>
                      <a href="/">johndeo@gmail.com</a>
                    </p>
                    <p style={{ color: "#a19c9c" }}>24th July</p>
                    <p style={{ color: "#a19c9c" }}>
                      1861 Bayonne Ave, Manchester Township, NJ, 08759
                    </p>
                    <p style={{ color: "#a19c9c" }}>Male</p>
                    <p>
                      <img
                        src="./images/download.png"
                        alt=""
                        className="rounded-pill"
                        width={23}
                      />
                      <a href="/">Jeffery Lair</a>
                    </p>
                  </div>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body  ">
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-wrap">
                    <p className="me-3">
                      <b>
                        <u style={{ color: "red" }}>Profile</u>
                      </b>
                    </p>
                    <p className="me-3" style={{ color: "#a19c9c" }}>
                      Projects
                    </p>
                    <p className="me-3" style={{ color: "#a19c9c" }}>
                      Bank & Statutory
                      <b style={{ color: "red" }}>(Admin Only)</b>
                    </p>
                    <p style={{ color: "#a19c9c" }}>Assets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-sm-6">
              <div className="card ">
                <div className="card-body mb-4">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title mb-3">
                      <b>Personal Informations</b>
                    </h5>
                    <div className="edit" width={20}>
                      <MdOutlineEdit />
                    </div>
                  </div>
                  <div className="d-flex flex-wrap">
                    <div className="me-5">
                      <p>
                        <b>Passport.</b>
                      </p>
                      <p>
                        <b>Passport Exp Date.</b>
                      </p>
                      <p>
                        <b>Tel</b>
                      </p>
                      <p>
                        <b>Nationality</b>
                      </p>
                      <p>
                        <b>Religion</b>
                      </p>
                      <p>
                        <b>Marital status</b>
                      </p>
                      <p>
                        <b>Employment of spouse</b>
                      </p>
                      <p>
                        <b>No. of children</b>
                      </p>
                    </div>
                    <div style={{ color: "#a19c9c" }}>
                      <p>9876578943</p>
                      <p>9876545678</p>
                      <p>
                        <a href="/">8765467897</a>
                      </p>
                      <p>India</p>
                      <p>Muslim</p>
                      <p>Married</p>
                      <p>No</p>
                      <p>2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h4 className="card-title">
                      <b>Emergency Contact</b>
                    </h4>
                    <div className="edit" width={20}>
                      <MdOutlineEdit />
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="">
                      <p>
                        <b>Primary</b>
                      </p>
                      <div className="d-flex flex-wrap">
                        <div className=" me-5">
                          <p>
                            <b>Name</b>
                          </p>
                          <p>
                            <b>Relationship</b>
                          </p>
                          <p>
                            <b>Phone</b>
                          </p>
                        </div>
                        <div style={{ color: "#a19c9c" }}>
                          <p>John Deo</p>
                          <p>Father</p>
                          <p>8765467897,546789085</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <div className="me-5">
                      <p>
                        <b>Secondary</b>
                      </p>
                      <div className="d-flex flex-wrap">
                        <div className="me-5">
                          <p>
                            <b>Name</b>
                          </p>
                          <p>
                            <b>Relationship</b>
                          </p>
                          <p>
                            <b>Phone</b>
                          </p>
                        </div>
                        <div style={{ color: "#a19c9c" }}>
                          <p>Virat Kohli</p>
                          <p>Brother</p>
                          <p>8765467897,546789085</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    <b>Bank Information</b>
                  </h4>
                  <div className="d-flex flex-wrap">
                    <div className="me-5">
                      <p>
                        <b>Bank name</b>
                      </p>
                      <p>
                        <b>Bank account No</b>
                      </p>
                      <p>
                        <b>IFSC Code</b>
                      </p>
                      <p>
                        <b>Pan No</b>
                      </p>
                    </div>
                    <div style={{ color: "#a19c9c" }}>
                      <p>ICICI Bank</p>
                      <p>2239876545678</p>
                      <p>ICI24504</p>
                      <p>TC00Y56</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body mb-4">
                  <div className="d-flex justify-content-between">
                    <div className="card-title">
                      <b>Family Information</b>
                    </div>

                    <div className="edit">
                      <MdOutlineEdit />
                    </div>
                  </div>
                  <hr></hr>
                  <div>
                    <table className="table table-responsive d-flex flex-wrap">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Relationship</th>
                          <th scope="col">Date of Birth</th>
                          <th scope="col">Phone</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Leo</td>
                          <td>Brother</td>
                          <td>Feb 16th,2023</td>
                          <td>9098657652</td>
                          <td>
                            <BsThreeDotsVertical />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h4 className="card-title">
                      <b>Education Informations</b>
                    </h4>
                    <div className="edit">
                      <MdOutlineEdit />
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <div
                        className=" m-2"
                        style={{ height: "155px", border: "1px solid" }}
                      ></div>
                    </div>
                    <div className="ms-3">
                      <h6 className="card-text">
                        <b>International College of Arts and Science(UG)</b>
                      </h6>
                      <p style={{ color: "#a19c9c" }}>Bsc Computer Science</p>
                      <p style={{ color: "#a19c9c" }}>2000-2003</p>
                      <h6 className="card-text">
                        <b>International College of Arts and Science(PG)</b>
                      </h6>
                      <p>Bsc Computer Science</p>
                      <p>2000-2003</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h4 className="card-title">
                      <b>Experience</b>
                    </h4>
                    <div className="edit">
                      <MdOutlineEdit />
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <div
                        className="m-2"
                        style={{ height: "155px", border: "1px solid" }}
                      ></div>
                    </div>
                    <div className="ms-3 ">
                      <h6 className="card-text">
                        <b>Web Designer at Zen Corporation</b>
                      </h6>
                      <p style={{ color: "#a19c9c" }}>
                        Jan 2003-Present(5 years 2 months){" "}
                      </p>
                      <h6 className="card-text">
                        <b>Web Designer at Ron-tech</b>
                      </h6>
                      <p style={{ color: "#a19c9c" }}>
                        Jan 2003-Present(5 years 2 months){" "}
                      </p>
                      <h6 className="card-text">
                        <b>Web Designer at Dalt Technology</b>
                      </h6>
                      <p style={{ color: "#a19c9c" }}>
                        Jan 2003-Present(5 years 2 months){" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
