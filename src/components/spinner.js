import React from 'react'
import Spin from '../components/spinner.gif'
export default function Spinner() {
    return (
        <div className="text-center">
            <img src={Spin} alt="spinner" />
        </div>
    )
}
