import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import axios from "axios";
import PaginationComp from "./Pagination";
import ModelComp from "./ModelComp";
import FilterComp from "./FilterComp";
import "../styles/Dashboard.css";
import { Routes } from "./../Utils/Routes";
import { createData, createModelData } from "../Utils/createDatamodels";
import { FadeLoader } from "react-spinners";

const Dashboard = ({ isLoading }) => {
  //fetched data
  const [data, setData] = useState([]);
  const [slicedData, setSlicedData] = useState([]);

  //customized Data
  const [seletedData, setSelectedData] = useState();
  const [page, setPage] = useState({
    pageSize: 8,
    currentPage: localStorage.getItem("value")
      ? localStorage.getItem("value")
      : 1,
    defaultpage: 0,
  });

  //modal Data
  const [modelnewData, setModelnewData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const localData = localStorage.getItem("route");

        const fetchedData = await axios.get(
          `https://api.spacexdata.com/v3${
            localData ? Routes[localData] : Routes.all
          }`
        );
        const lastPostIndex = page.currentPage * page.pageSize;
        const firstPostIndex = lastPostIndex - page.pageSize;
        const currentPost = fetchedData.data.slice(
          firstPostIndex,
          lastPostIndex
        );
        if (currentPost.length <= 0) {
          setPage({ ...page, currentPage: 1 });
        }
        setData(fetchedData.data);
        setSlicedData(currentPost);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page, seletedData]);

  const tableData = slicedData.map((e) => {
    return createData(
      e.flight_number < 9 ? `0${e.flight_number}` : e.flight_number,
      e.launch_date_utc,
      e.launch_site.site_name,
      e.mission_name,
      e.rocket.second_stage.payloads[0].orbit,
      e.launch_success,
      e.rocket.rocket_name,
      e.upcoming
    );
  });
  const modelData = slicedData.map((e) => {
    return createModelData(
      e.links.mission_patch,
      e.mission_name,
      e.launch_success,
      e.rocket.rocket_name,
      e.links.presskit,
      e.links.wikipedia,
      e.links.video_link,
      e.details,
      e.flight_number < 9 ? `0${e.flight_number}` : e.flight_number,
      e.rocket.rocket_type,
      e.rocket.rocket_name,
      e.rocket.second_stage.payloads[0].manufacturer,
      e.rocket.second_stage.payloads[0].nationality,
      e.launch_date_utc,
      e.rocket.second_stage.payloads[0].payload_type,
      e.rocket.second_stage.payloads[0].orbit,
      e.launch_site.site_name,
      e.upcoming
    );
  });
  const DateConversion = (stringDate) => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const d = new Date(stringDate);
    let day = d.getUTCDate() < 10 ? `0${d.getUTCDate()}` : d.getUTCDate();
    let getMonth = month[d.getUTCMonth()];
    let year = d.getUTCFullYear();
    let hour = d.getUTCHours();
    let minutes = d.getUTCMinutes();
    return `${day} ${getMonth} ${year} at ${hour}:${minutes}`;
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  console.log(slicedData, tableData);

  return (
    <div className="dashboard_main">
      <FilterComp seletedData={seletedData} setSelectedData={setSelectedData} />
      <Container
        disableGutters={true}
        sx={{
          paddingTop: "1rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: 1000,
            height: 570,
            boxShadow: "0px 0px 3px grey",
            borderRadius: "15px",
            // overflow: "hidden",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              minWidth: 650,
              borderRadius: "15px",
              boxShadow: "none",
            }}
          >
            <Table sx={{ minWidth: 650, borderRadius: "15px" }}>
              <TableHead
                sx={{
                  backgroundColor: "rgba(202, 202, 202, 0.63)",
                }}
              >
                <TableRow>
                  <TableCell sx={{ border: "none", textAlign: "center" }}>
                    No:
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>Launced (UTC)</TableCell>
                  <TableCell sx={{ border: "none", textAlign: "center" }}>
                    Location
                  </TableCell>
                  <TableCell sx={{ border: "none", textAlign: "center" }}>
                    Mission
                  </TableCell>
                  <TableCell sx={{ border: "none", textAlign: "center" }}>
                    Orbit
                  </TableCell>
                  <TableCell sx={{ border: "none", textAlign: "center" }}>
                    Launched Status
                  </TableCell>
                  <TableCell sx={{ border: "none", textAlign: "center" }}>
                    Rocket
                  </TableCell>
                </TableRow>
              </TableHead>

              {isLoading ? (
                <div className="loader_div">
                  <FadeLoader color="grey" />
                </div>
              ) : (
                <TableBody>
                  {tableData &&
                    tableData.map((row, i) => (
                      <TableRow
                        key={i}
                        onClick={() => {
                          showModal();
                          const newData = modelData.find(
                            (e) => e.flightnumber === row.index
                          );
                          setModelnewData(newData);
                          console.log(newData);
                        }}
                      >
                        <TableCell sx={{ border: "none", textAlign: "center" }}>
                          {row.index}
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          {DateConversion(row.launchedDate)}
                        </TableCell>
                        <TableCell sx={{ border: "none", textAlign: "center" }}>
                          {row.location}
                        </TableCell>
                        <TableCell sx={{ border: "none", textAlign: "center" }}>
                          {row.mission}
                        </TableCell>
                        <TableCell sx={{ border: "none", textAlign: "center" }}>
                          {row.orbit}
                        </TableCell>
                        <TableCell sx={{ border: "none", textAlign: "center" }}>
                          {row.upcoming ? (
                            <Chip
                              label="Upcoming"
                              sx={{
                                backgroundColor: " rgba(255, 255, 0, 0.27)",
                                color: "orange",
                              }}
                            />
                          ) : row.launchedStatus ? (
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
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          {row.rocket}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Box>
        <ModelComp
          modelnewData={modelnewData}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        />
        <PaginationComp page={page} setPage={setPage} data={data} />
      </Container>
    </div>
  );
};

export default Dashboard;
