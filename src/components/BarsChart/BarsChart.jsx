import './barschart.css'
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, CartesianGrid } from 'recharts'


function BarsChart() {
    
    const data = [{name: 'Activités', calories: 1930, protéines: 155}]

    return (
        <div className='barschart__container'>
            <div className="barschart__container__text">
                <h3 className='barstchart__title'> Activité quotidienne</h3>
                <div className='barschart__legend'>
                    <ResponsiveContainer>
                        <BarChart width="835" height="320">
                            <Legend />
                            <CartesianGrid strokeDasharray="2 2" horizontal={true} vertical={false} />
                            <XAxis dataKey="name" tickLine={false} axisLine={false} />
                            <YAxis orientation="right" tickLine={false} axisLine={false} />
                            <Tooltip
                                animationEasing='ease-out'
                                // content={} 
                                offset={40}
                                wrapperStyle={{ outline: "none" }}
                            />
                            <Bar
                                dataKey="kilogram"
                                name='kg'
                                fill='#282D30'
                                radius={[10, 10, 0, 0]}
                                barSize={10}
                            />
                            <Bar
                                dataKey="calories"
                                name='Kcal'
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