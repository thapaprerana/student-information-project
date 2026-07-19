"use client";

import { useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

interface Student {
  id: string;
  name: string;
  program: string;
  year: string;
}

// Mock data - swap this array for data from your database or API later.
const STUDENTS: Student[] = [
   { id: "ABC-2083-BA01",  name: "Roshan Thapa", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA02",  name: "Suman Rana", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA03",  name: "Asmita Thapa", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA04",  name: "Lily Shrestha", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA05",  name: "Rishi Ram Bhattrai", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA06",  name: "Hari Ale", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA07",  name: "Uma Chettri", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA08",  name: "Ritesh khanal", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA09",  name: "Atisha Kunwar", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA010",  name: "lalita Thakuri", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA011",  name: "Babin Rana", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA012",  name: "Binita Ale", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA013",  name: "Ganga Adhikari", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA014",  name: "Bishnu Lamichane", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA015",  name: "Om Kumar Shrestha", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA016",  name: "Ati Rana", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA017",  name: "Reshma Oli", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA018",  name: "Priya Ale", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA019",  name: "Ram Kumar Thapa", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA020",  name: "Isha Giri", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA021",  name: "Sonisha Chettri", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA022",  name: "Rita Rana", program: "BA", year: "1st year" },
  { id: "ABC-2082-BICTE01", name: "Kastup Thakuri", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE02", name: "Sam Joshi", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE03", name: "Hom Bahadur", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE04", name: "Mohit Joshi", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE05", name: "Sam Bahadur", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE06", name: "Biraj Gurung", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE07", name: "Sanjok Thapa", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE08", name: "Alex B.K", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE09", name: "Krishna Thapa", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE010", name: "Kumari Shresta", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE011", name: "Krishna Tamange", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE012", name: "Diwash Thakuri", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE013", name: "Krish Sunar", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE014", name: "Amrit Gurung", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE015", name: "Kushal Karki", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE016", name: "Mahesh Shrestha", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE017", name: "Krishna Maya Gurung", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE018", name: "Fulmaya Rai", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE019", name: "Man Maya Bhatrai", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE020", name: "Kiran Bhatrai", program: "BICTE", year: "2nd Sem"},
   { id: "ABC-2081-BICTE01", name: "Ashish Thakuri", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE02", name: "Anish Rai", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE03", name: "Anika Gurung", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE04", name: "Bibek Shahi", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE05", name: "Bikal B.K", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE06", name: "Biroj Gurung", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE07", name: "Chitra Tamang", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE08", name: "Dil Bahadur Sunar", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE09", name: "Ishak Rana", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE010", name: "Janak Kumar", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE011", name: "Janaki B.K", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE012", name: "Kushal Malla", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE013", name: "Lal bahadur Saru", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE014", name: "Man Tamang", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE015", name: "Niroj Karki", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE016", name: "Umesh Shrestha", program: "BICTE", year: "4th Sem"},
  { id: "ABC-2081-BICTE017", name: "Uma Maya Gurung", program: "BICTE", year: "4th Sem"},
   { id: "ABC-2080-BICTE01", name: "Amaraj Magar", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE02", name: "Anita Adhikari", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE03", name: "Apil Wagle", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE04", name: "Bidhika Shrestha", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE05", name: "Binita Shrestha", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE06", name: "Chandra Kumar Shrestha", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE07", name: "Diwash Ranabhat", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE08", name: "Khusboo Thapa", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE09", name: "Kastup Thapa", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE010", name: "Kiran Lamsal", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE011", name: "Mandira Kuwar", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE012", name: "Mohammad Sajid", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE013", name: "Nabaraj Thapa", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE014", name: "Nisha Giri", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE015", name: "Prerana Thapa", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE016", name: "Prerita Parajuli", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE017", name: "Rabina Kandel", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE018", name: "Rajib Ranabhat", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE019", name: "Sudhan Shrestha", program: "BICTE", year: "6th Sem"},
  { id: "ABC-2080-BICTE020", name: "Suraj B.K.", program: "BICTE", year: "6th Sem"},
];

const PROGRAMS = ["All Programs", ...new Set(STUDENTS.map((s) => s.program))];

// Max rows shown per page. Change this single number to show more/fewer.
const PAGE_SIZE = 10;

export default function StudentTable() {
  const [query, setQuery] = useState<string>("");
  const [program, setProgram] = useState<string>("All Programs");
  const [page, setPage] = useState<number>(1);

  // Whenever the search text or program filter changes, jump back to
  // page 1. This is done during render (React's documented pattern for
  // "adjusting state when an input changes") instead of in a useEffect,
  // which avoids an extra render pass.
  const filterKey = `${query}|${program}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);
  if (filterKey !== prevFilterKey) {
    setPrevFilterKey(filterKey);
    setPage(1);
  }

  const filtered = useMemo(() => {
    return STUDENTS.filter((s) => {
      const matchesProgram = program === "All Programs" || s.program === program;
      const matchesQuery =
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.id.toLowerCase().includes(query.toLowerCase());
      return matchesProgram && matchesQuery;
    });
  }, [query, program]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  // Derived instead of stored in state: if filtering shrinks the results
  // below the page you were on, this naturally "snaps back" to the last
  // valid page without needing an extra effect.
  const currentPage = Math.min(page, totalPages);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const rangeStart = filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const rangeEnd = (currentPage - 1) * PAGE_SIZE + paginated.length;

  return (
    <div>
      {/* Search + filter controls */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or student ID"
            className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>

        <select
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 sm:w-56"
        >
          {PROGRAMS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="min-w-full divide-y divide-gray-100 text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-600">Student ID</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Name</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Program</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Year/Semester</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {paginated.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-3 text-gray-500">{s.id}</td>
                <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">{s.name}</td>
                <td className="whitespace-nowrap px-4 py-3 text-gray-600">{s.program}</td>
                <td className="whitespace-nowrap px-4 py-3 text-gray-600">{s.year}</td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-gray-400">
                  No students match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      {filtered.length > 0 && (
        <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm text-gray-500">
            Showing {rangeStart}–{rangeEnd} of {filtered.length} students
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:bg-gray-50"
            >
              <ChevronLeft size={16} />
              Prev
            </button>

            <span className="px-2 text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>

            <button
              type="button"
              onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:bg-gray-50"
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
