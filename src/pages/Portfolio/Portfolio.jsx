import "./Portfolio.css";
import { useState } from "react";
import HeadingText from "../../components/HeadingText/HeadingText";
import { portfolio2023, portfolio2024 } from "../../data/Data";
import { motion, AnimatePresence } from "framer-motion";
import Card from '../../UI/Card';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="portfolio py-16 px-6 bg-gray-100">
      <HeadingText title="Recent" titlePrimary="Work" />

      {/* Projects of 2024 */}
      <h2 className="portfolio-year">Dự án năm 2024 - 2025</h2>
      <div className="portfolio-container">
        {portfolio2024.map((project) => (
          <Card key={project.id} className="project-card">
            <motion.div className="project" whileHover={{ scale: 1.05 }}>
              <img src={project.img} alt={project.name} className="project-img" />
              <div className="p-4">
                <h3>{project.name}</h3>
                <p className="text-gray-600 mt-2">{project.des}</p>
                <button className="btn" onClick={() => openModal(project)}>Detail</button>
              </div>
            </motion.div>
          </Card>
        ))}
      </div>

      {/* Projects of 2023 */}
      <h2 className="portfolio-year">Dự án năm 2023</h2>
      <div className="portfolio-container">
        {portfolio2023.map((project) => (
          <Card key={project.id} className="project-card">
            <motion.div className="project" whileHover={{ scale: 1.05 }}>
              <img src={project.img} alt={project.name} className="project-img" />
              <div className="p-4">
                <h3>{project.name}</h3>
                <p className="text-gray-600 mt-2">{project.des}</p>
                <button className="btn" onClick={() => openModal(project)}>Detail</button>
              </div>
            </motion.div>
          </Card>
        ))}
      </div>

      {/* Modal chi tiết dự án */}
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
              <span className="close-btn" onClick={closeModal}>&times;</span>
              <h2>{selectedProject.name}</h2>
              <p><strong>Team size:</strong> {selectedProject.teamSize}</p>
              <p><strong>Vị trí:</strong> Mobile Developer</p>
              <p><strong>Tools:</strong> {selectedProject.tools}</p>
              <p><strong>Tính năng:</strong> {selectedProject.features}</p>
              <div className="flex gap-4 mt-4">
                {selectedProject.github && <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">🔗 GitHub</a>}
                {selectedProject.appstore && <a href={selectedProject.appstore} target="_blank" rel="noopener noreferrer">📱 App Store</a>}
                {selectedProject.googleplay && <a href={selectedProject.googleplay} target="_blank" rel="noopener noreferrer">📱 Google Play</a>}
                {selectedProject.demo && <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">🎥 Demo</a>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
