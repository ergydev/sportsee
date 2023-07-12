import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line, Legend } from 'recharts'
import './linechart.css'

function LineChartComponent() {

    const data = [
        {
            "userId": 12,
            "sessions": [
                {
                    "day": 1,
                    "sessionLength": 30
                },
                {
                    "day": 2,
                    "sessionLength": 23
                },
                {
                    "day": 3,
                    "sessionLength": 45
                },
                {
                    "day": 4,
                    "sessionLength": 50
                },
                {
                    "day": 5,
                    "sessionLength": 0
                },
                {
                    "day": 6,
                    "sessionLength": 0
                },
                {
                    "day": 7,
                    "sessionLength": 60
                }
            ]
        }
    ]

    const DayOfWeek = (day) => {
        const dayMap = {
            "1": "L",
            "2": "M",
            "3": "M",
            "4": "J",
            "5": "V",
            "6": "S",
            "7": "D",
        }
        return dayMap[day] || day
    }

    function renderLegend() {
        return (
            <p className='average_session--legend'>Durée moyenne des sessions</p>
        )
    }

    const sessions = data[0].sessions

    const dataSession = sessions.map((session) => ({
        name: session.day,
        sessionLength: session.sessionLength,
    }));

    return (
        <div className='average_session--wrapper'>
            <ResponsiveContainer width={229} height={263}>
                <LineChart data={dataSession}>
                    <Legend verticalAlign='top' height={75} content={renderLegend} />
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        tickFormatter={DayOfWeek}
                        axisLine={false}
                        tick={{ fill: '#fff' }}
                    />
                    <Tooltip
                        animationEasing='ease-out'
                        offset={40}
                        wrapperStyle={{ outline: "none" }}
                        content={({ payload }) => {
                            if (payload && payload.length) {
                                const { sessionLength } = payload[0].payload
                                return (
                                    <div className='average_session--custom--tooltip'>
                                        <p> {`${sessionLength} min`} </p>
                                    </div>
                                )
                            }
                        }}
                    />
                    <Line type="monotoneX" dataKey="sessionLength" stroke='#fff' strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChartComponent