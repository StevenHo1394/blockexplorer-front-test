import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import SearchButton from "../../../assets/search.button";
import { SearchBar } from "./styled";

export default function HeaderSearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const clickBtn = () => {
    if (!searchValue) return;
    router.push(`/account/${searchValue}`)
  }

  return (
    <SearchBar>
      <input
        type="text"
        placeholder="Search your transaction, an address or a block"
        className="search-input"
        value={searchValue}
        onChange={onChangeSearch}
      />
      <SearchButton clickBtn={clickBtn} />
    </SearchBar>
  )
}