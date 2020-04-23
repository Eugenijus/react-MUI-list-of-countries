import React, { useState, useEffect } from "react";

const Test = () => {
  const [data, setData] = useState([]);

  // fn1 = veiksmas, action! holywood,
  // arr1 = nuo ko priklauso update, pakartotinas fn1 ishkvietimas
  // 1) jei arr1 = [] --- tada fn1 kvieciamas viena kart ~== componentWillMount
  // 2) jei arr1 = [] IR fn1 turi return funkcija,
  //       tada fn1 kvieciamas viena kart ~== componentWillMount ir
  //       ir kai komponentas nenaudojamas, bus ivykdytas fn1 return funkcija
  //        t.y. ~== componentWillUnmount
  //useEffect(fn1, arr1);

  //2
  // useEffect(() => {
  //   console.log("componentWillMount");
  //   return () => {
  //     console.log("componentWillUnmount");
  //   };
  // }, []);

  /**
   * 3) jei arr1 nieko nepaduota, tuomet fn1 will be executed on every re-render
   * useEffect(() => {
   *    console.log("componentWillMount");
   * } ); <--- no array
   */

  /**
   * 4) jei arr1 masyvas turi 1 ar daugiau kintamuju,
   *    tuomet fn1 will be executed when that variable(s) have changed
   * useEffect(() => {
   *    console.log("lets do some stuff before re-render");
   * } [spalva, isLoading, arPetriukasRuko]);
   */

  useEffect(() => {
    const superImportantDataFetchTopSecretDB = async () => {
      const response = await fetch(
        "https://restcountries.eu/rest/v2/all?fields=name",
        { method: "GET" }
      );
      const data = await response.json();
      setData(data);
    };
    superImportantDataFetchTopSecretDB();
  }, []);

  data.map((item, i) => console.log(item.name));

  return <div>valio</div>;
};

export default Test;
