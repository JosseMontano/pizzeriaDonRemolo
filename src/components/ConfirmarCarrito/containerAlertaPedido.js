import React from 'react'
import { AlertaPedido } from "./alertaPedido";

const ContainerAlertaPedido = ({shoppings}) => {
  return (
    <div className="">
    <h1> Resumen del pedido </h1>
    {shoppings.map((shop) => (
      <AlertaPedido shop={shop} />
    ))}
  </div>
  )
}

export default ContainerAlertaPedido