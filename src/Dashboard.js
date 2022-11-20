import React from "react";
import Navbar from "./Navbar";
import Board from "./Board";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const showExplorer = useSelector((state) => state.layout.showExplorer);
  const currentPage = useSelector((state) => state.layout.currentPage);

  console.log("showExplorer", showExplorer);
  console.log("currentPage", currentPage);

  return (
    <>
      <Navbar />
      {showExplorer && <Sidebar />}
      <Board page={currentPage} />
    </>
  );
}
