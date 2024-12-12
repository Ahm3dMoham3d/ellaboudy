import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Legal Information",
  description:
    "YASA International Marine Services operates in full compliance with international maritime laws and regulations, ensuring the highest standards of safety, transparency, and ethical conduct in all our services. Our legal policies cover all aspects of marine logistics, including terms of service, privacy policy, and liability limitations.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function page() {
  return (
    <div>
      <h1 className='text-4xl font-bold mb-4'>
        Legal <span className='text-primary'>Information</span>
      </h1>
    </div>
  );
}
