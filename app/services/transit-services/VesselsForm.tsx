"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Replace this with actual ship types if you have them in data
import { shipType } from "./data";

export default function SuezCanalTollCalculator() {
  const [formData, setFormData] = useState({
    shipName: "",
    shipType: "",
    direction: "",
    status: "",
    scnt: 0,
    scgt: 0,
    grt: 0,
    draft: 0,
    beam: 0,
    sdrRate: 0,
  });

  const [results, setResults] = useState({
    totalSDR: 0,
    totalUSD: 0,
    pilotage: 0,
    mooring: 0,
    portLight: 0,
    portAuthority: 0,
    quarantine: 0,
    portPolice: 0,
    sunders: 0,
    grandTotal: 0, // Add grandTotal to the state definition
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const calculateToll = () => {
    const { scnt, sdrRate, draft, beam } = formData;

    // Perform calculations without rounding, then format in setResults
    const totalSDR = scnt * sdrRate * 8.8;
    const totalUSD = totalSDR * sdrRate;
    const pilotage = scnt * 35.6;
    const mooring = draft * 53;
    const portLight = beam * 253.325;
    const portAuthority = scnt * 378.6625;
    const quarantine = 66; // Fixed value
    const portPolice = 100; // Fixed value
    const sunders = 400; // Fixed value

    const grandTotal =
      totalUSD +
      pilotage +
      mooring +
      portLight +
      portAuthority +
      quarantine +
      portPolice +
      sunders;

    // Format results with two decimals
    setResults({
      totalSDR: parseFloat(totalSDR.toFixed(2)),
      totalUSD: parseFloat(totalUSD.toFixed(2)),
      pilotage: parseFloat(pilotage.toFixed(2)),
      mooring: parseFloat(mooring.toFixed(2)),
      portLight: parseFloat(portLight.toFixed(2)),
      portAuthority: parseFloat(portAuthority.toFixed(2)),
      quarantine: parseFloat(quarantine.toFixed(2)),
      portPolice: parseFloat(portPolice.toFixed(2)),
      sunders: parseFloat(sunders.toFixed(2)),
      grandTotal: parseFloat(grandTotal.toFixed(2)), // Renamed for clarity
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <form className="lg:col-span-7" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <Label htmlFor="shipName">Ship Name</Label>
            <Input
              placeholder="Enter your ship name"
              id="shipName"
              value={formData.shipName}
              onChange={handleInputChange}
              className="mt-2"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="shipType">Ship Type</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, shipType: value })
              }
            >
              <SelectTrigger className="mt-2" id="shipType">
                <SelectValue placeholder="Please Select Ship Type" />
              </SelectTrigger>
              <SelectContent>
                {shipType.map((type, index) => (
                  <SelectItem key={index} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <Label htmlFor="direction">Direction</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, direction: value })
              }
            >
              <SelectTrigger className="mt-2" id="direction">
                <SelectValue placeholder="Please Select Direction" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Northbound">Northbound</SelectItem>
                <SelectItem value="Southbound">Southbound</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <Label htmlFor="status">Ship Status</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, status: value })
              }
            >
              <SelectTrigger className="mt-2" id="status">
                <SelectValue placeholder="Please Select Ship Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Laden">Laden</SelectItem>
                <SelectItem value="Ballast">Ballast</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <Label htmlFor="scnt">SCNT</Label>
            <Input
              required
              type="number"
              min={0}
              placeholder="Please Enter SCNT"
              id="scnt"
              value={formData.scnt}
              onChange={handleInputChange}
              className="mt-2"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="scgt">SCGT</Label>
            <Input
              required
              type="number"
              min={0}
              placeholder="Please Enter SCGT"
              id="scgt"
              value={formData.scgt}
              onChange={handleInputChange}
              className="mt-2"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="grt">GRT</Label>
            <Input
              required
              type="number"
              min={0}
              placeholder="Please Enter GRT"
              id="grt"
              value={formData.grt}
              onChange={handleInputChange}
              className="mt-2"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="draft">Draft</Label>
            <Input
              required
              type="number"
              min={0}
              placeholder="Please Enter Draft in Meter Unit"
              id="draft"
              value={formData.draft}
              onChange={handleInputChange}
              className="mt-2"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="beam">Beam</Label>
            <Input
              required
              type="number"
              min={0}
              placeholder="Please Enter Beam in Meter Unit"
              id="beam"
              value={formData.beam}
              onChange={handleInputChange}
              className="mt-2"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="sdrRate">SDR Rate</Label>
            <Input
              required
              type="number"
              min={0}
              placeholder="Please Enter SDR Rate"
              id="sdrRate"
              step="0.1"
              value={formData.sdrRate}
              onChange={handleInputChange}
              className="my-2"
            />
            <Link
              className="text-sm text-primary"
              target="_blank"
              href="https://www.imf.org/external/np/fin/data/rms_five.aspx"
            >
              SDR Today Rate
            </Link>
          </div>

          <Button
            className="w-full md:w-auto md:min-w-[250px]"
            onClick={calculateToll}
          >
            Calculate
          </Button>

          <p className="mt-2 text-sm">
            The aim of this calculator is to give an estimate only
          </p>
        </form>

        <div className="lg:col-span-5">
          <div className="sticky top-4 border p-3 rounded-md">
            <h4 className="text-xl text-primary font-bold">Calculations</h4>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="px-2 py-8 border-b my-2  text-lg text-gray-900 whitespace-nowrap dark:text-white">
                  <th className="py-2">Total SDR</th>
                  <td>{results.totalSDR}</td>
                </tr>
                <tr className="px-2 py-4 border-b my-2  text-lg text-gray-900 whitespace-nowrap dark:text-white">
                  <th className="py-2">Total USD</th>
                  <td>{results.totalUSD}</td>
                </tr>
                <tr className="px-2 py-4 border-b my-2  text-lg text-gray-900 whitespace-nowrap dark:text-white">
                  <th className="py-2">Pilotage</th>
                  <td>{results.pilotage}</td>
                </tr>
                <tr className="px-2 py-4 border-b my-2 text-lg text-gray-900 whitespace-nowrap dark:text-white">
                  <th className="py-2">Mooring</th>
                  <td>{results.mooring}</td>
                </tr>
                <tr className="px-2 py-4 border-b my-2 text-lg text-gray-900 whitespace-nowrap dark:text-white">
                  <th className="py-2">Port & Light</th>
                  <td>{results.portLight}</td>
                </tr>
                <tr className="px-2 py-4 border-b text-lg text-gray-900 whitespace-nowrap dark:text-white">
                  <th className="py-2">Port Authority</th>
                  <td>{results.portAuthority}</td>
                </tr>
                <tr className="px-2 py-4 border-b text-lg text-gray-900 whitespace-nowrap dark:text-white">
                  <th className="py-2">Quarantine</th>
                  <td>{results.quarantine}</td>
                </tr>
                <tr className="px-2 py-4 border-b text-lg text-gray-900 whitespace-nowrap dark:text-white">
                  <th className="py-2">Port Police</th>
                  <td>{results.portPolice}</td>
                </tr>
                <tr className="px-2 py-4 border-b text-lg text-gray-900 whitespace-nowrap dark:text-white">
                  <th className="py-2">Sunders</th>
                  <td>{results.sunders}</td>
                </tr>
                <tr className="text-xl font-bold bg-primary  rounded-md text-white">
                  <th className="py-2 px-4">Total</th>
                  <td>{results.totalUSD}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
