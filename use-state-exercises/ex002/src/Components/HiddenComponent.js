import React from 'react'

export function HiddenComponent({ showContent }) {
  return (
    <div>{showContent && <h1>Mostrar Conteúdo</h1>}</div>
  )
}