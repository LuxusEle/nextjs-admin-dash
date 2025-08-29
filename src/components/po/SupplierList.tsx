import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

// Define the TypeScript interface for the table rows
interface Supplier {
  id: number; // Unique identifier for each supplier
  name: string; // Supplier name
  contactPerson: string; // Contact person
  email: string; // Supplier's email
  phone: string; // Supplier's phone number
}

// Define the table data using the interface
const tableData: Supplier[] = [
  {
    id: 1,
    name: "Acme Inc.",
    contactPerson: "John Doe",
    email: "john.doe@acme.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Stark Industries",
    contactPerson: "Jane Smith",
    email: "jane.smith@stark.com",
    phone: "123-456-7890",
  },
  {
    id: 3,
    name: "Wayne Enterprises",
    contactPerson: "Peter Jones",
    email: "peter.jones@wayne.com",
    phone: "123-456-7890",
  },
  {
    id: 4,
    name: "Cyberdyne Systems",
    contactPerson: "Susan Williams",
    email: "susan.williams@cyberdyne.com",
    phone: "123-456-7890",
  },
  {
    id: 5,
    name: "Oscorp",
    contactPerson: "David Brown",
    email: "david.brown@oscorp.com",
    phone: "123-456-7890",
  },
];

export default function SupplierList() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Suppliers
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
                Name
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Contact Person
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Email
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Phone
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((supplier) => (
              <TableRow key={supplier.id} className="">
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {supplier.name}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {supplier.contactPerson}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {supplier.email}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {supplier.phone}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
