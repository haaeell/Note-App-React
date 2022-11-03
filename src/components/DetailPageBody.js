import React from "react";
import parser from "html-react-parser";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

function DetailPageBody({ note }) {
  return (
    <>
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <div className="detail-page__body">{parser(note.body)}</div>
    </>
  );
}

DetailPageBody.propTypes = {
  note: PropTypes.object.isRequired,
};

export default DetailPageBody;
