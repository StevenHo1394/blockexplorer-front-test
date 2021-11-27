import styled from "styled-components";

export const BlockContainer = styled.div`
    display: flex;
    //Changes
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid #383057;
    padding-bottom: 2.5rem;
        // & > * {
        //     padding-top: 1.25em;
        //     width: 50%;
        // }

        .latest-block {
            padding: 2.5rem 0;
            border-right: 1px solid #383057;
            @media (max-width: 991px) {
                border: transparent;
            }
        }

        .latest-transaction {
            padding-left: 3rem;
        }

        @media (max-width: 992px) {
            flex-direction: column;
        
            .latest-transaction {
                padding: 0;
            }
        }
    }
`;