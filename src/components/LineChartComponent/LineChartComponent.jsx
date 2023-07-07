import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line, Legend, ReferenceArea } from 'recharts'
import './linechart.css'

function LineChartComponent()  {

    const data = [
        {
            "name": "1",
            "sessionLength": "30"
        },
        {
            "name": "2",
            "sessionLength": "40"
        },
        {
            "name": "3",
            "sessionLength": "50"
        },
        {
            "name": "4",
            "sessionLength": "30"
        },
        {
            "name": "5",
            "sessionLength": "30"
        },
        {
            "name": "6",
            "sessionLength": "50"
        },
        {
            "name": "7",
            "sessionLength": "50"
        },
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

    function renderLegend(){
        return(
            <p className='average_session--legend'>Durée moyenne des sessions</p>
        )
    }

    return(
        <div className='average_session--wrapper'>
            <ResponsiveContainer width={229} height={263}>
                <LineChart  data={data}>
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
                            if(payload && payload.length) {
                                const { sessionLength } = payload[0].payload
                                return(
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