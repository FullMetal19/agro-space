import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';


const generatesNodes = (data , x , y ) => {

  return Object.keys(data).map((key, index) => {
    const sdata = data[key];
    x = x + 200
    return { id: 's'+index, type: 'default', position: { x: x, y: y }, data: { label: sdata.sname } }
  });
};

// const generatepNodes = (data , x , y ) => {

//   return Object.keys(data).map((key, index) => {
//     const sdata = data[key];
//     x = x + 200
//     return { id: 's'+index, type: 'default', position: { x: x, y: y }, data: { label: sdata.sname } }
//   });
// };



const nodes = [

  { id: '1', type: 'default', position: { x: 300, y: 50 }, data: { label: 'Project' } },

  { id: '2', type: 'default', position: { x: 100, y: 200 }, data: { label: 'Tomate' } },
  { id: '3', type: 'default', position: { x: 300, y: 200 }, data: { label: 'Arachide' } },
  { id: '4', type: 'default', position: { x: 500, y: 200 }, data: { label: 'Oignon' } },

  { id: '5', type: 'default', position: { x: 100, y: 350 }, data: { label: 'ID-appareil' } },
  { id: '6', type: 'default', position: { x: 300, y: 350 }, data: { label: 'ID-appareil' } },
  { id: '7', type: 'default', position: { x: 500, y: 350 }, data: { label: 'ID-appareil' } },

];

const edges = [

  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e1-4', source: '1', target: '4', animated: true },

  { id: 'e2-5', source: '2', target: '5', animated: true },
  { id: 'e3-6', source: '3', target: '6', animated: true },
  { id: 'e4-7', source: '4', target: '7', animated: true },

];

export function Architecture({ pdata, sdata }) 
{
  // const pnode = { id: '1', type: 'default', position: { x: 300, y: 50 }, data: { label: pdata.pname } }
  // const snode = generatesNodes(sdata , 100 , 200 )
  // const nodes = [ snode ]
  // const edges = []

  // console.log( snode )
  // console.log( data.pname )

  return (
    <div style={{ height: '75vh', width: '100%' }}>
      <ReactFlow nodes={nodes} edges={edges}  >
        {/* <MiniMap /> */}
        <Controls />
        <Background color="#aaa" gap={20} size={2} />
      </ReactFlow>
    </div>
  );
}

