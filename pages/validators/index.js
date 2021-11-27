import { useContext, useEffect } from "react";
import styled from "styled-components";
import BlockContainerComponent from "../../components/CoinCharts/BlockContainer";
import MainLayout from "../../containers/Main";
import { AppContext } from '../../utils/context';
import instance from "../../utils/instance";

export default function Voting({ dataStats }) {
  const { setStats } = useContext(AppContext)

  useEffect(() => {
    setStats(dataStats)
  }, [dataStats])

  return (
    <MainLayout
      title="Chad Scan - Voting"
    >
      <SiteWrapper>
        <div className="container" >
          <BlockContainerComponent />
        </div>
      </SiteWrapper>
    </MainLayout>
  )
}

const SiteWrapper = styled.div``;

export async function getServerSideProps() {
  // const resStats = await instance.get('/validators/top/jailed')
  // const dataStats = await resStats.data

  return {
    props: {
      dataStats: [],
    }
  }
}