import "./Portfolio.css";
import { useState } from "react";
import HeadingText from "../../components/HeadingText/HeadingText";
import { portfolio2023, portfolio2024 } from "../../data/Data";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../../UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faAppStore,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import { faVideo, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="portfolio py-16 px-6 bg-gray-100">
      <HeadingText title="Recent" titlePrimary="Work" />

      {/* Projects of 2024 */}
      <h2 className="portfolio-year">Projects 2024 - 2025</h2>
      <div className="portfolio-container">
        {portfolio2024.map((project) => (
          <Card key={project.id} className="project-card">
            <motion.div className="project" whileHover={{ scale: 1.05 }}>
              <img
                src={project.img}
                alt={project.name}
                className="project-img"
              />
              <div className="p-4">
                <h3>{project.name}</h3>
                <p className="text-gray-600 mt-2">{project.des}</p>
                <button className="btn" onClick={() => openModal(project)}>
                  Details
                </button>
              </div>
            </motion.div>
          </Card>
        ))}
      </div>

      {/* Projects of 2023 */}
      <h2 className="portfolio-year">Projects 2023</h2>
      <div className="portfolio-container">
        {portfolio2023.map((project) => (
          <Card key={project.id} className="project-card">
            <motion.div className="project" whileHover={{ scale: 1.05 }}>
              <img
                src={project.img}
                alt={project.name}
                className="project-img"
              />
              <div className="p-4">
                <h3>{project.name}</h3>
                <p className="text-gray-600 mt-2">{project.des}</p>
                <button className="btn" onClick={() => openModal(project)}>
                  Details
                </button>
              </div>
            </motion.div>
          </Card>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.img}
                alt={selectedProject.name}
                className="modal-img"
              />

              <h2>{selectedProject.name}</h2>
              <p>
                <strong>Team size:</strong> {selectedProject.teamSize}
              </p>
              <p>
                <strong>Position:</strong> {selectedProject.position}
              </p>
              <p>
                <strong>Tools:</strong> {selectedProject.tools}
              </p>
              <p>
                <strong>Features:</strong> {selectedProject.features}
              </p>

              <div className="project-links">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
                  </a>
                )}
                {selectedProject.appStore && (
                  <a
                    href={selectedProject.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="appstore"
                  >
                    <FontAwesomeIcon icon={faAppStore} size="lg" /> App Store
                  </a>
                )}
                {selectedProject.playStore && (
                  <a
                    href={selectedProject.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playstore"
                  >
                    <FontAwesomeIcon icon={faGooglePlay} size="lg" /> Google
                    Play
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo"
                  >
                    <FontAwesomeIcon icon={faVideo} size="lg" /> Demo
                  </a>
                )}
                {selectedProject.website && (
                  <a
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="website"
                  >
                    <FontAwesomeIcon icon={faGlobe} size="lg" /> Website
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
