import React from 'react'
import { useLoaderData } from 'react-router-dom'
export const Text = () => {
    const data = useLoaderData()
    console.log(data);
  return (
    <div>text</div>
  )
}
