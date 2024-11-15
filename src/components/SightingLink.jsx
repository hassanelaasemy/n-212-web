import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SightingLink({ link, linkId, title, methode, Icon }) {

    return (
        <Link
            onClick={methode}
            href={link}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            id={linkId}
        >
            <FontAwesomeIcon style={{ color: 'green', marginRight: '20px' }} icon={Icon} />
            {title}
        </Link>
    )
}
