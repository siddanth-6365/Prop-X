import React from 'react'
import CollectionsSection from "./CollectionsSection";
import HeroSection from "./HeroSection";
import StatsTable from "./StatsTable";


export default function Home({account,web3Handler}:any) {
  return (
    <>
      <HeroSection account={account} web3Handler={web3Handler} />
      <StatsTable />
      <CollectionsSection title="Notable Collections" />

    </>
  )
}
