"use client";
import React, { useState, useEffect, Suspense } from "react";
import * as XLSX from "xlsx";
import { useSearchParams } from "next/navigation";
import { Button } from "~/components/ui/button";

const Test = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();

  const key = searchParams.get("key");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/excel/api", {
          method: "POST",
          headers: {
            accept: "application/json",
          },
          body: JSON.stringify({
            key,
          }),
        });
        const resData = await res.json();
        if (resData?.code !== 2) {
          setError(resData?.message);
        } else {
          setData(resData?.data);
        }
      } catch (error) {
        console.log("Coś poszło nie tak!", error);
      }
    };
    fetchData().catch(() => console.log("!"));
  }, []);

  const onGetExporProduct = async (title?: string, worksheetname?: string) => {
    try {
      setLoading(true);
      if (data && Array.isArray(data)) {
        // @ts-expect-error "Any"
        const dataToExport = data?.map((d) => ({
          "Imię i nazwisko": `${d.firstName} ${d.lastName}`,
          Email: d.email,
          "Data urodzin": d.birthDate,
          Wycieczka: d.locale,
          Data: new Date(d.date).toLocaleString("pl"),
        }));

        // Create Excel workbook and worksheet
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils?.json_to_sheet(dataToExport);
        XLSX.utils.book_append_sheet(workbook, worksheet, worksheetname);
        // Save the workbook as an Excel file
        XLSX.writeFile(workbook, `${title}.xlsx`);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <main className="mx-auto min-h-screen w-full flex-col items-center justify-center gap-8 bg-white p-10">
      {error && (
        <div className="mx-auto mb-[10px] max-w-[400px] border bg-[#f4f4f4] p-[25px] text-center">
          {error}
        </div>
      )}
      {key && (
        <div className="mx-auto max-w-[400px] border bg-dark p-[25px]">
          <h1 className="mb-[15px] px-[25px] text-center text-[25px] font-semibold leading-tight text-white">
            Wyeksportuj dane
          </h1>
          <a
            download
            href="/pdf/Kreczforum.xlsx"
            // onClick={() => onGetExporProduct("Product", "ProductExport")}
            className="relative mx-auto mt-5 flex h-16 w-[305px] items-center justify-center rounded-[10px] bg-light text-lg font-light text-dark hover:bg-green hover:text-light disabled:bg-[#E6E6E6] disabled:text-[#848484]"
            // disabled={!data ?? error}
          >
            <span className="relative">Eksport 1</span>
          </a>
          <a
            download
            href="/pdf/Kreczforum2.xlsx"
            // onClick={() => onGetExporProduct("Product", "ProductExport")}
            className="relative mx-auto mt-5 flex h-16 w-[305px] items-center justify-center rounded-[10px] bg-light text-lg font-light text-dark hover:bg-green hover:text-light disabled:bg-[#E6E6E6] disabled:text-[#848484]"
            // disabled={!data ?? error}
          >
            <span className="relative">Eksport 2</span>
          </a>
          <Button
            onClick={() => onGetExporProduct("Kręć z Forum 2", "Kreczforum2")}
            className="relative mx-auto mt-5 flex h-16 w-[305px] justify-center rounded-[10px] bg-light text-lg font-light text-dark hover:bg-green hover:text-light disabled:bg-[#E6E6E6] disabled:text-[#848484]"
            disabled={!data}
          >
            <span className="relative">
              {loading ? "Ładowanie..." : "Eksport 3"}
            </span>
          </Button>
        </div>
      )}
    </main>
  );
};

export default function Excel() {
  return (
    <Suspense>
      <Test />
    </Suspense>
  );
}
