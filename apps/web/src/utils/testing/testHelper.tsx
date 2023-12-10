import React from "react";
import { BrowserRouter } from "react-router-dom";

export const withProviders = (ui: React.ReactNode) => {
  return (
    <BrowserRouter>
      {ui}
    </BrowserRouter>
  );
};

export const sleep = async (ms: number) =>
new Promise(resolve =>
  setTimeout(() =>
    resolve(true), ms));