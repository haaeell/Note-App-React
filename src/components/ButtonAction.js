import React from "react";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import PropTypes from "prop-types";

function ButtonAction({ id, archived, isArchived }) {
	if (archived) {
		return (
			<button
				className="action"
				type="button"
				title="Aktifkan"
				onClick={() => isArchived(id)}
			>
				<BiArchiveOut />
			</button>
		);
	}

	return (
		<button
			className="action"
			type="button"
			title="Arsipkan"
			onClick={() => isArchived(id)}
		>
			<BiArchiveIn />
		</button>
	);
}

ButtonAction.propTypes = {
	id: PropTypes.string.isRequired,
	archived: PropTypes.bool.isRequired,
	isArchived: PropTypes.func.isRequired,
};

export default ButtonAction;
