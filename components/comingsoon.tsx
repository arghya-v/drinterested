import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const ComingSoon = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen text-center ${poppins.className}`}
      style={{ backgroundColor: '#2C3E4F', color: '#FFFFFF' }}
    >
      <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg text-[#cfd8e3] mb-6">
        We are working hard to bring you something amazing.
      </p>
      <div className="border-t-4 border-[#4A6274] w-32 my-4"></div>
      <p className="text-sm">Stay Tuned!</p>
    </div>
  );
};

export default ComingSoon;