import { useContext, useEffect } from "react";
import styled from "styled-components";
import VotingPower from "../../components/VotingPower";
import { votingColors } from "../../config/chart";
import MainLayout from "../../containers/Main";
import { AppContext } from '../../utils/context';
import instance from "../../utils/instance";

export default function Voting({ votingChart }) {
    const { setVoting } = useContext(AppContext)

    useEffect(() => {
        const newVotingChart = votingChart.map((item, i) => {
            const colorId = i % votingColors.length
            if (votingColors[colorId]) {
                return {
                    ...item,
                    color: votingColors[colorId].color,
                    value: Number.parseInt(item.value)
                }
            }
        }

        )

        setVoting(newVotingChart)
    }, [votingChart])

    return (
        <MainLayout
            title="Chad Scan - Voting"
        >
            <SiteWrapper>
                <div className="container" >
                    <VotingPower />
                </div>
            </SiteWrapper>
        </MainLayout>
    )
}

export async function getServerSideProps() {
    // const res = await instance.get('/staking/pie')
    // const data = await res.data

    return {
        props: {
            votingChart: []
        }
    }
}

const SiteWrapper = styled.div``;