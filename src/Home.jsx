import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

  const data = [
    {
      name: 'Good',
      average: 40.56,
      strikeRate: 87.96,
    },
    {
      name: 'Short',
      average: 12.32,
      strikeRate: 32.25,
    },
    {
      name: 'Full',
      average: 95.65,
      strikeRate: 103.25,
    },
    {
      name: 'Yorker',
      average: 23.25,
      strikeRate: 65.25,
    },
  ];


  const performanceData = [
    {
      name: 'Match 1',
      pastPerformance: 451,
      practicePerformance: 569,
    },
    {
      name: 'Match 2',
      pastPerformance: 562,
      practicePerformance: 562,
    },
    {
      name: 'Match 3',
      pastPerformance: 415,
      practicePerformance: 125,
    },
    {
      name: 'Match 4',
      pastPerformance: 562,
      practicePerformance: 362,
    },
    {
      name: 'Match 5',
      pastPerformance: 159,
      practicePerformance: 569,
    },
  ];
  

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>GROWTH RATE</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PAST RATIO</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PERFORMANCE INDEX RATIO</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='average' fill='#8884d8' name='Average' />
                <Bar dataKey='strikeRate' fill='#82ca9d' name='Strike Rate' />
              </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                width={500}
                height={300}
                data={performanceData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pastPerformance" stroke="#8884d8" activeDot={{ r: 8 }} name="Past Performance" />
                <Line type="monotone" dataKey="practicePerformance" stroke="#82ca9d" activeDot={{ r: 8 }} name="Practice Performance" />
              </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home