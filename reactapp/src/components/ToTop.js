import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: #88bdd7;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    position: fixed;
    bottom: 20px;
    right: 30px;
    transition: opacity 0.4s;
    opacity: ${(props) => (props.isVisible ? '0.8' : '0')};
    pointer-events: ${(props) => (props.isVisible ? 'auto' : 'none')};

    &:hover {
        background-color: #555;
    }
`

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Button isVisible={isVisible} onClick={handleScrollToTop}>
            <i className="fas fa-chevron-up"></i>
        </Button>
    )
}

export default ScrollToTopButton
