import './barschart.css'
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, CartesianGrid } from 'recharts'


function BarsChart({ sessions }) {
    
    if (!sessions || sessions.length === 0) {
        return <div>Aucune donnée disponible.</div>;
    }

    const data = sessions.map((session, index) => ({
        name: index +1,
        kilogram: session.kilogram,
        calories: session.calories
    }))
    


    const formatValue = (value, name) => {
        if (name === 'kilogram') {
            return `${value}kg`
        }
        if (name === 'calories') {
            return `${value}Kcal`
        }
        return value
    }

    return (
        <div className='barschart__container'>
            <div className="barschart__container__text">
                <h3 className='barstchart__title'> Activité quotidienne</h3>
                <div className='barschart__chart--container'>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={data}  >
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
                            <XAxis dataKey="name" tickLine={false} axisLine={false} />
                            <YAxis orientation="right" tickLine={false} axisLine={false}  type='number' domain={['kilogram', 'kilogram' + 10 ]} />
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
                                dataKey="kilogram"
                                fill='#282D30'
                                radius={[10, 10, 0, 0]}
                                barSize={10}
                            />
                            <Bar
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