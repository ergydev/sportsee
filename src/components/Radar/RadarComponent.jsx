import { PolarAngleAxis, PolarRadiusAxis, RadarChart, ResponsiveContainer, Radar, PolarGrid } from 'recharts'
import './radarComponent.css'



function RadarComponent({ userPerformance }) {

    // const data = userPerformance.data && userPerformance.data.data;
    const data = userPerformance && userPerformance.data && userPerformance.data.data;
    const kind = userPerformance && userPerformance.data && userPerformance.data.kind;


    if (!data || !kind) {
        return null;
    }

    // map and convert activity name in french 
    function mapActivity(kind) {
        const activityMap = {
            1: "cardio",
            2: "énergie",
            3: "endurance",
            4: "force",
            5: "vitesse",
            6: "intensité",
        }
        return activityMap[kind] || kind
    }

    const performanceData = data.map((item) => ({
        kind: mapActivity(item.kind),
        value: item.value,
    }));

    return (

        <div className='radar__wrapper'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={performanceData} innerRadius={10} outerRadius={60} >
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
                    <Radar name='' dataKey='value' fill='#E60000' fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RadarComponent