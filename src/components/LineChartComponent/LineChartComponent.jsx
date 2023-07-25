import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line, Legend, YAxis } from 'recharts'
import { DayOfWeek, renderLegend } from '../../services/hooks/useAverageSession';
import './linechart.css'

function LineChartComponent({ sessions }) {

    if (!sessions || sessions.length === 0) {
        return <div>Aucune donnée disponible.</div>;
    }
    
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
                    <YAxis 
                        dataKey="sessionLength"
                        domain={[0, "dataMax + 30"]}
                        hide={true}
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