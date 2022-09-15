import React, { useEffect, useState } from 'react'
import { API } from './API'

const ExhibitTitle = () => {
  return (
    <div className="Exhibit-Title-Wrapper">
      <h2 className="Exhibit-Title">Sextant Exhibit</h2>
    </div>
  )
}

const ExhibitItem = ({ ipAddress }) => {
  const ItemTitle = () => {
    return ipAddress.length > 14 ? (
      <h2>Your IP (IPv6) Address is:</h2>
    ) : (
      <h2> Your IP (IPv4) Address is:</h2>
    )
  }
  return (
    <div className="Exhibit-Card">
      <ItemTitle />
      <p>{ipAddress}</p>
    </div>
  )
}

export const Exhibit = () => {
  const [ipv4, setIpv4] = useState([])
  const [ipv6, setIpv6] = useState([])
  useEffect(() => {
    API('https://api.ipify.org?format=json')
      .then((res) => {
        setIpv4(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])
  useEffect(() => {
    API('https://api64.ipify.org?format=json')
      .then((res) => {
        setIpv6(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <div className="Exhibit-Wrapper">
      <ExhibitTitle />
      <ExhibitItem ipAddress={ipv4} />
      <ExhibitItem ipAddress={ipv6} />
    </div>
  )
}
