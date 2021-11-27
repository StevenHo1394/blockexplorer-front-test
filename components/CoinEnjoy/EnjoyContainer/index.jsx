import { Container, Enjoy, EnjoyHeading, Title, Text, Button, Typography } from './styled'

export default function EnjoyContainer() {
    return (
        <Container>
            <Enjoy>
                <EnjoyHeading>
                    <Title>
                        You’ve thought about it, now it’s time.
                    </Title>
                    <Text>
                        Create a Wallet. Sign up for the Exchange. Buy Bitcoin in minutes.
                    </Text>
                </EnjoyHeading>
                <Button>
                    <Typography>
                        Get Started
                    </Typography>
                </Button>
            </Enjoy>
        </Container>
    )
}