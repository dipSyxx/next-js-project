//! Рендер подробної інфи про користувача
//? Цей файл витягає інформацію про користувача і відображає її на екрані

import React from 'react'
import Heading from './Heading'

type contactProps = {
    contact: any
}

export const ContactInfo = ({contact}:contactProps) => {
    // Витягає інформацію контакта за допомогою деструктивності
    const {name,email,address} = contact || {};

    //  і додатково витягаєм інформацію з адреса
    const {street,suite,city,zipcode} = address || {};

        // Условія якщо contact не існує то повертаємо таке значення..
    if (!contact) {
        return <Heading tag='h3' text='Empty contact..' />
    }


    //? Основний блок розмічення
    return (
        <>
        <Heading tag='h3' text={name} />
        
        {/* Відобреження */}
        <div>
            <strong>Email: </strong>
            {email}
        </div>
        
        {/* Відобреження */}
        <div>
            <strong>Address: </strong>
            {/* збираються значення адресу */}
            {`${street}, ${suite}, ${city}, ${zipcode}`}
        </div>
        </>
    )
}

export default ContactInfo
