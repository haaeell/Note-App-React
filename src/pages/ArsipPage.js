import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteItemList from "../components/NoteItemList";
import SearchNote from "../components/SearchNote";
import LocaleContext from "../contexts/LocaleContexts";
import { searchNotes } from "../utils/local-data";
import { getArchivedNotes } from "../utils/network-data";

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");

  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(title || "");
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  function onSearch(keyword) {
    setSearchParams({ title: keyword });
    setKeyword(keyword);
  }

  const filteredNotes = searchNotes(notes, keyword);
  return (
    <section className="archives-page">
      <h2>{locale === "id" ? "Catatan Arsip" : "Archived Notes"}</h2>
      <SearchNote onSearch={onSearch} />
      <NoteItemList notes={filteredNotes} />
    </section>
  );
}

export default ArchivePage;
