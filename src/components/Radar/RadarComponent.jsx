import { PolarAngleAxis, PolarRadiusAxis, RadarChart, ResponsiveContainer, Radar, PolarGrid } from 'recharts'
import './radarComponent.css'

const data = [
    {kind: 'cardio', value: 80 },
    {kind: 'energy', value: 120 },
    {kind: 'endurance', value: 140 },
    {kind: 'strength', value: 50 },
    {kind: 'speed', value: 200 },
    {kind: 'intensity', value: 90 },
]

//map and convert activity name in french 
const mapActivity = (kind) => {
    const activityMap = {
        cardio: "cardio",
        energy: "énergie",
        endurance: "endurance",
        strength: "force",
        speed: "vitesse",
        intensity: "intensité",
    }
    return activityMap[kind] || kind
}

function RadarComponent() {
    return(

        <div className='radar__wrapper'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={data} innerRadius={10} outerRadius={60} >
                    <PolarGrid 
                        gridType='polygon' 
                        radialLines={false}
                        polarRadius={[0, 10, 27, 49, 72, 95]}
                        stroke='#fff'
                        
                    />
                    <PolarAngleAxis 
                        dataKey='kind'
                        tickFormatter={mapActivity}
                        tick={{fill: '#fff'}}
                    />
                    <PolarRadiusAxis tick={false} axisLine={false} />
                    <Radar name='' dataKey='value'  fill='#E60000' fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RadarComponent