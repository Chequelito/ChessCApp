import React, { useState } from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd'
import StyleMenu from './StyleMenu'

export default function Piece({
  piece: { type, color },
  position,
}) {
  const [{ isDragging }, drag, preview] = useDrag({
    item: {
      type: 'piece',
      id: `${position}_${type}_${color}`,
    },
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() }
    },
  })
  const [skin, setSkin] = useState('ChessCApp');
  const pieceImg = require(`./assets/${skin}/${type}_${color}.png`)
  return (

    
    <>
      <DragPreviewImage connect={preview} src={pieceImg} />
      <div
        className="piece-container"
        ref={drag}
        style={{ opacity: isDragging ? 0 : 1 }}
      >
        <img onSelect={() => {setSkin(!skin)}} src={pieceImg} alt="" className="piece" />
      </div>
    </>
  )
}
