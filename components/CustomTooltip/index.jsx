export const CustomTooltip = ({ active, payload, label }) => {
    const title = payload[0]?.payload.title
    const value = payload[0]?.payload.value
    let date

    if (label) {
        date = new Date(label).toLocaleTimeString().substr(0, 8)
    } else {
        date = new Date(payload[0]?.payload.time).toLocaleTimeString().substr(0, 8)
    }

    if (active) {
        return (
            <div className="tooltip">
                <h4>
                    Title: {title}
                </h4>
                <h4>
                    Value: {value}
                </h4>
                {
                    payload[0]?.payload.time ?
                        <h5>
                            Time: {date}
                        </h5>
                        : null
                }
            </div>
        )
    }

    return null
}