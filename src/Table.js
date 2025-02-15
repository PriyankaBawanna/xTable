import React, { useEffect, useState } from "react"
const data= 
[
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]
const Table =()=>{
    const [viewData,setViewData]=useState([]);
    useEffect(()=>{
        setViewData(data)
    },[])
    const handleSortByDate =()=>{
        let x= [...data].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            if (dateA > dateB) return -1; 
            if (dateA < dateB) return 1; 
    
            return b.views - a.views;
        });
        setViewData(x)
   
    }

    const handlesortByView =()=>{
        
   let dataSortbyviews  =  [...data].sort((a,b)=>{
        return b.views-a.views
      })
      setViewData(dataSortbyviews)
    }

   

    return<div className="xtable">
    <h1>Date and Views Table</h1>

    <button onClick={handleSortByDate}>Sort by Date</button>
        <button onClick={handlesortByView}>Sort by views</button>

      <table>
       <thead>

        <tr>
            <th>Date</th>
            <th>view</th>
            <th>Article</th>
        </tr>
       </thead>
       <tbody>
       {viewData.map((row, index) => (
          <tr key={index}>
            <td>{row.date}</td>
            <td>{row.views}</td>
            <td>{row.article}</td>
          </tr>
        ))}
       </tbody>
      </table>

    </div>

}
export default Table;


