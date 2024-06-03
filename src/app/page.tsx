import Link from "next/link";

export default function Home() {
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col'>
      <h1 className='text-3xl font-bold mb-4'>Settlement Negotiation App</h1>
      <div className='container mx-auto text-center p-4 w-6/12 bg-gray-100 shadow-xl shadow-gray-300 rounded-xl'>
        <p className='mb-4 text-2xl font-bold'>Continue As</p>
        <div className='flex justify-center space-x-4'>
          <Link href='/party-a'>
            <p className='px-4 py-2 bg-blue-500 text-white rounded text-4xl'>
              Party A
            </p>
          </Link>
          <Link href='/party-b'>
            <p className='px-4 py-2 bg-green-500 text-white rounded text-4xl'>
              Party B
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
