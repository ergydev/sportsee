import { PolarAngleAxis, PolarRadiusAxis, RadarChart, ResponsiveContainer, Radar, PolarGrid } from 'recharts'
import { mapActivity } from '../../services/hooks/useUserPerformance';
import './radarComponent.css'



function RadarComponent({ userPerformance }) {
    
    
    const {data, kind } = userPerformance
    
    if (!data || !kind) {
        return null
    }
    

    const performanceData = data.map((item) => ({
        kind: mapActivity(item.kind),
        value: item.value,
    }));

    return (

        <div className='radar__wrapper'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={performanceData}  cx="50%" cy="50%" outerRadius={65} >
                    <PolarGrid
                        gridType='polygon'
                        radialLines={false}
                        polarRadius={[0, 10, 27, 49, 72, 95]}
                        stroke='#fff'

                    />
                    <PolarAngleAxis
                        dataKey='kind'
                        tickFormatter={mapActivity}
                        tick={{ fill: '#fff' }}
                        
                        
                    />
                    <PolarRadiusAxis tick={false} axisLine={false} />
                    <Radar  dataKey='value' fill='#E60000' fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RadarComponent