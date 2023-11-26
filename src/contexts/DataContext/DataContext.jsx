import React, { createContext, useState } from "react";

export const PDFDataContext = createContext();

const initialData = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1622198717748-ca120c5590f6?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1699536521927-cbf1a932008b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1699969468338-42dd3f91bba6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1699656861005-747d6b36b918?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
// eslint-disable-next-line react/prop-types
const DataContext = ({ children }) => {

  const [data, setData] = useState(initialData);

  const [currentPage, setCurrentPage] = useState(data[0]);

  const previewData = { data, currentPage, setCurrentPage, setData };

  return (
    <PDFDataContext.Provider value={previewData}>
      {children}
    </PDFDataContext.Provider>
  );
};

export default DataContext;
