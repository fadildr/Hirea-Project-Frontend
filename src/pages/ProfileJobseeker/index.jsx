import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Profile from "../../components/ProfileJobseeker";
import Experience from "../../components/Experience";
import Portofolio from "../../components/Portofolio";
// import suitcase from "../../assets/images/suitcase.png";

import { useParams } from "react-router-dom";

import "./ProfileJobseeker.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserJobseekerById } from "../../redux/action/user";
import { getUserJobseekerExperienceById } from "../../redux/action/experience";
import { getPortfolio } from "../../redux/action/portfolio";

function ProfileJobseekerExperience() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { id } = useParams();
  const [activePage, setActivePage] = useState("experience");
  const user = useSelector((state) => state.user.data);
  const experience = useSelector((state) => state.experience.data);
  const portofolio = useSelector((state) => state.portfolio.data);

  useEffect(() => {
    dispatch(getUserJobseekerById(id));
  }, []);

  useEffect(() => {
    dispatch(getUserJobseekerExperienceById(id));
  }, []);

  useEffect(() => {
    dispatch(getPortfolio(id));
  }, []);

  const handleActivePage = (data) => {
    setActivePage(data);
  };

  // const handleJobseekerPortofolio = (id) => {
  //   navigate(`/jobseeker/portofolio/${id}`);
  // };

  return (
    <>
      <Header />
      <main className="profile-jobseeker">
        <Profile data={user} />
        {activePage === "experience" ? (
          <Experience data={experience} handleActivePage={handleActivePage} />
        ) : (
          ""
        )}
        {activePage === "portfolio" ? (
          <Portofolio data={portofolio} handleActivePage={handleActivePage} />
        ) : (
          ""
        )}
      </main>
      <Footer />
    </>
  );
}

export default ProfileJobseekerExperience;
