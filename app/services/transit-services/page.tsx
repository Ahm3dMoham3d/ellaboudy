import type { Metadata } from "next";
import SuezCanalTollCalculator from "./VesselsForm";

export const metadata: Metadata = {
  title: "Transit Services",
  description:
    "Our Transit Services offer reliable and efficient transportation for both cargo and passengers across various marine routes. We ensure timely departures and arrivals, providing comprehensive logistics support to meet your specific needs. With a focus on safety and customer satisfaction, we strive to optimize your transit experience.",
};

export default function page() {
  return (
    <>
      <h4 className="text-4xl font-bold mb-4">
        <span className="text-primary">Vessels</span> Tolls Calculator
      </h4>
      <div className="bg-primary/20 p-2 rounded-md mb-4">
        <ul>
          <li className="mb-2">
            - The aim of this calculator is to give an estimate only . and the
            final result subject to final official invoices received from the
            local authorities
          </li>

          <li className="mb-2">
            - Currencies (SDR to USD) are updated on a daily basis by data
            provided from the International Monetary Fund.
          </li>

          <li className="mb-2">
            - The calculator is based on minimum 3 ton crane capacity for all
            estimates to lift mooring boat .if your vessel is not sufficiently
            equipped, Please{" "}
            <a
              className="text-primary"
              href="mailto:info@yasa-international.com"
            >
              contact us directly
            </a>{" "}
            to clarify if any extra mooring boat is needed.
          </li>

          <li className="mb-2">
            - The Suez Canal Authority (SCA) has implemented a rebate system as
            an incentive to attract more ships to use the Suez Canal instead of
            alternative routes. Please{" "}
            <a
              className="text-primary"
              href="mailto:info@yasa-international.com"
            >
              contact us directly
            </a>{" "}
            for more information about rebate system{`'`}s .
          </li>
          <li className="mb-2">
            N.B : Please{" "}
            <a
              className="text-primary"
              href="mailto:info@yasa-international.com"
            >
              contact us directly
            </a>{" "}
            for any further information or Clarification.
          </li>
        </ul>
      </div>
      <SuezCanalTollCalculator />
    </>
  );
}
