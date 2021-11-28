import { useContext } from "react";
import { AppContext } from "../../../utils/context";
import CoinCardComponent from "./CoinCard";
import { CoinData } from "./styled";

export default function CoinDataComponent() {
  const { meta, stats } = useContext(AppContext);

  return (
    <CoinData>
      <CoinCardComponent title='Block height' body={`${meta?.height || ' '}`} />
      <CoinCardComponent title='Latest validator' body={`${meta?.latest_validator || ' '}`} />
      <CoinCardComponent title='Block time' body={`${meta?.block_time || ' '}`} />
      <CoinCardComponent title='Average validator fee' body={`${meta?.validator_avg_fee ? Number(meta.validator_avg_fee).toFixed(2) :  ' '}`} />
      <CoinCardComponent title='Active validators' body={`${stats?.length || ' '}`} />
    </CoinData>
  )
}
