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

    return (
        <div className='barschart__container'>
            <div className="barschart__container__text">
                <h3 className='barstchart__title'> Activité quotidienne</h3>
                <div className='barschart__chart--container'>
                    <ResponsiveContainer width={835} height={250}>
                        <BarChart data={data}  >
                            <Legend verticalAlign='top' align='right' iconType='circle' iconSize='8' height={40}/>
                            <CartesianGrid strokeDasharray="2 2" horizontal={true} vertical={false} />
                            <XAxis dataKey="name" tickLine={false} axisLine={false} />
                            <YAxis orientation="right" tickLine={false}  axisLine={false}  />
                            <Tooltip
                                animationEasing='ease-out'
                                // content={} 
                                offset={40}
                                wrapperStyle={{ outline: "none" }}
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