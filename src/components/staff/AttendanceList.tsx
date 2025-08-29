import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

// Define the TypeScript interface for the table rows
interface Attendance {
  id: number; // Unique identifier for each record
  staffName: string; // Staff member's name
  date: string; // Date of attendance
  status: "Present" | "Absent" | "Late" | "On Leave"; // Status of attendance
}

// Define the table data using the interface
const tableData: Attendance[] = [
  {
    id: 1,
    staffName: "John Doe",
    date: "2024-10-26",
    status: "Present",
  },
  {
    id: 2,
    staffName: "Jane Smith",
    date: "2024-10-26",
    status: "Absent",
  },
  {
    id: 3,
    staffName: "Peter Jones",
    date: "2024-10-26",
    status: "Late",
  },
  {
    id: 4,
    staffName: "Susan Williams",
    date: "2024-10-26",
    status: "On Leave",
  },
  {
    id: 5,
    staffName: "David Brown",
    date: "2024-10-26",
    status: "Present",
  },
];

export default function AttendanceList() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Attendance
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Staff Name
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Date
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((attendance) => (
              <TableRow key={attendance.id} className="">
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {attendance.staffName}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {attendance.date}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      attendance.status === "Present"
                        ? "success"
                        : attendance.status === "Absent"
                        ? "error"
                        : attendance.status === "Late"
                        ? "warning"
                        : "info"
                    }
                  >
                    {attendance.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
