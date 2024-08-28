import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  // bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: 400,
  outline: "none",
};

function BasicModal({ handleClose, open , trailer , videoList }) {
  return (
    <div >
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style}>
          <iframe
            width="100%"
            height="100%"
            src={trailer?.key ? `https://www.youtube.com/embed/${trailer?.key}?si=lOa5zhn99UKuTb` : `https://www.youtube.com/embed/${videoList?.[0]?.key}?si=lOa5zhn99UKuTb`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div>
            <CloseIcon
              className="close"
              style={{ fontSize: "1.5rem" }}
              onClick={handleClose}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default BasicModal;
