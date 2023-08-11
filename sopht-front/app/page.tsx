import Link from "next/link";
import { ComputerForm } from "./computer-form";
type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: Props) {
  const showModal = searchParams?.modal;

  return (
    <div>
      <Link
        href="/?modal=true"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add computer to database
      </Link>
      <Link
        href="/dashboard"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Dashboard
      </Link>
      {showModal && <ComputerForm />}
   </div>
   )
  };