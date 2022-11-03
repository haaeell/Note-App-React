import React from "react";

const LocaleContext = React.createContext("id");

export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Consumer;

export default LocaleContext;
