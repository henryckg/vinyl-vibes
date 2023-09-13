import React from 'react'
import './MenuButton.css'
import Button from 'react-bootstrap/Button'

export default function MenuButton({text}) {
    return (
        <Button variant="outline-light" className="button">{text}</Button>
    )
}
