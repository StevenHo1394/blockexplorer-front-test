import { useRouter } from 'next/dist/client/router'
import React from 'react'
import styled from 'styled-components';
import AccountDetailID from '../../components/Account/AccountDetailID';
import MainLayout from '../../containers/Main';

const SiteWrapper = styled.div``;

function AccountDetaiIDRoute() {
  const { query } = useRouter();
  return (
    <div>
      <MainLayout
        title="Account Detail"
        name="description"
        content="The account detail."
      >
        <SiteWrapper>
          <div className="container">
            <AccountDetailID id={query.id} />
          </div>
        </SiteWrapper>
      </MainLayout>
    </div>
  )
}

export default AccountDetaiIDRoute


