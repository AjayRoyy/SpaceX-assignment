import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Select } from "antd";
import Button from "@mui/material/Button";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const FilterComp = ({ seletedData, setSelectedData }) => {
  const handleChange = (value) => {
    localStorage.setItem("route", value);
    setSelectedData(value);
    console.log(value);
  };
  return (
    <Container
      component={Box}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: 1000,
        marginTop: "1rem",
      }}
    >
      <Button
        onClick={() => handleChange("past")}
        sx={{
          color: "black",
          textTransform: "none",
          "&:hover": { border: "none", background: "none" },
        }}
      >
        <CalendarTodayOutlinedIcon
          sx={{ fontSize: "16px", marginRight: "10px" }}
        />
        Past 6 months
        <KeyboardArrowDownOutlinedIcon
          sx={{ fontSize: "16px", marginLeft: "5px" }}
        />
      </Button>
      <Select
        defaultValue={"All Launches"}
        style={{
          width: 180,
          border: "none",
        }}
        onChange={handleChange}
        options={[
          {
            value: "all",
            label: "All Launches",
          },
          {
            value: "upcoming",
            label: "Upcoming Launches",
          },
          {
            value: "success",
            label: "Successfull Launches",
          },
          {
            value: "failed",
            label: "Failed Launches",
          },
        ]}
      />
    </Container>
  );
};

export default FilterComp;
