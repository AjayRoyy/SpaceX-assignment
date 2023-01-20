import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const usePagination = ({ page, setPage, data, defaultpage }) => {
  const countnumber = Math.ceil(data.length / page.pageSize);
  const defaultPag = localStorage.getItem("value");
  return (
    <Container
      component={Box}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        width: 1000,
        marginTop: "1rem",
      }}
      disableGutters={true}
    >
      <Stack spacing={2}>
        <Pagination
          defaultPage={defaultPag}
          count={countnumber}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => {
            localStorage.setItem("value", value);
            setPage({ ...page, currentPage: value });
          }}
        />
      </Stack>
    </Container>
  );
};

export default usePagination;
