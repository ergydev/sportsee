import './barschart.css'
import { formatValue } from '../../services/hooks/useUserActivity';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, CartesianGrid } from 'recharts'


function BarsChart({ sessions }) {
    
    if (!sessions || sessions.length === 0) {
        return <div>Aucune donnée disponible.</div>;
    }

    const data = sessions.map((session) => {
        const day = session.day.split("-")[2]
        return{
            name: day,
            kilogram: session.kilogram,
            calories: session.calories
        }
    })
    
    return (
        <div className='barschart__container'>
            <div className="barschart__container__text">
                <h3 className='barstchart__title'> Activité quotidienne</h3>
                <div className='barschart__chart--container'>
                    <ResponsiveContainer width="100%" height={250} >
                        <BarChart 
                            data={data} 

                        >
                            <Legend 
                                verticalAlign='top' 
                                align='right' 
                                iconType='circle' 
                                iconSize='8' 
                                height={80}
                                payload={[
                                    { value: "Poids (kg)", type: "circle" , color: '#282D30'},
                                    { value: "Calories brûlées (Kcal)", type: "circle", color: '#E60000'},
                                ]}
                            />
                            <CartesianGrid strokeDasharray="2 2" horizontal={true} vertical={false} />
                            <XAxis 
                                dataKey="name" 
                                tickLine={false} 
                                axisLine={false} 
                            />
                            <YAxis 
                                yAxisId="kilogram"
                                orientation="right" 
                                tickLine={false} 
                                axisLine={false} 
                                dataKey="kilogram" 
                                type='number' 
                                domain={["dataMin - 2"  , "dataMax +1"]} 
                                allowDataOverflow={true}
                                allowDecimals={false}
                            />
                            <YAxis 
                                yAxisId="calories" 
                                dataKey="calories" 
                                type="number" 
                                domain={['dataMin - 20', 'dataMax + 10']}  
                                hide={true}
                            />
                            <Tooltip
                                animationEasing='ease-out'
                                offset={40}
                                wrapperStyle={{ outline: "none" }}
                                formatter={formatValue}
                                labelFormatter=''

                                content={({ payload }) => {
                                    if (payload && payload.length) {
                                        const { kilogram, calories } = payload[0].payload
                                        return (
                                            <div className='custom-tooltip'>
                                                <p>{`${kilogram}kg`}</p>
                                                <p>{`${calories}Kcal`}</p>
                                            </div>
                                        )
                                    }
                                    return null
                                }}
                            />
                            <Bar
                                yAxisId="kilogram"
                                dataKey="kilogram"
                                fill='#282D30'
                                radius={[10, 10, 0, 0]}
                                barSize={10}
                            />
                            <Bar
                                yAxisId="calories"
                                dataKey="calories"
                                fill='#E60000'
                                radius={[10, 10, 0, 0]}
                                barSize={10}
                                
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default BarsChart