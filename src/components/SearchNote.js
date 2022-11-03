import React from 'react';
import PropTyes from 'prop-types';

function SearchNote({ onSearch }) {
	return (
		<section className="search-bar">
			<input type="text" placeholder="Cari berdasarkan judul ..." onChange={(e) => onSearch(e.target.value)} />
		</section>
	)
}

SearchNote.propTypes = {
	onSearch: PropTyes.func.isRequired,
}

export default SearchNote;