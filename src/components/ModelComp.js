import React from "react";
import { Modal } from "antd";
import PublicIcon from "@mui/icons-material/Public";
import { FcWikipedia } from "react-icons/fc";
import { AiOutlineYoutube } from "react-icons/ai";
import "../styles/Dashboard.css";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

const ModelComp = ({ modelnewData, isModalOpen, setIsModalOpen }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        {modelnewData && (
          <>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <img
                src={
                  modelnewData.image === null || "undefined"
                    ? "https://i.imgur.com/Ehe9AgY.png"
                    : modelnewData.image
                }
                alt={modelnewData.missionName}
                width="70px"
              />

              <h3>{modelnewData.missionName}</h3>
              {modelnewData.upcoming ? (
                <Chip
                  label="Upcoming"
                  sx={{
                    backgroundColor: " rgba(255, 255, 0, 0.27)",
                    color: "orange",
                  }}
                />
              ) : modelnewData.lanchStatus ? (
                <Chip
                  label="Success"
                  sx={{
                    backgroundColor: "rgba(0, 128, 0, 0.452)",
                    color: "green",
                  }}
                />
              ) : (
                <Chip
                  label="Failed"
                  sx={{
                    backgroundColor: "rgba(255, 0, 0, 0.307)",
                    color: "rgba(255, 0, 0)",
                  }}
                />
              )}
            </Box>

            <Box sx={{ paddingLeft: "5rem" }}>
              <p>{modelnewData.rocketname}</p>
              <Box sx={{ display: "flex", marginY: "5px", gap: "10px" }}>
                <a href={modelnewData.nasalink} style={{ color: "black" }}>
                  <PublicIcon sx={{ fontSize: "14px" }} />
                </a>
                <a href={modelnewData.wikipedialink} style={{ color: "black" }}>
                  <FcWikipedia />
                </a>
                <a href={modelnewData.youtubelink} style={{ color: "black" }}>
                  <AiOutlineYoutube />
                </a>
              </Box>
            </Box>

            <p>
              {modelnewData.details} .
              <a
                href={modelnewData.wikipedialink}
                alt={modelnewData.missionName}
              >
                Wikipedia
              </a>
            </p>
            <div className="model_mainData">
              <div>
                <span>Flight Number</span>
                <span>{modelnewData.flightnumber}</span>
              </div>
              <div>
                <span>Mission Name</span>
                <span>{modelnewData.missionName}</span>
              </div>
              <div>
                <span>Rocket Type</span>
                <span>{modelnewData.rocketType}</span>
              </div>
              <div>
                <span>Rocket Name</span>
                <span>{modelnewData.rocketName}</span>
              </div>
              <div>
                <span>Manufacturing</span>
                <span>{modelnewData.manufacturer}</span>
              </div>
              <div>
                <span>Nationality</span>
                <span>{modelnewData.nationality}</span>
              </div>
              <div>
                <span>Launch Date</span>
                <span>{modelnewData.launchdate}</span>
              </div>
              <div>
                <span>Payload Type</span>
                <span>{modelnewData.payloadType}</span>
              </div>
              <div>
                <span>Orbit</span>
                <span>{modelnewData.orbit}</span>
              </div>
              <div>
                <span>Launch Site</span>
                <span>{modelnewData.launchSite}</span>
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ModelComp;
