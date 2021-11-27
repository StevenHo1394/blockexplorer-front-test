import React from 'react'
import { RightCourse, RightLabel, RightRow, RightValue, TotalRightWrapper } from './styled'

const TotalRight = () => {
    return (
        <TotalRightWrapper>
            <RightRow>
                <RightLabel>
                    Total
                </RightLabel>
                <RightValue>
                    894598.11990555 IDEP
                </RightValue>
                <RightCourse>
                    ~$35.4708m ($39.65/IDEP)
                </RightCourse>
            </RightRow> 
        </TotalRightWrapper>
    )
}

export default TotalRight
