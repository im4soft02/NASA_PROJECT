import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [makanan, setMakanan] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771`)
      .then((response) => {
        // console.log("API Response:", response.data);
        setMakanan(response.data.meals);
      })
      .catch((error) => {
        console.error("API GK BISA:", error);
      });
  }, []);

  useEffect(() => {
    let AllAngkot = 10;
    let angkotBeroprasi = 3;
    let noAngkot = 1;

    while (noAngkot <= angkotBeroprasi) {
      console.log(`Angkot no ${noAngkot} bisa beroperasi`);
      noAngkot++;
    }

    for (let asw = angkotBeroprasi + 1; asw <= AllAngkot; asw++) {
      console.log(`Angkot no ${asw} TIDAK BISA BEROPERASI`);
    }
  }, []);

  return (
    <>
      <div className="">
        {makanan.map((item, i) => (
          <div key={i}>
            <div className="w-[900px] bg-[#8b4f4f] h-[350px] rounded-[20px]">
              <h1 className="text-[#fff] text-[40px]">{item.strMeal}</h1>
              <h3> {item.strInstructions}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
