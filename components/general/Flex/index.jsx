import styled from "styled-components";

const SFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

const Flex = (props) => {
    return <SFlex {...props} />
}

export default Flex