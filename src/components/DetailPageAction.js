import React from "react";
import PropTypes from "prop-types";
import ButtonDelete from "./ButtonDelete";
import ButtonAction from "./ButtonAction";

function DetailPageAction({ id, archived, isArchived, onDelete }) {
  return (
    <div className="detail-page__action">
      <ButtonAction id={id} archived={archived} isArchived={isArchived} />
      <ButtonDelete id={id} onDelete={onDelete} />
    </div>
  );
}

DetailPageAction.propTypes = {
  archived: PropTypes.bool.isRequired,
  isArchived: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default DetailPageAction;
