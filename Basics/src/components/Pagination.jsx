import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const ITEMS_PER_PAGE = 10;

export function Pagination() {
  // 1. Read query parameters from the URL
  const [searchParams, setSearchParams] = useSearchParams();

  // 2. Fallback to page 1 if the parameter is missing or invalid
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${ITEMS_PER_PAGE}`,
        );
        const result = await response.json();

        setData(result);

        // Mocking total pages since jsonplaceholder returns 100 items total
        setTotalPages(Math.ceil(100 / ITEMS_PER_PAGE));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({ page: newPage });
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h2>Paginated Items (Page {currentPage})</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ minHeight: "300px" }}>
          {data.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              <strong>{item.title}</strong>
            </li>
          ))}
        </ul>
      )}

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || loading}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || loading}
        >
          Next
        </button>
      </div>
    </div>
  );
}
