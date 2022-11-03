import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HomePageAction from "../components/HomePageAction";
import NoteItemList from "../components/NoteItemList";
import SearchNote from "../components/SearchNote";
import LocaleContext from "../contexts/LocaleContexts";
import { searchNotes } from "../utils/local-data";
import { getActiveNotes } from "../utils/network-data";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");

  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(title || "");
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  function onSearch(keyword) {
    setSearchParams({ title: keyword });
    setKeyword(keyword);
  }

  const filteredNotes = searchNotes(notes, keyword);
  return (
    <section className="homepage">
      <h2>{locale === "id" ? "Catatan Aktif" : "Active Notes"}</h2>
      <SearchNote onSearch={onSearch} />
      <NoteItemList notes={filteredNotes} />
      <HomePageAction />
    </section>
  );
}

export default HomePage;
