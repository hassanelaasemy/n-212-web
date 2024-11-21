import React from 'react'
import { BASE_URL } from "../../../config";
import { useSelector } from 'react-redux';

export default function UserInfo({ content }) {

    const theme = useSelector((state) => state.theme.theme)

    return (
        <>
            <div className="m-auto max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mt-3 mb-3 rounded-full shadow-lg" src={`${BASE_URL}/storage/${content.user.avatar} `} alt="Bonnie image" />
                    <h5 className={`mb-1 text-xl font-medium text-gray-900 ${theme === 'dark' ? 'text-white' : '' }  dark:text-white`}>{content.user.firstName + ' ' + content.user.lastName}</h5>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        {content.user.roles.map((role) => (
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{role.name}</span>
                        ))}

                    </div>
                </div>
            </div>

        </>
    )
}
