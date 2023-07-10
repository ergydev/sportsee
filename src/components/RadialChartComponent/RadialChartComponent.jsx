import { Legend, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import './radialChartComponent.css'

function RadialChartComponent() {

    const todayScore = 0.10

    const data = [  
        {
            value: todayScore * 100
        }
    ]

    return ( 
        <div className="radial__wrapper">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart

                    data={data}
                    startAngle={360}
                    endAngle={0}
                >
                    <RadialBar 
                        dataKey="value"
                        fill='#FF0000'
                        // background={{ fill: '#FBFBFB'}}
                        stroke-strokeLinejoin='round'
                        cornerRadius={100}
                    />
                    <Legend />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
     );
}

export default RadialChartComponent;