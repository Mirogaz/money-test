import React from 'react';
import { Link } from 'react-router-dom'
import {Button} from '../Button/Button';
import style from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <div className={ style.container }>
            <div className={style.thumbnail}>
                <h1>money</h1>
                <Link 
                    to='#'
                    >наш telegram канал
                </Link>
            </div>
            <div className={style.buttons}>
                <Button 
                    onClick={()=>{alert('главная!')} }   
                    name='главная'/>
                <Button 
                    onClick={()=>{alert('рассылка по каналам!')} }name='рассылка по каналам'/>
            </div>
        </div>
    )
}
