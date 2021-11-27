import styled from "styled-components";
import CoinInfo from "../components/CoinInfo/index";
import CoinCharts from "../components/CoinCharts/index";
import "normalize.css";
import instance from "../utils/instance";
import { useContext, useEffect } from "react";
import { AppContext } from "../utils/context";
import MainLayout from "../containers/Main";

export default function Home({ dataTransactions, dataStats, dataMeta }) {
  const { setPriceChartValues, setStats, setMeta } = useContext(AppContext)

  useEffect(() => {
    setPriceChartValues(dataTransactions)
  }, [dataTransactions])

  useEffect(() => {
    setStats(dataStats)
  }, [dataStats])

  useEffect(() => {
    setMeta(dataMeta)
  }, [dataMeta])

  return (
    <div>
    
      <MainLayout 
        title="Chad Scan - IDEP Network Block Explorer"
        main
        name="description"
        content="Easiest way to get information on the IDEP Network. "
      >
        <SiteWrapper>
          <div className="container">
            <CoinInfo />
            <CoinCharts />
          </div>
        </SiteWrapper>
      </MainLayout>
    </div>
  );
}

export async function getServerSideProps() {
  // const resTransactions = await instance.get('/transactions/fee/agg?by=day')
  // const dataTransactions = await resTransactions.data

  // const resStats = await instance.get('/validators')
  // const dataStats = await resStats.data

  // const resMeta = await instance.get('/meta')
  // const dataMeta = await resMeta.data

  return {
    props: {
      dataTransactions : [],
      dataStats: [],
      // dataMeta
    }
  }
}

const SiteWrapper = styled.div``;
